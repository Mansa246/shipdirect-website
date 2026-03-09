"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight, staggerContainer } from "@/config/animations";
import { CheckCircle2, Navigation, ShieldCheck, HeartHandshake, TrendingUp } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function About() {
    const trustPills = [
        { text: "Reliable Service", icon: CheckCircle2 },
        { text: "Clear Communication", icon: HeartHandshake },
        { text: "Safe Handling", icon: ShieldCheck },
        { text: "Senegal-Focused", icon: Navigation },
    ];

    return (
        <section id="about" className="bg-[--color-bg] py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <motion.div variants={slideRight}>
                            <span className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">ABOUT US</span>
                            <h2 className="font-[700] text-5xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-6">About ShipDirect</h2>

                            <div className="flex flex-col gap-4 text-lg leading-relaxed font-[400] text-[#5A6478]">
                                <p>
                                    ShipDirect is a trusted international shipping service dedicated to helping individuals and families send packages, household goods, and vehicles safely from North America to Senegal. We understand how important it is to stay connected with loved ones overseas, which is why we focus on providing a reliable and transparent shipping experience every step of the way.
                                </p>
                                <p>
                                    Our mission is to make shipping to Senegal simple, affordable, and stress-free. Whether you're sending small boxes, large packages, barrels, furniture, or even vehicles, our team ensures that every shipment is handled with care and delivered safely to its destination.
                                </p>
                                <p>
                                    At ShipDirect, we believe in clear pricing, dependable service, and customer-first support. With straightforward shipping options and no hidden surprises, we make it easy for our customers to send what matters most to the people who matter most.
                                </p>
                            </div>

                            {/* Trust pills */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                {trustPills.map((pill, i) => {
                                    const Icon = pill.icon;
                                    return (
                                        <div key={i} className="bg-[--color-surface] border border-[--color-border] rounded-full px-4 py-2.5 flex items-center gap-2">
                                            <Icon size={14} color="#1E6FD9" />
                                            <span className="font-[600] text-sm text-[#0A0F1E]">{pill.text}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            <a
                                href="#quote"
                                className="mt-10 inline-block bg-[#0A2342] text-white rounded-full px-7 py-3.5 font-semibold shimmer-btn hover:bg-[#071A33] transition-transform hover:-translate-y-0.5"
                            >
                                Get a Free Quote Today
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT VISUAL */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="relative"
                    >
                        <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl relative">
                            <img
                                src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
                                alt="ShipDirect shipping port"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating stat card */}
                        <div className="absolute -bottom-6 -left-6 bg-[#080E1D] border border-white/10 rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-4 z-10 hidden sm:flex">
                            <div className="bg-[#1E6FD9]/10 rounded-full p-2.5 shrink-0">
                                <TrendingUp size={24} color="#1E6FD9" />
                            </div>
                            <div>
                                <div className="font-[700] text-white text-xl leading-tight">500+ Shipments</div>
                                <div className="text-white/50 text-xs">Delivered safely</div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
