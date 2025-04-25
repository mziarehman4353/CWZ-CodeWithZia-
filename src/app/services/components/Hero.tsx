"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motionConfigs";

export default function Hero() {
  const tags = ["#DevOps", "#Web3 Ready", "#Ecom Experts"];

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-12 bg-gradient-to-b from-background to-muted">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-6 max-w-3xl"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold text-foreground"
        >
          We Build Digital Power. <br className="hidden sm:block" />
          You Just Launch It.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg text-muted-foreground"
        >
          Crafting tools, platforms, and automation that fuel your growth — from web to mobile to scale.
        </motion.p>

        {/* Animated tags loop */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center gap-4 mt-4 overflow-hidden"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [20, 0, 0, -20],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: i * 1.2,
              }}
              className="bg-blue-600/10 border border-blue-500 text-blue-500 px-4 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
