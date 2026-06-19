export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    initials: string;
    color: string;
  };
  publishedAt: string;
  readTime: string;
  coverColor: string;
  featured?: boolean;
}

// Static blog posts — replace with CMS/API/AI-agent integration
export const blogPosts: BlogPost[] = [
  {
    slug: "cout-ghostwriter-linkedin-2026",
    title: "Combien coûte un ghostwriter LinkedIn en 2026 ? Ce que les fondateurs paient vraiment",
    excerpt:
      "Guide complet des tarifs du ghostwriting LinkedIn en 2026. Les vrais prix du marché, ce qui est inclus à chaque niveau, et comment choisir le bon ghostwriter pour votre lead generation B2B.",
    category: "Tarifs & Stratégie",
    tags: ["ghostwriter", "tarifs", "LinkedIn", "lead generation", "B2B"],
    author: {
      name: "Olaide Olaniyan",
      role: "Fondatrice — Owrites",
      initials: "OO",
      color: "bg-brand-500",
    },
    publishedAt: "2026-01-01",
    readTime: "8 min",
    coverColor: "from-brand-600 to-brand-800",
    featured: true,
    content: "Article complet disponible sur la page dédiée.",
  },
  {
    slug: "generer-leads-qualifies-linkedin",
    title: "Comment générer des leads qualifiés sur LinkedIn en 2026 : le guide complet",
    excerpt:
      "Stratégie de contenu, optimisation de profil, social selling — le guide complet pour transformer votre LinkedIn en machine à lead generation B2B. 100% organique.",
    category: "Lead Generation",
    tags: ["lead generation", "LinkedIn", "social selling", "B2B", "prospection"],
    author: {
      name: "Olaide Olaniyan",
      role: "Fondatrice — Owrites",
      initials: "OO",
      color: "bg-brand-500",
    },
    publishedAt: "2026-02-15",
    readTime: "10 min",
    coverColor: "from-brand-600 to-brand-800",
    featured: false,
    content: "Article complet disponible sur la page dédiée.",
  },
  {
    slug: "ghostwriter-linkedin-voix-authenticite",
    title: "Un ghostwriter LinkedIn gardera-t-il ma voix ? Authenticité et personal branding expliqués",
    excerpt:
      "La question n°1 des fondateurs avant de déléguer leur LinkedIn. Comment fonctionne la capture de voix, pourquoi le mauvais ghostwriting sonne faux, et comment choisir un ghostwriter qui préserve votre authenticité.",
    category: "Voix & Authenticité",
    tags: ["ghostwriter", "voix", "authenticité", "personal branding", "LinkedIn"],
    author: {
      name: "Olaide Olaniyan",
      role: "Fondatrice — Owrites",
      initials: "OO",
      color: "bg-brand-500",
    },
    publishedAt: "2026-01-10",
    readTime: "7 min",
    coverColor: "from-brand-600 to-brand-800",
    featured: false,
    content: "Article complet disponible sur la page dédiée.",
  },
  {
    slug: "strategie-contenu-b2b-2025",
    title: "5 piliers d'une stratégie de contenu B2B efficace en 2025",
    excerpt:
      "Découvrez comment les entreprises B2B leaders génèrent des leads qualifiés grâce à une stratégie de contenu structurée et mesurable.",
    category: "Stratégie",
    tags: ["stratégie", "B2B", "leads", "contenu"],
    author: {
      name: "Olaide Olaniyan",
      role: "Fondatrice — Owrites",
      initials: "OO",
      color: "bg-brand-500",
    },
    publishedAt: "2025-03-12",
    readTime: "8 min",
    coverColor: "from-brand-600 to-brand-800",
    featured: false,
    content: `
## Introduction

Le marketing de contenu B2B a profondément évolué. En 2025, les acheteurs professionnels effectuent plus de 70% de leur parcours d'achat de manière autonome, avant même de contacter un commercial. Votre contenu est votre premier commercial.

Voici les 5 piliers qui distinguent les stratégies de contenu B2B qui génèrent des résultats mesurables de celles qui n'en génèrent pas.

## 1. Connaître votre ICP (Ideal Customer Profile) sur le bout des doigts

Avant d'écrire une seule ligne, vous devez savoir précisément à qui vous vous adressez. Pas juste "les PME belges" — mais le directeur marketing d'une PME industrielle belge de 50 à 200 employés, responsable d'un budget de 200k€, qui cherche à réduire son coût d'acquisition client.

**Actions concrètes :**
- Interviewer vos 5 meilleurs clients sur leurs défis et décisions d'achat
- Identifier les 3 questions qu'ils posent avant d'acheter
- Cartographier leur parcours de décision

## 2. Le triangle SEO-Éducation-Conversion

Chaque contenu doit servir l'un de ces trois objectifs :

1. **SEO** : Capturer du trafic organique sur des requêtes à intention commerciale
2. **Éducation** : Positionner votre expertise et éduquer votre prospect
3. **Conversion** : Transformer un lecteur en lead ou un lead en client

La plupart des entreprises ne produisent que du contenu "éducatif" général sans stratégie SEO ni appels à l'action clairs. Résultat : du contenu qui ne génère pas de trafic et ne convertit pas.

## 3. La régularité comme avantage concurrentiel

Google et LinkedIn récompensent la régularité. Les entreprises qui publient 3 articles par semaine dominent celles qui publient 3 articles par an, même si la qualité est comparable.

**La règle des 90 jours** : Aucune stratégie de contenu ne montre ses résultats avant 90 jours de publication régulière. Si vous abandonnez avant, vous laissez le bénéfice à vos concurrents.

## 4. Le contenu comme actif, pas comme dépense

Un article bien rédigé et bien positionné peut générer des leads pendant 3 à 5 ans. C'est un actif qui prend de la valeur avec le temps, contrairement à une campagne publicitaire qui s'arrête dès que vous coupez le budget.

Calculez le ROI différemment : un article à 500€ qui génère 2 leads par mois pendant 36 mois a un coût d'acquisition de moins de 7€ par lead.

## 5. La distribution est aussi importante que la production

80% de votre effort doit aller à la création, mais 20% doit aller à la distribution. Un article que personne ne lit n'a aucune valeur.

**Canaux de distribution B2B prioritaires :**
- LinkedIn (organique + sponsored)
- Newsletter email
- Comunautés sectorielles
- Partenaires et co-marketing

## Conclusion

Une stratégie de contenu B2B efficace n'est pas un sprint — c'est un marathon avec des jalons mesurables. Commencez avec un ICP clair, produisez régulièrement, distribuez intelligemment et mesurez tout.

Chez Owrites, nous avons accompagné des centaines d'entreprises francophones dans cette transformation. [Contactez-nous](/contact) pour un audit de votre stratégie de contenu actuelle.
    `.trim(),
  },
  {
    slug: "ia-redaction-contenu-entreprise",
    title: "Comment l'IA transforme la rédaction de contenu d'entreprise",
    excerpt:
      "L'IA ne remplace pas les rédacteurs humains — elle les amplifie. Voici comment combiner expertise humaine et automatisation intelligente.",
    category: "Intelligence Artificielle",
    tags: ["IA", "automatisation", "rédaction", "agent AI"],
    author: {
      name: "Olaide Olaniyan",
      role: "Fondatrice — Owrites",
      initials: "OO",
      color: "bg-brand-500",
    },
    publishedAt: "2025-03-05",
    readTime: "6 min",
    coverColor: "from-purple-600 to-purple-900",
    featured: false,
    content: `
## L'IA comme collaborateur éditorial

Depuis 2023, les modèles de langage (LLM) ont atteint un niveau de qualité qui change fondamentalement la production de contenu. Mais l'erreur que font beaucoup d'entreprises est de penser que l'IA remplace les humains. Elle les augmente.

## Ce que l'IA fait mieux que les humains

- **Volume et vitesse** : un agent IA peut produire une première ébauche en secondes
- **Cohérence de format** : structure, balises, métadonnées — jamais oubliées
- **Optimisation SEO en temps réel** : densité de mots-clés, lisibilité, structure des titres
- **Adaptation du ton** : une fois entraîné sur votre marque, l'IA maintient une voix cohérente

## Ce que les humains font mieux que l'IA

- **Insight original** : les vrais insights viennent de l'expérience terrain
- **Empathie** : comprendre le contexte émotionnel d'un acheteur B2B
- **Storytelling authentique** : les histoires vraies, les témoignages, les nuances culturelles
- **Jugement éditorial** : savoir ce qui intéresse réellement votre audience

## Le modèle hybride Owrites

Notre approche : l'IA génère une base structurée (recherche, plan, première ébauche), un expert humain apporte l'insight, le storytelling et la révision, puis l'IA optimise la version finale pour le SEO.

Résultat : du contenu 3x plus rapide, 40% moins cher, avec la même qualité éditoriale.

## Comment connecter un agent IA à votre blog

L'agent IA Owrites se connecte à votre CMS via API REST standard. Il peut :

1. Créer des drafts selon un calendrier éditorial
2. Publier automatiquement les articles validés
3. Mettre à jour les anciens articles selon les nouvelles tendances
4. Générer des variantes pour l'A/B testing

[Découvrez notre agent IA éditorial →](/services#ai-agent)
    `.trim(),
  },
  {
    slug: "seo-b2b-belgique-suisse",
    title: "SEO B2B en Belgique et Suisse : les spécificités à connaître",
    excerpt:
      "Les marchés belge et suisse ont leurs propres codes. Adaptez votre stratégie SEO pour capter le trafic qualifié francophone.",
    category: "SEO",
    tags: ["SEO", "Belgique", "Suisse", "francophone", "local"],
    author: {
      name: "Olaide Olaniyan",
      role: "Fondatrice — Owrites",
      initials: "OO",
      color: "bg-brand-500",
    },
    publishedAt: "2025-02-28",
    readTime: "7 min",
    coverColor: "from-emerald-600 to-teal-800",
    featured: false,
    content: `
## Les particularités du SEO francophone

Le SEO en Belgique et en Suisse francophone n'est pas identique au SEO en France. Les volumes de recherche sont plus faibles, la concurrence est souvent moins agressive, et les opportunités de positionnement sont nombreuses pour qui comprend les nuances locales.

## Volume vs. Qualité : le paradoxe du SEO belge et suisse

En Belgique francophone, le mot-clé "logiciel comptabilité PME" génère peut-être 200 recherches mensuelles contre 5 000 en France. Mais les leads générés sont 3x plus qualifiés car la recherche est très ciblée géographiquement.

**Implication stratégique :** visez des positions 1-3 sur des mots-clés à faible volume mais à forte intention d'achat locale.

## Géo-modifiants essentiels

Intégrez systématiquement :
- "Belgique", "Bruxelles", "Wallonie", "Liège"
- "Suisse romande", "Genève", "Lausanne", "Fribourg"
- Les secteurs spécifiques ("secteur financier Suisse", "PME belge")

## L'importance du contenu en fr-BE et fr-CH

Google distingue les variantes linguistiques. "Nonante" (Belgique/Suisse) plutôt que "quatre-vingt-dix", "fiduciaire" plutôt que "cabinet comptable"... ces nuances lexicales influencent votre positionnement local.

## Stratégie de maillage local

Créez des pages de destination spécifiques par géographie :
- /services-belgique
- /services-suisse-romande
- /blog/belgique/[catégorie]

Et obtenez des liens entrants depuis des médias et directories locaux (Références, BeCentral, PME Magazine Suisse…).

## Conclusion

Le SEO dans la francophonie belge et suisse est une opportunité sous-exploitée. Avec la bonne stratégie, une entreprise peut dominer son segment en 6 à 12 mois. [Parlez-nous de votre projet](/contact) pour un audit SEO gratuit.
    `.trim(),
  },
  {
    slug: "copywriting-email-b2b-convertir",
    title: "Copywriting email B2B : les techniques qui font vraiment convertir",
    excerpt:
      "Taux d'ouverture de 40%, taux de clic de 12% — voici les formules d'email B2B qui surpassent la moyenne du secteur.",
    category: "Email Marketing",
    tags: ["email", "copywriting", "automation", "conversion"],
    author: {
      name: "Olaide Olaniyan",
      role: "Fondatrice — Owrites",
      initials: "OO",
      color: "bg-brand-500",
    },
    publishedAt: "2025-02-20",
    readTime: "5 min",
    coverColor: "from-rose-600 to-pink-800",
    featured: false,
    content: `
## Pourquoi l'email B2B reste le canal roi

Malgré la prolifération des réseaux sociaux et des outils de messaging, l'email reste le canal avec le meilleur ROI en B2B : 42€ pour chaque euro investi selon le DMA. La clé ? Un copywriting qui respecte le contexte professionnel de votre lecteur.

## La règle de l'objet : 6 mots maximum

80% du taux d'ouverture se décide sur l'objet. En B2B, les objets qui performent :
- **Question directe** : "Votre stratégie content pour Q2 ?"
- **Bénéfice chiffré** : "Comment Proximus a réduit son CAC de 34%"
- **Curiosité + pertinence** : "Ce que vos concurrents publient (et pas vous)"

## Structure d'un email B2B qui convertit

1. **Accroche** (1-2 lignes) : le problème ou l'insight
2. **Corps** (3-5 lignes) : la solution ou le développement
3. **Preuve** (1-2 lignes) : chiffre, témoignage ou exemple
4. **CTA unique** : une seule action demandée

Un email B2B ne doit jamais dépasser 200 mots. Si vous ne pouvez pas le dire en 200 mots, c'est que vous n'avez pas encore identifié votre message principal.

## A/B testing : ce qui surprend toujours

Dans nos tests sur 500 campagnes B2B francophones :
- Le prénom dans l'objet **diminue** le taux d'ouverture de -8% (paraît trop vendeur)
- Les emojis **augmentent** le taux d'ouverture de +15% dans les secteurs créatifs et tech
- L'heure optimale d'envoi : **mardi 10h ou jeudi 14h** pour le marché francophone

[Découvrez notre service d'email marketing →](/services#email)
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPosts(options?: {
  category?: string;
  limit?: number;
  featured?: boolean;
}): BlogPost[] {
  let posts = [...blogPosts];

  if (options?.category) {
    posts = posts.filter((p) => p.category === options.category);
  }
  if (options?.featured) {
    posts = posts.filter((p) => p.featured);
  }
  if (options?.limit) {
    posts = posts.slice(0, options.limit);
  }

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
