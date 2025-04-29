// lib/gsapUtils.ts
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin only once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Hook to reveal on scroll (fade + slight Y movement)
export const useGsapReveal = (
  selector: string,
  options: ScrollTrigger.Vars = {}
) => {

  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(selector);

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 40 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
            ...options,
          },
        }
      );
    });
  }, [selector, options]);
};
