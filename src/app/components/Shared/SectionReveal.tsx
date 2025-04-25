"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils"; // optional: utility for conditional classes if you're using one

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // optional delay in ms
};

const SectionReveal = ({ children, className, delay = 0 }: SectionRevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out transform opacity-0 translate-y-6",
        isVisible && "opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionReveal;
