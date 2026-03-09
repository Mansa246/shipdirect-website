"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight, fadeUp, staggerContainer } from "@/config/animations";
import { CheckCircle2, XCircle, Info } from "lucide-react";

export default function WhatYouCanShip() {
    const allowed = [
        "Clothing", "Household goods", "Furniture", "Personal belongings", "Boxes", "Barrels", "Vehicles (cars, SUVs)"
    ];
    const restricted = [
        "Hazardous materials", "Illegal items", "Prohibited goods", "Unsafe substances", "Restricted chemicals"
    ];

    return (
        <section className="bg-[--color-bg] py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <motion.span variants={fadeUp} className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">SHIPPING GUIDE</motion.span>
                    <motion.h2 variants={fadeUp} className="font-[700] text-5xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-4">What You Can Ship</motion.h2>
                    <motion.p variants={fadeUp} className="font-[400] text-lg text-[#5A6478]">Please contact us if you're unsure about your item.</motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                    {/* ALLOWED ITEMS */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="bg-[--color-surface] border border-[--color-border] rounded-3xl p-8"
                    >
                        <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-4 py-1.5 w-fit">
                            <span className="font-[700] text-xs text-[#10B981]">&#10003; ALLOWED</span>
                        </div>
                        <h3 className="font-[700] text-2xl text-[#0A0F1E] mt-4 mb-6">Allowed Items</h3>
                        <div className="flex flex-col gap-3">
                            {allowed.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 size={16} color="#10B981" className="shrink-0" />
                                    <span className="font-[400] text-sm text-[#5A6478]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RESTRICTED ITEMS */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="bg-[--color-surface] border border-[--color-border] rounded-3xl p-8"
                    >
                        <div className="bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-full px-4 py-1.5 w-fit">
                            <span className="font-[700] text-xs text-[#EF4444]">&#10007; RESTRICTED</span>
                        </div>
                        <h3 className="font-[700] text-2xl text-[#0A0F1E] mt-4 mb-6">Restricted Items</h3>
                        <div className="flex flex-col gap-3">
                            {restricted.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <XCircle size={16} color="#EF4444" className="shrink-0" />
                                    <span className="font-[400] text-sm text-[#5A6478]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* BOTTOM NOTE */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="bg-[#1E6FD9]/5 border border-[#1E6FD9]/15 rounded-2xl px-6 py-4 max-w-xl mx-auto mt-8 flex items-center justify-center gap-3 text-center"
                >
                    <Info size={16} color="#1E6FD9" className="shrink-0" />
                    <span className="font-[400] text-sm text-[#5A6478]">Not sure if your item can be shipped? Contact us and we'll help.</span>
                </motion.div>
            </div>
        </section>
    );
}
