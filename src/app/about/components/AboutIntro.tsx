"use client";

import Image from "next/image";
import SectionReveal from "@/app/components/Shared/SectionReveal";

const AboutIntro = () => {
  return (
    <SectionReveal>
      <section className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Block */}
        <div className="md:w-2/3 text-left space-y-6">
          <h2 className="text-4xl font-bold text-blue-500">About Me</h2>
          <p className="text-lg text-gray-300 leading-8 bg-[#1a1a1a] p-6 rounded-2xl shadow-lg border border-gray-700">
            Hey, I’m <span className="font-semibold text-white">Zia Ul Rehman Zafar</span> — a full-stack dev who vibes with <span className="text-blue-400">React</span>, <span className="text-blue-400">Tailwind</span>, <span className="text-blue-400">C++</span>, and <span className="text-blue-400">Python</span>.
            Currently diving into the world of <span className="italic text-white">AI and NLP models</span>, turning ideas into real stuff that works.
            <br /><br />
            I’m studying <span className="font-semibold text-white">Bachelor in Informatic Engineering</span> on a full scholarship at <span className="text-blue-400">Universitas Muhammadiyah Surakarta, Indonesia</span> and always up for building cool things that matter.
          </p>
        </div>

        {/* Right: Headshot */}
        <div className="md:w-1/3 flex justify-center">
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
