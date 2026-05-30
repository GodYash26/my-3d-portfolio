"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

const ABOUT_TEXT =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 1.5rem",
        position: "relative",
        background: "#0C0C0C",
      }}
    >
      {/* Decorative corners */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} style={{ position: "absolute", top: "4%", left: "4%", width: "clamp(90px,14vw,210px)", pointerEvents: "none" }}>
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon"
          width={210}
          height={210}
          style={{ width: "100%", height: "auto" }}
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} style={{ position: "absolute", bottom: "8%", left: "10%", width: "clamp(80px,12vw,180px)", pointerEvents: "none" }}>
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object"
          width={180}
          height={180}
          style={{ width: "100%", height: "auto" }}
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} style={{ position: "absolute", top: "4%", right: "4%", width: "clamp(90px,14vw,210px)", pointerEvents: "none" }}>
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego icon"
          width={210}
          height={210}
          style={{ width: "100%", height: "auto" }}
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} style={{ position: "absolute", bottom: "8%", right: "10%", width: "clamp(100px,15vw,220px)", pointerEvents: "none" }}>
        <Image
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D group"
          width={220}
          height={220}
          style={{ width: "100%", height: "auto" }}
        />
      </FadeIn>

      {/* Center content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "3rem",
          maxWidth: 600,
          position: "relative",
          zIndex: 1,
        }}
      >
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading"
            style={{
              fontSize: "clamp(3rem,12vw,160px)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          style={{
            color: "#D7E2EA",
            fontWeight: 500,
            lineHeight: 1.7,
            maxWidth: 560,
            fontSize: "clamp(1rem,1.8vw,1.35rem)",
            fontFamily: "'Kanit', sans-serif",
          }}
        />

        <ContactButton />
      </div>
    </section>
  );
}
