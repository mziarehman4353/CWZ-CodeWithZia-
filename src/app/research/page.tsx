'use client';

import LayoutWrapper from "@/app/components/General/LayoutWrapper";
import Hero from './components/Hero';
import CategoriesFilter from './components/CategoriesFilter';
import ResearchGrid from './components/ResearchGrid';
import FeaturedSpotlight from './components/FeaturedSpotlight';
import ResearchTimeline from './components/ResearchTimeline';
import PersonalTouch from './components/PersonalTouch';

export default function ResearchPage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <Hero />

      {/* Categories Filter */}
      <CategoriesFilter />

      {/* Research Grid */}
      <ResearchGrid />

      {/* Featured Spotlight */}
      <FeaturedSpotlight />

      {/* Research Timeline */}
      <ResearchTimeline />

      {/* Personal Touch Closing */}
      <PersonalTouch />
    </LayoutWrapper>
  );
}
