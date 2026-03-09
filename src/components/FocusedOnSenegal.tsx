"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight, staggerContainer } from "@/config/animations";
import { MoveRight, Navigation } from "lucide-react";

export default function FocusedOnSenegal() {
    const pills = [
        "Ottawa, Canada → Dakar, Senegal",
        "Specialized Route",
        "Expert Knowledge"
    ];

    return (
        <section className="bg-[--color-bg] py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <motion.div variants={slideRight}>
                            <span className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">OUR DESTINATION</span>
                            <h2 className="font-[800] text-5xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-6">Focused on Senegal.</h2>

                            <div className="flex flex-col gap-4 text-lg leading-relaxed font-[400] text-[#5A6478]">
                                <p>
                                    We currently specialize in shipping to Senegal, allowing us to provide a more focused, dependable, and streamlined experience for our customers.
                                </p>
                                <p>
                                    By concentrating on one destination, we're able to deliver clear communication, efficient coordination, and service you can truly trust.
                                </p>
                            </div>

                            {/* Destination pills */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                {pills.map((pill, i) => (
                                    <div key={i} className="bg-[--color-surface] border border-[--color-border] rounded-full px-4 py-2 flex items-center gap-2">
                                        <Navigation size={14} color="#1E6FD9" />
                                        <span className="font-[600] text-sm text-[#0A0F1E]">{pill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT VISUAL */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <div className="bg-white border border-[#1E6FD9]/20 rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-[var(--shadow-card)]">
                            <div className="font-[700] text-xl text-[#0A0F1E] mb-6">Ottawa, Canada</div>
                            <MoveRight size={32} color="#1E6FD9" className="animate-pulse mb-6" />
                            <div className="font-[700] text-xl text-[#1E6FD9] mb-4">Dakar, Senegal</div>
                            <div className="font-[400] text-sm text-[#5A6478]">Direct Specialized Route</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
