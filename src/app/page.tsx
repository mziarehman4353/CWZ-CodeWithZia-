"use client";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import LayoutWrapper from "@/app/components/General/LayoutWrapper";
import HeroSection from "@/app/components/Hero/HeroSection";
import AboutValues from "./about/components/AboutValues";
import ResearchGrid from "./research/components/ResearchGrid";
import ServicesGrid from "./services/components/ServicesGrid";
import HowWeWorkTimeline from "./services/components/HowWeWorkTimeline";
import PersonalTouch from "./research/components/PersonalTouch";

export default function Home() {
  return (
    <LayoutWrapper>
      <HeroSection />

      <div className="px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto space-y-12 mt-6">
        <section>
          <AboutValues />
        </section>

        <section>
          <ResearchGrid />
        </section>

        <section>
          <ServicesGrid />
        </section>

        <section>
          <HowWeWorkTimeline />
        </section>

        <section>
          <PersonalTouch />
        </section>
      </div>

      <Analytics />
      <SpeedInsights />
    </LayoutWrapper>
  );
}
