"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

const PROJECTS = [
  {
    num: "01",
    category: "Client",
    name: "Nextlevel Studio",
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  },
  {
    num: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  },
  {
    num: "03",
    category: "Client",
    name: "Solaris Digital",
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  },
];

const TOTAL = PROJECTS.length;
const BORDER_RADIUS = "clamp(24px,4vw,60px)";

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} style={{ height: "85vh", position: "relative" }}>
      <motion.div
        style={{
          position: "sticky",
          top: `calc(6rem + ${index * 28}px)`,
          border: "2px solid #D7E2EA",
          background: "#0C0C0C",
          borderRadius: BORDER_RADIUS,
          padding: "clamp(1rem,2vw,2rem)",
          transformOrigin: "top center",
          scale,
        }}
      >
        {/* Card header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "1.5rem" }}>
            <span
              style={{
                fontSize: "clamp(2.5rem,8vw,110px)",
                fontWeight: 900,
                color: "#D7E2EA",
                lineHeight: 1,
                opacity: 0.4,
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              {project.num}
            </span>
            <div>
              <p
                style={{
                  color: "#D7E2EA",
                  opacity: 0.5,
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 400,
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                {project.category}
              </p>
              <h3
                style={{
                  color: "#D7E2EA",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem,2.5vw,2rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Card images */}
        <div
          style={{
            display: "flex",
            gap: "clamp(0.5rem,1.5vw,1rem)",
            height: "clamp(280px,42vh,560px)",
          }}
        >
          <div style={{ width: "40%", display: "flex", flexDirection: "column", gap: "clamp(0.5rem,1vw,1rem)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.col1img1}
              alt=""
              loading="lazy"
              style={{
                width: "100%",
                height: "clamp(120px,16vw,230px)",
                objectFit: "cover",
                borderRadius: BORDER_RADIUS,
                display: "block",
              }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.col1img2}
              alt=""
              loading="lazy"
              style={{
                width: "100%",
                flex: 1,
                objectFit: "cover",
                borderRadius: BORDER_RADIUS,
                display: "block",
              }}
            />
          </div>
          <div style={{ width: "60%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.col2img}
              alt=""
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: BORDER_RADIUS,
                display: "block",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        background: "#0C0C0C",
        borderRadius: "50px 50px 0 0",
        marginTop: "-40px",
        position: "relative",
        zIndex: 10,
        padding: "clamp(3rem,5vw,6rem) clamp(1.2rem,3vw,2.5rem) clamp(4rem,8vw,10rem)",
      }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading"
          style={{
            fontSize: "clamp(3rem,12vw,160px)",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginBottom: "clamp(2rem,5vw,6rem)",
          }}
        >
          Project
        </h2>
      </FadeIn>

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
