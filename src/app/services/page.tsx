import LayoutWrapper from "@/app/components/General/LayoutWrapper";

// Section components
import Hero from "./components/Hero";
import ServicesGrid from "./components/ServicesGrid";
import HowWeWorkTimeline from "./components/HowWeWorkTimeline";
import TestimonialsSlider from "./components/Testimonials";
import StickyCTA from "./components/StickyCTA";
import CommandPalette from "./components/CommandPalette";

export default function ServicesPage() {
  return (
    <LayoutWrapper>
      <main className="overflow-hidden relative">
 {/* 🧩 Section 1: Hero */}
        <section id="hero">
          <Hero />
        </section>
{/* 🗂 Section 2: Services Grid */}
        <section id="services" className="py-16 px-4 sm:px-8 lg:px-16">
          <ServicesGrid />
        </section>
{/* 💼 Section 3: How We Work Timeline */}
        <section id="how-we-work" className="py-16 bg-gray-50 dark:bg-neutral-900 px-4 sm:px-8 lg:px-16">
          <HowWeWorkTimeline />
        </section>
{/* 💬 Section 4: Testimonials + Tech Logos */}
        <section id="testimonials" className="py-16 px-4 sm:px-8 lg:px-16">
          <TestimonialsSlider />
        </section>
{/* 📌 Sticky Call-to-Action Button */}
        <StickyCTA />
{/* 🎯 Command Palette Overlay (optional) */}
        <CommandPalette />
      </main>
    </LayoutWrapper>
  );
}
