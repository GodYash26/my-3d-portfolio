"use client";

export default function LiveProjectButton() {
  return (
    <button
      style={{
        border: "2px solid #D7E2EA",
        color: "#D7E2EA",
        background: "transparent",
        borderRadius: "9999px",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        padding: "10px 28px",
        fontSize: "clamp(0.75rem,1.2vw,1rem)",
        cursor: "pointer",
        fontFamily: "'Kanit', sans-serif",
        transition: "background 0.2s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={e => (e.currentTarget.style.background = "rgba(215,226,234,0.1)")}
      onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
    >
      Live Project
    </button>
  );
}
