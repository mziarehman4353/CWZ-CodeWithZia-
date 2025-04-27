"use client";

import styles from "../styles/about.module.css"; // Correct path

const techStack = [
  { name: "React", url: "https://react.dev/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { name: "Python", url: "https://www.python.org/" },
  { name: "C++", url: "https://isocpp.org/" },
  { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Flutter", url: "https://flutter.dev/" },
  { name: "Firebase", url: "https://firebase.google.com/" },
  { name: "Git", url: "https://git-scm.com/" },
];

const AboutTechStack = () => {
  return (
    <section className="group max-w-6xl mx-auto px-6 py-20 bg-neutral-100 dark:bg-neutral-900 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl">
      <h2 className="text-3xl font-bold text-left mb-8 text-black">Tech Stack</h2>

      <div className="relative w-full overflow-hidden">
        <div className={`flex whitespace-nowrap ${styles.marquee}`}>
          {techStack.concat(techStack).map((tech, idx) => (
            <a
              key={idx}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 px-6 py-3 bg-white dark:bg-neutral-800 border border-gray-700 rounded-2xl shadow-md text-lg font-semibold text-black hover:text-blue-500 hover:border-blue-500 hover:shadow-2xl transition-all duration-300"
            >
              {tech.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTechStack;
