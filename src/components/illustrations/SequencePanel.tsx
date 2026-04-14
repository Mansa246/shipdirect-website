"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface SequencePanelProps {
  src: string;
  alt: string;
  index: number;
}

export default function SequencePanel({ src, alt, index }: SequencePanelProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-md border border-gray-100">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    );
  }

  // Slide up + fade in with 0.15s stagger
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-md border border-gray-100 group"
    >
      <Image 
        src={src} 
        alt={alt} 
        fill 
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105" 
      />
    </motion.div>
  );
}
