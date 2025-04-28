"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  onClick: () => void;
};

export default function ServiceCard({ title, description, onClick }: Readonly<ServiceCardProps>) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white/10 backdrop-blur-sm border border-white/20 p-5 sm:p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:border-blue-500 hover:shadow-lg flex flex-col justify-between h-full"
    >
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
