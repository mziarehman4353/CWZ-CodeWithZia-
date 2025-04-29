"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
import LayoutWrapper from "@/app/components/General/LayoutWrapper";
import HeroSection from "@/app/components/Hero/HeroSection"; // Import the Hero section
import AboutValues from "./about/components/AboutValues";
import ResearchGrid from "./research/components/ResearchGrid";
import ServicesGrid from "./services/components/ServicesGrid";
import HowWeWorkTimeline from "./services/components/HowWeWorkTimeline";
import PersonalTouch from './research/components/PersonalTouch';

export default function Home() {
  return (
    <LayoutWrapper>
      <HeroSection /> {/* Fullscreen video + animated typing */}

      <section className="w-full mt-6">
        <AboutValues />
      </section>

      <section className="w-full mt-6">
        <ResearchGrid />
      </section>

      <section className="w-full mt-6">
        <ServicesGrid />
      </section>

      {/* 💼 Section 3: How We Work Timeline */}
      <section className="w-full mt-6">
        <HowWeWorkTimeline />
      </section>

      <section className="w-full mt-6">
        <PersonalTouch />
      </section>

      {/* Add Analytics for page tracking */}
      <Analytics />
      <SpeedInsights />
      
      <br />
      <br />
    </LayoutWrapper>
  );
}
