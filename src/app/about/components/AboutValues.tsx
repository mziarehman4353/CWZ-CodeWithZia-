"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../styles/about.module.css"; // Keep your animation styles

const AboutValues = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  const [missionRevealed, setMissionRevealed] = useState(false);
  const [visionRevealed, setVisionRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.target === missionRef.current) {
          setMissionRevealed(true);
        }
        if (entry.isIntersecting && entry.target === visionRef.current) {
          setVisionRevealed(true);
        }
      },
      { threshold: 0.2 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);

  return (
    <section className="group max-w-6xl mx-auto px-6 py-20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
      {/* Heading same as previous */}
      <h2 className="text-3xl font-bold text-black text-left mb-12">Core Values</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Mission Block */}
        <div
          ref={missionRef}
          className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 ${missionRevealed ? styles.reveal : ""}`}
        >
          <h3 className="text-2xl font-semibold text-black text-center mb-6">
            Mission
          </h3>
          <p className="text-lg text-black leading-8 text-justify">
            To use technology as a tool for creating practical solutions that make life easier, learning accessible, and opportunities global — especially for underrepresented communities.
          </p>
        </div>

        {/* Vision Block */}
        <div
          ref={visionRef}
          className={`bg-white p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-300 ${visionRevealed ? styles.reveal : ""}`}
        >
          <h3 className="text-2xl font-semibold text-black text-center mb-6">
            Vision
          </h3>
          <p className="text-lg text-black leading-8 text-justify">
            A world where education isn’t limited to books or borders, but flows into everyday life through innovation, collaboration, and compassion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
