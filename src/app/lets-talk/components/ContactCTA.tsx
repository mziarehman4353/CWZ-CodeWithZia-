'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface Props {
  isSubmitting: boolean;
  isSubmitted: boolean;
}

export default function ContactCTA({ isSubmitting, isSubmitted }: Props) {
  const buttonText = "Let's Build Something Great 🚀";

  return (
    <div className="w-full mt-6">
      <motion.button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`w-full px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-300 ${
          isSubmitted
            ? 'bg-green-600 hover:bg-green-700'
            : isSubmitting
            ? 'bg-gray-400'
            : 'bg-blue-600 hover:bg-blue-700'
        } flex items-center justify-center gap-2`}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitted ? (
          <>
            <CheckCircle2 className="w-5 h-5" />
            Message Sent!
          </>
        ) : isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          buttonText
        )}
      </motion.button>
    </div>
  );
}
