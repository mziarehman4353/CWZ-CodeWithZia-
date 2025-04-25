"use client";

import styles from "../styles/about.module.css"; // Make sure the path is correct

const techStack = [
  "React",
  "Tailwind CSS",
  "Python",
  "C++",
  "JavaScript",
  "Flutter",
  "Firebase",
  "Git",
];

const AboutTechStack = () => {
  return (
    <section className="py-16 bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">Tech Stack 💻</h2>

      <div className="relative w-full overflow-hidden">
        <div className={`flex whitespace-nowrap ${styles.marquee}`}>
          {techStack.concat(techStack).map((tech, idx) => (
            <div
              key={idx}
              className="mx-6 px-6 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl shadow-md text-lg font-semibold text-gray-800 dark:text-gray-200"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTechStack;
