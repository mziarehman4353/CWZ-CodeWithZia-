"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/app/components/Shared/SectionReveal";
import { useEffect, useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Founder, EduPro",
    text: "Zia's team transformed our outdated platform into a sleek, fast, and responsive web app. Highly recommend their speed and quality!",
    image: "/images/testimonials/user1.jpg",
  },
  {
    name: "Mark Jensen",
    role: "DevOps Consultant",
    text: "Working with Zia was seamless. Their communication, deadlines, and tech stack expertise were top-notch.",
    image: "/images/testimonials/user2.jpg",
  },
  {
    name: "Fatima Ali",
    role: "Startup CEO",
    text: "From strategy to launch, the whole process felt collaborative. My vision came to life with clarity and quality.",
    image: "/images/testimonials/user3.jpg",
  },
  {
    name: "Alex Kim",
    role: "Marketing Lead",
    text: "These devs know UI/UX like the back of their hand. Our bounce rate dropped dramatically. Totally worth it!",
    image: "/images/testimonials/user4.jpg",
  },
  {
    name: "Ravi Singh",
    role: "AI Researcher",
    text: "Their AI & NLP integration saved us months of dev time. Zia’s team is technically sharp and super proactive.",
    image: "/images/testimonials/user5.jpg",
  },
];

const techLogos = [
  "/logos/react.svg",
  "/logos/tailwind.svg",
  "/logos/flutter.svg",
  "/logos/github.svg",
  "/logos/firebase.svg",
  "/logos/nextjs.svg",
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrame: number;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += scrollSpeed;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <SectionReveal>
      <section className="group max-w-6xl mx-auto px-6 py-20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
        <h2 className="text-3xl font-bold text-left mb-10 text-foreground">
          What People Say
        </h2>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name} // Using unique 'name' for the key
              className="min-w-[300px] max-w-sm bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-white/20"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm italic">
                “{testimonial.text}”
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Logos */}
        <div className="mt-10 flex space-x-6">
          {techLogos.map((logo) => (
            <Image
              key={logo} // Using logo URL as the unique key
              src={logo}
              alt="Tech Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
