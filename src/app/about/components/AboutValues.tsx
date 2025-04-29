"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../styles/about.module.css"; // Ensure your reveal animations are defined here

const AboutValues = () => {
  const missionRef = useRef<HTMLDivElement | null>(null);
  const visionRef = useRef<HTMLDivElement | null>(null);

  const [missionRevealed, setMissionRevealed] = useState(false);
  const [visionRevealed, setVisionRevealed] = useState(false);

  useEffect(() => {
    const missionNode = missionRef.current;
    const visionNode = visionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === missionNode) setMissionRevealed(true);
          if (entry.target === visionNode) setVisionRevealed(true);
        }
      },
      { threshold: 0.2 }
    );

    if (missionNode) observer.observe(missionNode);
    if (visionNode) observer.observe(visionNode);

    return () => {
      if (missionNode) observer.unobserve(missionNode);
      if (visionNode) observer.unobserve(visionNode);
    };
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
      <h2 className="text-3xl font-bold text-black text-left mb-12">Core Values</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Vision (on left in desktop) */}
        <div
          ref={visionRef}
          className={`order-1 md:order-1 bg-white p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 ${visionRevealed ? styles.reveal : ""}`}
        >
          <h3 className="text-2xl font-semibold text-black text-center mb-6">
            Vision
          </h3>
          <p className="text-lg text-black leading-8 text-justify">
            A world where education isn’t limited to books or borders, but flows into everyday life through innovation, collaboration, and compassion.
          </p>
        </div>

        {/* Mission (on right in desktop) */}
        <div
          ref={missionRef}
          className={`order-2 md:order-2 bg-white p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 ${missionRevealed ? styles.reveal : ""}`}
        >
          <h3 className="text-2xl font-semibold text-black text-center mb-6">
            Mission
          </h3>
          <p className="text-lg text-black leading-8 text-justify">
            To use technology as a tool for creating practical solutions that make life easier, learning accessible, and opportunities global especially for underrepresented communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
