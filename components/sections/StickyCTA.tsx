"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .sticky-cta-bar {
          display: none;
        }
        @media (max-width: 768px) {
          .sticky-cta-bar {
            display: flex;
          }
        }
      `}</style>
      <div
        className="sticky-cta-bar"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 99,
          background: "#fff",
          borderTop: "1px solid var(--gray-200)",
          padding: "12px 20px",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          boxShadow: "0 -4px 24px rgba(0,0,0,0.06)",
          transform: show ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s ease",
        }}
      >
        <span
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--black)",
          }}
        >
          Votre LinkedIn mérite mieux →
        </span>
        <Link
          href="https://calendly.com/olaniyanolaide/discovery-call"
          target="_blank"
          rel="noopener"
          className="btn-primary"
          style={{ padding: "12px 24px", fontSize: 13 }}
        >
          Appel gratuit{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </>
  );
}
