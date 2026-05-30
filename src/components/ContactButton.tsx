"use client";

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className }: ContactButtonProps) {
  return (
    <button
      className={className}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid white",
        outlineOffset: "-3px",
        borderRadius: "9999px",
        color: "white",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        border: "none",
        cursor: "pointer",
        fontFamily: "'Kanit', sans-serif",
        transition: "opacity 0.2s",
        padding: "clamp(10px,1vw,16px) clamp(28px,3vw,48px)",
        fontSize: "clamp(0.7rem,1vw,1rem)",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
    >
      Contact Me
    </button>
  );
}
