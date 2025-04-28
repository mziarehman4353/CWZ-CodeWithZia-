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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
    >
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  );
}
