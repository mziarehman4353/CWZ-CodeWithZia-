"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/app/components/Shared/SectionReveal";

const AboutIntro = () => {
  return (
    <SectionReveal>
      <section className="max-w-6xl mx-auto px-6 py-20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Block */}
        <div className="w-full md:w-2/3 text-left space-y-6">
          <h2 className="text-3xl font-bold text-black dark:text-white">About Me</h2>

          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl hover:border-blue-500 transition-all duration-300">
            <p className="text-lg text-black dark:text-white leading-8 text-justify">
              Hey, I’m{" "}
              <span className="font-semibold hover:text-blue-500 transition">
                Zia Ul Rehman Zafar
              </span>
              , a full-stack dev who vibes with{" "}
              <Link
                href="https://react.dev/"
                target="_blank"
                className="font-semibold hover:text-blue-600 transition"
              >
                React
              </Link>
              ,{" "}
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="font-semibold hover:text-blue-600 transition"
              >
                Tailwind
              </Link>
              ,{" "}
              <Link
                href="https://cplusplus.com/"
                target="_blank"
                className="font-semibold hover:text-blue-600 transition"
              >
                C++
              </Link>
              , and{" "}
              <Link
                href="https://www.python.org/"
                target="_blank"
                className="font-semibold hover:text-blue-600 transition"
              >
                Python
              </Link>
              . Currently diving into{" "}
              <span className="italic hover:text-blue-500 transition">
                AI and NLP models
              </span>
              , turning ideas into real stuff that works.
              <br />
              Studying{" "}
              <Link
                href="https://www.ums.ac.id/en/study/bachelor-of-informatics-engineering"
                target="_blank"
                className="font-semibold hover:text-blue-500 transition"
              >
                Bachelor in Informatics Engineering
              </Link>{" "}
              on a full scholarship at{" "}
              <Link
                href="https://www.ums.ac.id/"
                target="_blank"
                className="font-semibold hover:text-blue-600 transition"
              >
                Universitas Muhammadiyah Surakarta, Indonesia
              </Link>{" "}
              and always up for building cool things that matter.
            </p>
          </div>
        </div>

        {/* Right: Headshot - hidden on small devices */}
        <div className="hidden md:flex md:w-1/3 justify-center">
          <div className="w-64 h-64 relative rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
            <Image
              src="/images/zia-headshot.jpg"
              alt="Zia Ul Rehman Zafar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </SectionReveal>
  );
};

export default AboutIntro;
