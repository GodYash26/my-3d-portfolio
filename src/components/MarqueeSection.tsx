"use client";

import { useEffect, useRef } from "react";

const GIFS_ROW1 = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const GIFS_ROW2 = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;
      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;
      const offset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imgStyle: React.CSSProperties = {
    width: 420,
    height: 270,
    borderRadius: 16,
    objectFit: "cover",
    flexShrink: 0,
    display: "block",
  };

  const rowStyle: React.CSSProperties = {
    display: "flex",
    gap: 12,
    willChange: "transform",
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0C0C0C",
        paddingTop: "clamp(6rem,10vw,10rem)",
        paddingBottom: "2.5rem",
        overflow: "hidden",
      }}
    >
      <div ref={row1Ref} style={{ ...rowStyle, marginBottom: 12 }}>
        {[...GIFS_ROW1, ...GIFS_ROW1, ...GIFS_ROW1].map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt="" loading="lazy" style={imgStyle} />
        ))}
      </div>
      <div ref={row2Ref} style={rowStyle}>
        {[...GIFS_ROW2, ...GIFS_ROW2, ...GIFS_ROW2].map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt="" loading="lazy" style={imgStyle} />
        ))}
      </div>
    </section>
  );
}
