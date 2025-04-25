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
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-32 max-w-screen-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-foreground">
          What People Say
        </h2>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
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

        <div className="mt-20 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-center opacity-80">
          {techLogos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`Tech ${i}`}
              width={60}
              height={60}
              className="mx-auto grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
