"use client";

import { useRef, ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !innerRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const threshold = Math.max(rect.width, rect.height) / 2 + padding;

    if (dist < threshold) {
      if (!activeRef.current) {
        innerRef.current.style.transition = activeTransition;
        activeRef.current = true;
      }
      innerRef.current.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
    } else {
      if (activeRef.current) {
        innerRef.current.style.transition = inactiveTransition;
        innerRef.current.style.transform = "translate3d(0,0,0)";
        activeRef.current = false;
      }
    }
  };

  const handleMouseLeave = () => {
    if (!innerRef.current) return;
    innerRef.current.style.transition = inactiveTransition;
    innerRef.current.style.transform = "translate3d(0,0,0)";
    activeRef.current = false;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={innerRef} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
