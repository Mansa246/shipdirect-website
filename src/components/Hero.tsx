"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/config/animations";
import { Package2, ArrowRight, ChevronDown, CheckCircle2, Navigation, ShieldCheck, Car } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Hero() {

    const supportingPills = [
        { text: "Transparent Pricing", icon: CheckCircle2 },
        { text: "Reliable to Senegal", icon: Navigation },
        { text: "Safe Handling", icon: ShieldCheck },
        { text: "Vehicle Shipping", icon: Car },
    ];

    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-end overflow-hidden pt-32 pb-24">
            {/* Background Layers */}
            <div
                className="absolute inset-0 z-0 cover-image bg-center bg-cover"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80")' }}
            />
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(8,14,29,0.97) 0%, rgba(8,14,29,0.75) 40%, rgba(10,35,66,0.40) 100%)' }}
            />
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 0% 100%, rgba(30,111,217,0.15) 0%, transparent 70%)' }}
            />
            <div className="absolute inset-0 z-0 noise-overlay" />

            {/* Content */}
            <div className="relative z-10 w-full pl-[7%] pr-[7%] max-w-4xl">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    {/* 1. Trust badge */}
                    <motion.div variants={fadeUp} className="bg-white/5 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 inline-flex items-center gap-2.5 mb-6">
                        <Package2 size={14} color="#1E6FD9" />
                        <span className="font-[600] text-xs uppercase tracking-widest text-white/80">Ottawa's Trusted Senegal Shipping Partner</span>
                    </motion.div>

                    {/* 2 & 3. H1 */}
                    <motion.h1 variants={fadeUp} className="font-[800] tracking-[-0.03em] leading-none mb-6">
                        <span className="block text-white text-[clamp(2.5rem,5.5vw,6rem)] leading-[1.05]">Ship Packages, Furniture & Vehicles</span>
                        <span className="block text-[#1E6FD9] text-[clamp(2.5rem,5.5vw,6rem)] leading-[1.05]">to Senegal — Safely and Reliably.</span>
                    </motion.h1>

                    {/* 4. Subheadline */}
                    <motion.p variants={fadeUp} className="font-[400] text-white/60 text-[clamp(1rem,1.5vw,1.25rem)] max-w-lg mb-6">
                        Affordable international shipping with clear pricing, dependable service, and secure handling.
                    </motion.p>

                    {/* 5. Stats row */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-8 mb-6">
                        {siteConfig.stats.map((stat, i) => (
                            <div key={i} className={`flex flex-col gap-1 ${i !== siteConfig.stats.length - 1 ? 'pr-8 border-r border-white/10' : ''
                                }`}>
                                <span className="font-[800] text-2xl text-white">{stat.value}</span>
                                <span className="font-[400] text-xs text-white/45 uppercase tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* 6. Supporting pills */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                        {supportingPills.map((pill, i) => {
                            const Icon = pill.icon;
                            return (
                                <div key={i} className="bg-white/5 border border-white/15 rounded-full px-4 py-1.5 flex items-center gap-2">
                                    <Icon size={12} color="#1E6FD9" />
                                    <span className="text-xs font-[600] text-white">{pill.text}</span>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* 7. CTA row */}
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                        <motion.a
                            href="#quote"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="group shimmer-btn bg-[#1E6FD9] text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center gap-2"
                        >
                            Get a Free Quote
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </motion.a>
                        <motion.a
                            href="#services"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="border border-white/25 text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            View Services
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* 8. Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <ChevronDown size={32} className="text-white/30 animate-bounce" />
            </div>
        </section>
    );
}
