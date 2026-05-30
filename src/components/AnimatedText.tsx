"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function AnimatedChar({ char, progress, start, end }: { char: string; progress: MotionValue<number>; start: number; end: number }) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }}>
        {char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const total = chars.length;

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char === " " ? "\u00A0" : char}
          progress={scrollYProgress}
          start={i / total}
          end={Math.min((i + 1) / total + 0.1, 1)}
        />
      ))}
    </p>
  );
}
