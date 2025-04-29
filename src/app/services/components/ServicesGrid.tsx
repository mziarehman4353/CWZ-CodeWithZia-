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
  { title: "GitHub Optimization", description: "Optimize your GitHub for recruiters & hiring partners.", category: "Profile Monetization & Branding" },
  { title: "LinkedIn Writing & Design", description: "Professional LinkedIn profiles tailored for devs.", category: "Profile Monetization & Branding" },
  { title: "Personal Portfolio", description: "Build a stunning dev portfolio with React + Next.js.", category: "Profile Monetization & Branding" },
  { title: "Corporate Websites", description: "Modern, fast, responsive business websites using React/Next.", category: "Development Services" },
  { title: "E-Commerce Setup", description: "Launch online stores with Stripe, Shopify, or WooCommerce.", category: "Development Services" },
  { title: "Flutter Mobile Apps", description: "Cross-platform apps built with Flutter & Firebase.", category: "Development Services" },
  { title: "API Integrations", description: "Secure, scalable backend integrations for any platform.", category: "Development Services" },
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
      <section className="group max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <h2 className="text-3xl md:text-3xl font-bold text-left mb-10 text-foreground">Services</h2>

        <div className="space-y-14">
          {Object.entries(groupedServices).map(([category, services]) => (
            <div key={category}>
              <h3 className="text-2xl md:text-2xl font-semibold mb-6 text-blue-500">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          title={selectedService?.title ?? ""}
          content={selectedService?.description ?? ""}
        />
      </section>
    </SectionReveal>
  );
}
