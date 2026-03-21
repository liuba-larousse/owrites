"use client";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "#ffffff" : "#1a2744";
  const gradientId = `logo-gradient-${variant}`;

  return (
    <span className={`inline-flex items-center gap-1.5 select-none ${className}`}>
      {/* Gradient italic calligraphic O */}
      <svg
        width="32"
        height="40"
        viewBox="0 0 32 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="4" y1="2" x2="28" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7272B8" />
            <stop offset="100%" stopColor="#E8862A" />
          </linearGradient>
        </defs>
        {/* Italic oval O shape — slight lean, thin stroke, no fill */}
        <ellipse
          cx="17"
          cy="20"
          rx="11"
          ry="17"
          stroke={`url(#${gradientId})`}
          strokeWidth="2.2"
          fill="none"
          transform="rotate(-8 17 20)"
        />
      </svg>

      {/* "writes" text */}
      <span
        style={{
          color: textColor,
          fontFamily: "var(--font-sans, Manrope, sans-serif)",
          fontWeight: 800,
          fontSize: "1.25rem",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        writes
      </span>
    </span>
  );
}
