"use client";
import LayoutWrapper from "@/app/components/General/LayoutWrapper";

// Section components
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import HowWeWorkTimeline from "./components/HowWeWorkTimeline";
import Testimonials from "./components/Testimonials"; // Corrected import
import StickyCTA from "./components/StickyCTA";

export default function ServicesPage() {
  return (
    <LayoutWrapper>
      <main className="overflow-hidden relative">
        {/* 🧩 Section 1: Hero */}
        <section id="hero" className="py-6 px-4 sm:px-8 lg:px-16">
          <Hero />
        </section>

        {/* 🗂 Section 2: Services Grid */}
        <section id="services" className="py-6 bg-gray-50 dark:bg-neutral-900 px-4 sm:px-8 lg:px-16">
          <ServicesGrid />
        </section>

        {/* 💼 Section 3: How We Work Timeline */}
        <section id="how-we-work" className="py-6 px-4 sm:px-8 lg:px-16">
          <HowWeWorkTimeline />
        </section>

        {/* 💬 Section 4: Testimonials + Tech Logos */}
        <section id="testimonials" className="py-6 px-4 sm:px-8 lg:px-16">
          <Testimonials />
        </section>
      </main>

      {/* 📌 Sticky Call-to-Action Button */}
      <StickyCTA />
    </LayoutWrapper>
  );
}
