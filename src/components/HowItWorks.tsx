"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/config/animations";
import { ClipboardList, PackageCheck, MapPin, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        { num: "01", icon: ClipboardList, title: "Choose Your Service", body: "Select the shipping option that best fits what you want to send." },
        { num: "02", icon: PackageCheck, title: "Prepare Your Shipment", body: "Pack your items securely and get them ready for shipping." },
        { num: "03", icon: MapPin, title: "Drop Off or Coordinate", body: "Bring your shipment in or arrange the next step with our team." },
        { num: "04", icon: CheckCircle2, title: "We Ship to Senegal", body: "Your items are transported with care and delivered safely." },
    ];

    return (
        <section id="process" className="bg-[--color-bg] py-32 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                    className="max-w-2xl mx-auto text-center mb-20"
                >
                    <motion.span variants={fadeUp} className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">THE PROCESS</motion.span>
                    <motion.h2 variants={fadeUp} className="font-[700] text-5xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-4">How Shipping to Senegal Works</motion.h2>
                    <motion.p variants={fadeUp} className="font-[400] text-lg text-[#5A6478]">Simple. Clear. No surprises.</motion.p>
                </motion.div>

                <div className="relative mt-20">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.2 } }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10"
                    >
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div key={i} variants={fadeUp} className="flex flex-col relative items-center text-center lg:items-start lg:text-left">
                                    <div className="bg-[#1E6FD9]/10 border border-[#1E6FD9]/25 rounded-2xl px-4 py-2 w-fit mb-6 mx-auto lg:mx-0">
                                        <span className="font-[800] text-sm tracking-widest text-[#1E6FD9]">{step.num}</span>
                                    </div>
                                    <div className="bg-[--color-surface] border border-[--color-border] rounded-full p-4 w-fit mb-5 mx-auto lg:mx-0 z-10 relative shadow-sm">
                                        <Icon size={28} color="#1E6FD9" />
                                    </div>
                                    <h3 className="font-[700] text-xl text-[#0A0F1E] mb-3">{step.title}</h3>
                                    <p className="font-[400] text-base text-[#5A6478] leading-relaxed max-w-sm">{step.body}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
