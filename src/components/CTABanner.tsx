"use client";

import { motion } from "framer-motion";
import { Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { staggerContainer, fadeUp } from "@/config/animations";

export default function CTABanner() {
    return (
        <section className="bg-[--color-primary] py-28 px-6 relative overflow-hidden noise-overlay">
            {/* Background Layer 2: Radial glow */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(30,111,217,0.2) 0%, transparent 70%)'
                }}
            />

            {/* Background Layer 3: Diagonal lines pattern */}
            <div
                className="absolute inset-0 z-10 opacity-30 mix-blend-overlay"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
                }}
            />

            <div className="max-w-2xl mx-auto text-center relative z-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex flex-col items-center"
                >
                    {/* Label */}
                    <motion.div
                        variants={fadeUp}
                        className="font-[700] text-xs uppercase tracking-widest bg-[--color-accent]/20 border border-[--color-accent]/30 rounded-full px-5 py-2 text-[--color-accent] inline-block mb-8"
                    >
                        NEED HELP GETTING STARTED?
                    </motion.div>

                    {/* H2 */}
                    <motion.h2
                        variants={fadeUp}
                        className="font-[800] text-[--color-text-primary] tracking-[-0.03em] leading-tight"
                        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                    >
                        Not Sure Where to Start?
                    </motion.h2>

                    {/* Subline */}
                    <motion.p
                        variants={fadeUp}
                        className="text-[--color-text-secondary] text-xl max-w-lg mt-5 leading-relaxed"
                    >
                        Call us directly and we'll walk you through everything. No complicated forms — just a quick, honest conversation.
                    </motion.p>

                    {/* CTA Row */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex justify-center gap-4 flex-wrap"
                    >
                        {/* CTA 1 */}
                        <a
                            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                            className="bg-[--color-accent] text-[--color-text-primary] rounded-full px-10 py-4 font-[600] shimmer-btn flex items-center justify-center gap-2 hover:bg-[--color-accent-hover] hover:shadow-[--shadow-accent] animate-[pulse-glow_2s_infinite] transition-all"
                        >
                            <Phone size={18} />
                            Call {siteConfig.phone}
                        </a>

                        {/* CTA 2 */}
                        <a
                            href="#quote"
                            className="bg-[--color-accent]/10 border border-[--color-accent]/20 text-[--color-accent] rounded-full px-10 py-4 font-[600] backdrop-blur-sm hover:bg-[--color-accent]/20 hover:border-[--color-accent]/30 transition-all shadow-sm"
                        >
                            Get a Quote Online
                        </a>
                    </motion.div>

                    {/* Trust line */}
                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex items-center gap-2 justify-center"
                    >
                        <ShieldCheck size={14} className="text-[--color-text-muted]" />
                        <span className="text-[--color-text-secondary] text-sm font-[500]">
                            Trusted by Ottawa families shipping to Senegal since 2020
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
