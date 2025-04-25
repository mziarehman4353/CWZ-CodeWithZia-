"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../styles/about.module.css"; // Ensure this path is correct

const AboutValues = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  
  const [missionRevealed, setMissionRevealed] = useState(false);
  const [visionRevealed, setVisionRevealed] = useState(false);

  // Scroll reveal logic
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
    <section className="py-16 bg-neutral-100 dark:bg-neutral-900">
      <h2 className="text-3xl font-bold text-center mb-8">Our Core Values 🌍</h2>

      <div className="grid md:grid-cols-2 gap-8 px-4">
        {/* Mission Block */}
        <div
          ref={missionRef}
          className={`p-8 rounded-lg shadow-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 ${missionRevealed ? styles.reveal : ""}`}
        >
          <h3 className="text-2xl font-semibold text-center mb-4">🚀 Mission</h3>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            To use technology as a tool for creating practical solutions that make life easier, learning accessible, and opportunities global — especially for underrepresented communities.
          </p>
        </div>

        {/* Vision Block */}
        <div
          ref={visionRef}
          className={`p-8 rounded-lg shadow-md bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 ${visionRevealed ? styles.reveal : ""}`}
        >
          <h3 className="text-2xl font-semibold text-center mb-4">👁️ Vision</h3>
          <p className="text-lg text-gray-800 dark:text-gray-200">
            A world where education isn’t limited to books or borders, but flows into everyday life through innovation, collaboration, and compassion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
