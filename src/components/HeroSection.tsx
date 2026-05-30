"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";

const NAV_LINKS = ["About", "Price", "Projects", "Contact"];

export default function HeroSection() {
  return (
    <section
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0C0C0C",
        overflowX: "clip",
        position: "relative",
      }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1.5rem 2.5rem",
            position: "relative",
            zIndex: 20,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                color: "#D7E2EA",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "clamp(0.85rem,1.4vw,1.4rem)",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div style={{ overflow: "hidden", padding: "0 1rem", position: "relative", zIndex: 20 }}>
        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading"
            style={{
              fontSize: "clamp(4rem,17.5vw,22rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            Hi, i&apos;m Ganesh
          </h1>
        </FadeIn>
      </div>

      {/* Portrait */}
      <Magnet
        padding={150}
        strength={3}
        activeTransition="transform 0.3s ease-out"
        inactiveTransition="transform 0.6s ease-in-out"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          bottom: 0,
          zIndex: 10,
          width: "clamp(260px,38vw,520px)",
        }}
      >
        <FadeIn delay={0.6} y={30}>
          <Image
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Ganesh portrait"
            width={520}
            height={700}
            priority
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
          />
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "0 2.5rem 2rem",
          marginTop: "auto",
          position: "relative",
          zIndex: 20,
        }}
      >
        <FadeIn delay={0.35} y={20}>
          <p
            style={{
              color: "#D7E2EA",
              fontWeight: 300,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              lineHeight: 1.4,
              maxWidth: "clamp(140px,18vw,260px)",
              fontSize: "clamp(0.7rem,1.4vw,1.2rem)",
            }}
          >
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
