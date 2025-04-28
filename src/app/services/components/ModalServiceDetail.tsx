"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

type ModalServiceDetailProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

export default function ModalServiceDetail({ isOpen, onClose, title, content }: ModalServiceDetailProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isOpen && isClient) {
      document.body.style.overflow = "hidden";
    } else if (isClient) {
      document.body.style.overflow = "auto";
    }
    return () => {
      if (isClient) {
        document.body.style.overflow = "auto";
      }
    };
  }, [isOpen, isClient]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="relative bg-background text-foreground w-full max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-2xl hover:text-red-500 transition-colors"
            >
              <IoClose />
            </button>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-sm md:text-base text-muted-foreground">{content}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
