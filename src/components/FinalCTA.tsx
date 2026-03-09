"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/config/animations";
import { siteConfig } from "@/config/siteConfig";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
    return (
        <section className="bg-[#0A2342] py-24 px-6 relative overflow-hidden noise-overlay">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeUp} className="font-[800] text-5xl text-white tracking-[-0.02em] leading-tight mb-6">
                        Ready to Ship to Senegal?
                    </motion.h2>
                    <motion.p variants={fadeUp} className="font-[400] text-xl text-white/70 mb-10">
                        Join hundreds of satisfied customers who trust ShipDirect.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#quote"
                            className="group shimmer-btn w-full sm:w-auto bg-[#1E6FD9] text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-[#1859B3] transition-colors"
                        >
                            Get a Free Quote
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                            className="w-full sm:w-auto bg-transparent border border-white/20 text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                        >
                            <Phone size={18} />
                            Call {siteConfig.phone}
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
