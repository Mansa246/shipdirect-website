"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollFadeImgProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function ScrollFadeImg({ src, alt, priority = false }: ScrollFadeImgProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
        <Image src={src} alt={alt} fill className="object-cover" priority={priority} sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
    >
      <Image 
        src={src} 
        alt={alt} 
        fill 
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={priority}
      />
    </motion.div>
  );
}
