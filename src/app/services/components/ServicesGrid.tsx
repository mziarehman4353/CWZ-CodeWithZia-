"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ModalServiceDetail from "./ModalServiceDetail";
import SectionReveal from "@/app/components/Shared/SectionReveal";

type Service = {
  title: string;
  description: string;
  category: string;
};

const services: Service[] = [
  // Profile Monetization & Branding
  { title: "GitHub Optimization", description: "Optimize your GitHub for recruiters & hiring partners.", category: "Profile Monetization & Branding" },
  { title: "LinkedIn Writing & Design", description: "Professional LinkedIn profiles tailored for devs.", category: "Profile Monetization & Branding" },
  { title: "Personal Portfolio", description: "Build a stunning dev portfolio with React + Next.js.", category: "Profile Monetization & Branding" },

  // Development Services
  { title: "Corporate Websites", description: "Modern, fast, responsive business websites using React/Next.", category: "Development Services" },
  { title: "E-Commerce Setup", description: "Launch online stores with Stripe, Shopify, or WooCommerce.", category: "Development Services" },
  { title: "Flutter Mobile Apps", description: "Cross-platform apps built with Flutter & Firebase.", category: "Development Services" },
  { title: "API Integrations", description: "Secure, scalable backend integrations for any platform.", category: "Development Services" },

  // Growth & Visibility
  { title: "SEO Setup", description: "Boost visibility with smart SEO practices.", category: "Growth & Visibility" },
  { title: "Page Speed Optimization", description: "Make your site lightning fast.", category: "Growth & Visibility" },
  { title: "Social Meta Tags", description: "Optimize previews for social sharing & Google indexing.", category: "Growth & Visibility" },
  { title: "Analytics & Heatmaps", description: "Track visitor behavior & conversions easily.", category: "Growth & Visibility" },
];

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <SectionReveal>
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Our Services</h2>
        <div className="space-y-14">
          {Object.entries(groupedServices).map(([category, services]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">{category}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    onClick={() => {
                      setSelectedService(service);
                      setIsModalOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <ModalServiceDetail
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedService?.title || ""}
          content={selectedService?.description || ""}
        />
      </section>
    </SectionReveal>
  );
}
