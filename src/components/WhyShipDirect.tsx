"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleUp, fadeUp } from "@/config/animations";
import { BadgeDollarSign, Navigation, ShieldCheck, Clock, ListChecks, HeartHandshake } from "lucide-react";

export default function WhyShipDirect() {
    const features = [
        { icon: BadgeDollarSign, title: "Transparent Pricing", body: "No hidden fees. Clear rates for every shipment type." },
        { icon: Navigation, title: "Dedicated Senegal Route", body: "Specialists in Ottawa-to-Senegal shipping — nothing else." },
        { icon: ShieldCheck, title: "Safe Handling", body: "Every item is carefully handled from pickup to delivery." },
        { icon: Clock, title: "Dependable Service", body: "Reliable timelines and consistent communication throughout." },
        { icon: ListChecks, title: "Simple Process", body: "Get a quote, drop off, and we handle the rest." },
        { icon: HeartHandshake, title: "Support Every Step", body: "We're with you from the first call to final delivery." },
    ];

    return (
        <section className="bg-[--color-surface] py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <motion.span variants={fadeUp} className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">WHY US</motion.span>
                    <motion.h2 variants={fadeUp} className="font-[700] text-5xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-4">Why Choose ShipDirect</motion.h2>
                    <motion.p variants={fadeUp} className="font-[400] text-lg text-[#5A6478]">Built for families and individuals shipping to Senegal.</motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={scaleUp}
                                className="bg-[--color-bg] border border-[--color-border] rounded-3xl p-8 flex flex-col transform transition-all duration-300 hover:-translate-y-1 hover:border-[#1E6FD9]/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                            >
                                <div className="bg-[#1E6FD9]/10 border border-[#1E6FD9]/15 rounded-2xl p-3 w-fit mb-5">
                                    <Icon size={24} color="#1E6FD9" />
                                </div>
                                <h3 className="font-[700] text-lg text-[#0A0F1E] mb-3">{feature.title}</h3>
                                <p className="font-[400] text-sm text-[#5A6478] leading-relaxed mb-auto">{feature.body}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
