"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleUp } from "@/config/animations";
import { DollarSign, Navigation, ShieldCheck, HeartHandshake } from "lucide-react";

export default function TrustStrip() {
    const badges = [
        { icon: DollarSign, title: "Clear Pricing", sub: "No hidden fees ever" },
        { icon: Navigation, title: "Senegal Focused", sub: "Dedicated route specialists" },
        { icon: ShieldCheck, title: "Secure Transport", sub: "Every item handled with care" },
        { icon: HeartHandshake, title: "Customer First", sub: "Support every step of the way" },
    ];

    return (
        <section className="bg-white border-b border-[--color-border] py-8 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[--color-border]"
                >
                    {badges.map((badge, i) => {
                        const Icon = badge.icon;
                        return (
                            <motion.div variants={scaleUp} key={i} className={`flex items-center gap-4 ${i !== 0 ? 'lg:pl-8' : ''}`}>
                                <div className="bg-[#1E6FD9]/10 border border-[#1E6FD9]/20 rounded-2xl p-3 shrink-0">
                                    <Icon size={22} color="#1E6FD9" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-[600] text-sm text-[#0A0F1E] mb-0.5">{badge.title}</span>
                                    <span className="font-[400] text-xs text-[#5A6478]">{badge.sub}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
