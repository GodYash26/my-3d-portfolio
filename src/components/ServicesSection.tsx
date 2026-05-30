"use client";

import FadeIn from "./FadeIn";

const SERVICES = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.",
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        background: "#FFFFFF",
        borderRadius: "50px 50px 0 0",
        padding: "clamp(3rem,6vw,8rem) clamp(1.2rem,4vw,2.5rem)",
      }}
    >
      <FadeIn y={40}>
        <h2
          style={{
            fontSize: "clamp(3rem,12vw,160px)",
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#0C0C0C",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(2rem,5vw,7rem)",
          }}
        >
          Services
        </h2>
      </FadeIn>

      <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
        {SERVICES.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "clamp(1rem,3vw,2.5rem)",
                padding: "clamp(1.5rem,3vw,3rem) 0",
                borderTop: "1px solid rgba(12,12,12,0.15)",
                ...(i === SERVICES.length - 1
                  ? { borderBottom: "1px solid rgba(12,12,12,0.15)" }
                  : {}),
              }}
            >
              <span
                style={{
                  fontSize: "clamp(3rem,10vw,140px)",
                  fontWeight: 900,
                  color: "#0C0C0C",
                  lineHeight: 1,
                  minWidth: "fit-content",
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                {svc.num}
              </span>
              <div style={{ paddingTop: "0.4rem" }}>
                <h3
                  style={{
                    fontWeight: 500,
                    textTransform: "uppercase",
                    fontSize: "clamp(1rem,2.2vw,2.1rem)",
                    color: "#0C0C0C",
                    marginBottom: "0.4rem",
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  {svc.name}
                </h3>
                <p
                  style={{
                    fontWeight: 300,
                    lineHeight: 1.7,
                    maxWidth: "42rem",
                    fontSize: "clamp(0.85rem,1.6vw,1.25rem)",
                    opacity: 0.6,
                    color: "#0C0C0C",
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  {svc.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
