"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/consulting", label: "Consulting" },
  { href: "/tarifs", label: "Tarifs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "16px clamp(20px, 4vw, 48px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: "blur(20px)",
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(255,255,255,0.92)",
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 20,
          color: "var(--black)",
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            background: "var(--orange)",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4z" />
          </svg>
        </div>
        Owrites
      </Link>

      {/* Desktop nav — pill container */}
      <nav
        className="hidden md:flex"
        style={{
          gap: 8,
          alignItems: "center",
          background: "var(--off-white)",
          borderRadius: "var(--r-full)",
          padding: 4,
        }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              padding: "8px 20px",
              borderRadius: "var(--r-full)",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--gray-dark)",
              textDecoration: "none",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--black)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--gray-dark)";
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <Link
        href="https://calendly.com/olaniyanolaide/discovery-call"
        target="_blank"
        rel="noopener"
        className="hidden md:inline-flex"
        style={{
          background: "var(--orange)",
          color: "#fff",
          padding: "10px 24px",
          borderRadius: "var(--r-full)",
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = "var(--orange-hover)";
          el.style.transform = "translateY(-1px)";
          el.style.boxShadow = "0 8px 24px rgba(255,82,2,0.25)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.background = "var(--orange)";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }}
      >
        Réserver un appel →
      </Link>

      {/* Mobile toggle */}
      <button
        className="md:hidden"
        style={{
          background: "none",
          border: "1px solid var(--gray-200)",
          borderRadius: "var(--r-sm)",
          padding: "8px 10px",
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--black)"
          strokeWidth="2"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#fff",
            borderTop: "1px solid var(--gray-100)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                padding: "10px 12px",
                borderRadius: "var(--r-sm)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--black)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ paddingTop: 12, borderTop: "1px solid var(--gray-100)", marginTop: 8 }}>
            <Link
              href="https://calendly.com/olaniyanolaide/discovery-call"
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="btn-primary"
              style={{ justifyContent: "center" }}
            >
              Réserver un appel →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
