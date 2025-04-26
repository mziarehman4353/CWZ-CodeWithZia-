'use client';

import LayoutWrapper from '@/app/components/General/LayoutWrapper';
import Hero from './component/Hero';
import FilterButtons from './component/FilterButtons';
import JourneyTimeline from './component/JourneyTimeline';
import CertificateWall from './component/CertificateWall';

export default function JourneyPage() {
  return (
    <LayoutWrapper>
      <main className="flex flex-col items-center justify-center overflow-x-hidden">

        {/* 1. Hero Section */}
        <section className="w-full">
          <Hero />
        </section>

        {/* 2. Filter Buttons */}
        <section className="w-full mt-16">
          <FilterButtons />
        </section>

        {/* 3. Journey Timeline */}
        <section className="w-full mt-24">
          <JourneyTimeline />
        </section>

        {/* 4. Certificate Wall */}
        <section className="w-full mt-24">
          <CertificateWall />
        </section>


      </main>
    </LayoutWrapper>
  );
}
