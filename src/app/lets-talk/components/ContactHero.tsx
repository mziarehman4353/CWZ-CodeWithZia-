"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import SectionReveal from "@/app/components/Shared/SectionReveal";

export default function ContactHero() {
  return (
    <SectionReveal>
      <section className="relative w-full py-24 md:py-32 px-6 md:px-16 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-black to-slate-900 text-white overflow-hidden">
        {/* Background animation (optional or replaceable with your own animation) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0 pointer-events-none">
          <Player
            autoplay
            loop
            src="https://lottie.host/5dbf2bc2-bfa1-42df-9365-9f34355fd8c4/yIsrd8XAi5.json" // sample typing animation
            style={{ height: "100%", width: "100%" }}
          />
        </div>

        <div className="relative z-10 max-w-3xl text-center">
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
