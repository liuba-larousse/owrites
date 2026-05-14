import { NextRequest, NextResponse } from "next/server";

const ODOO_URL = process.env.ODOO_URL!;
const ODOO_DB = process.env.ODOO_DB!;
const ODOO_USER = process.env.ODOO_USER!;
const ODOO_PASSWORD = process.env.ODOO_PASSWORD!;

async function odooCall(path: string, params: object, cookie?: string) {
  const res = await fetch(`${ODOO_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(cookie ? { Cookie: cookie } : {}),
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      id: 1,
      params,
    }),
  });
  const data = await res.json();
  return { data, cookie: res.headers.get("set-cookie") ?? "" };
}

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    // 1. Authenticate with Odoo
    const { data: authData, cookie } = await odooCall("/web/session/authenticate", {
      db: ODOO_DB,
      login: ODOO_USER,
      password: ODOO_PASSWORD,
    });

    if (!authData.result?.uid) {
      console.error("Odoo auth failed:", authData);
      return NextResponse.json({ error: "Erreur d'authentification Odoo." }, { status: 500 });
    }

    // 2. Create CRM lead
    const description = [
      company ? `Entreprise : ${company}` : "",
      phone ? `Téléphone : ${phone}` : "",
      service ? `Service : ${service}` : "",
      `\n${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const { data: leadData } = await odooCall(
      "/web/dataset/call_kw",
      {
        model: "crm.lead",
        method: "create",
        args: [
          {
            name: `[Owrites] ${name}${company ? ` — ${company}` : ""}`,
            email_from: email,
            phone: phone || "",
            description,
            tag_ids: [],
          },
        ],
        kwargs: {},
      },
      cookie
    );

    if (leadData.error) {
      console.error("Odoo lead creation failed:", leadData.error);
      return NextResponse.json({ error: "Erreur lors de la création du lead." }, { status: 500 });
    }

    return NextResponse.json({ success: true, leadId: leadData.result });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
