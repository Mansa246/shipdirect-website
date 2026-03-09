"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleUp, fadeUp } from "@/config/animations";
import { Star } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "ShipDirect made it so easy to send items to my family in Senegal. The process was smooth and the team was incredibly helpful throughout.",
            author: "Fatou D.",
            role: "Ottawa Customer"
        },
        {
            quote: "My shipment arrived safely and I really appreciated the clear communication at every step. I knew exactly where my package was.",
            author: "Mamadou B.",
            role: "Repeat Customer"
        },
        {
            quote: "Reliable service, fair pricing, and a stress-free experience from start to finish. I won't use anyone else for Senegal shipping.",
            author: "Aminata K.",
            role: "Ottawa Resident"
        }
    ];

    return (
        <section className="bg-[--color-surface] py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <motion.span variants={fadeUp} className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">TESTIMONIALS</motion.span>
                    <motion.h2 variants={fadeUp} className="font-[700] text-5xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-4">What Our Customers Say</motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {testimonials.map((testi, i) => (
                        <motion.div
                            key={i}
                            variants={scaleUp}
                            className="bg-[--color-bg] border border-[--color-border] rounded-3xl p-8 flex flex-col transform transition-transform duration-300 hover:-translate-y-1 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                        >
                            <div className="flex items-center gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <Star key={star} size={16} fill="#1E6FD9" color="#1E6FD9" />
                                ))}
                            </div>
                            <div className="text-5xl font-[800] text-[#1E6FD9] opacity-20 leading-none mb-2">"</div>
                            <p className="font-[400] text-base text-[#5A6478] leading-relaxed mb-auto pb-6">{testi.quote}</p>

                            <div className="border-t border-[--color-border] pt-4 mt-auto">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <div>
                                        <div className="font-[700] text-sm text-[#0A0F1E]">{testi.author}</div>
                                        <div className="font-[400] text-xs text-[#9099AB] mt-1">{testi.role}</div>
                                    </div>
                                    <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-3 py-1 text-xs font-[600] text-[#10B981] w-fit shrink-0">
                                        Verified Customer
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
