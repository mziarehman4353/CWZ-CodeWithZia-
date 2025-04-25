"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/app/components/Shared/SectionReveal";

const steps = [
  {
    title: "Free Consultation",
    description:
      "We listen to your goals, analyze your needs, and brainstorm together — no strings attached.",
  },
  {
    title: "Custom Solution",
    description:
      "We propose a tailored plan using the most efficient and scalable technologies for your case.",
  },
  {
    title: "Rapid Development",
    description:
      "Agile sprints for fast iteration — with feedback loops so you're always in the loop.",
  },
  {
    title: "Testing & Launch",
    description:
      "Rigorous testing and smooth deployment with analytics, SEO, and optimization.",
  },
  {
    title: "Ongoing Support",
    description:
      "We stay with you — updates, fixes, feature additions, and performance tracking.",
  },
];

export default function HowWeWorkTimeline() {
  return (
    <SectionReveal>
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-foreground">
          How We Work
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-muted"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start justify-between gap-6 ${
                    isLeft ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white z-10 top-6" />

                  {/* Content */}
                  <div
                    className={`w-1/2 ${
                      isLeft ? "text-left pr-6" : "text-right pl-6"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-blue-400 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty spacer on the other side */}
                  <div className="w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
