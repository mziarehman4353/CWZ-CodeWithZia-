'use client';

import LayoutWrapper from "@/app/components/General/LayoutWrapper";
import Hero from './components/Hero';
import ResearchGrid from './components/ResearchGrid';
import FeaturedSpotlight from './components/FeaturedSpotlight';
import ResearchTimeline from './components/ResearchTimeline';
import PersonalTouch from './components/PersonalTouch';

export default function ResearchPage() {
  return (
    <LayoutWrapper>
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full mt-4">
        <ResearchGrid />
      </section>
      <section className="w-full mt-4">
        <FeaturedSpotlight />
      </section>
      <section className="w-full mt-4">
        <ResearchTimeline />
      </section>
      <section className="w-full mt-4">
        <PersonalTouch />
      </section>
    </LayoutWrapper>
  );
}
