'use client';

import SectionReveal from "@/app/components/Shared/SectionReveal";

export default function ContactHero() {
  return (
    <SectionReveal>
      <section className="mt-0 py-0 md:py-16 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-black to-slate-900 text-white overflow-hidden">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Let’s Talk.
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Got an idea, project, or just want to connect? Drop a message.
          </p>
        </div>
      </section>
    </SectionReveal>
  );
}
