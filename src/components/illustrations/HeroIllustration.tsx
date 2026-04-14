"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroIllustration() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div ref={ref} className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
      <motion.div 
        style={{ y: prefersReducedMotion ? 0 : y, scale: prefersReducedMotion ? 1 : scale }}
        className="w-full h-full relative"
      >
        <Image
          src="/illustrations/hero_landing.png"
          alt="ShipDirect Box dropping to Senegal map"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain object-center scale-[1.05]"
          priority
        />
        
        {/* Subtle vignette/gradient overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F5C]/40 to-transparent mix-blend-multiply" />
      </motion.div>
    </div>
  );
}
