"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Quote, Loader2, Lock } from "lucide-react";

export default function QuoteSection() {
    const [formLoaded, setFormLoaded] = useState(false);

    useEffect(() => {
        // Fallback: If onLoad doesn't fire for any browser-specific reason,
        // force the state to show so the user isn't stuck on the spinner forever.
        const fallbackTimer = setTimeout(() => setFormLoaded(true), 5000);
        return () => clearTimeout(fallbackTimer);
    }, []);

    return (
        <section id="quote" className="bg-[--color-surface] py-32 px-4 md:px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: { opacity: 0, x: -40 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
                        }}
                        className="flex flex-col md:w-[85%] lg:w-full"
                    >
                        <span className="font-[700] text-xs uppercase tracking-[0.1em] text-[#1E6FD9] mb-4 block">
                            GET A QUOTE
                        </span>
                        <h2 className="font-[700] text-4xl text-[#0A0F1E] tracking-tight leading-[1.2]">
                            Get a Free Shipping Quote.
                        </h2>
                        <p className="font-[400] text-lg text-[#5A6478] leading-relaxed mt-4">
                            Fill in your details and our team will get back to you within 24 hours with an accurate, no-obligation quote for your shipment to Senegal.
                        </p>

                        <div className="mt-8 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={18} color="#1E6FD9" className="shrink-0" />
                                <span className="font-[500] text-sm text-[#0A0F1E]">No hidden fees — ever</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={18} color="#1E6FD9" className="shrink-0" />
                                <span className="font-[500] text-sm text-[#0A0F1E]">Response within 24 hours guaranteed</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 size={18} color="#1E6FD9" className="shrink-0" />
                                <span className="font-[500] text-sm text-[#0A0F1E]">Door-to-door service available</span>
                            </div>
                        </div>

                        <div className="mt-10 bg-[#080E1D] border border-white/10 rounded-2xl p-6">
                            <Quote size={40} color="rgba(255, 255, 255, 0.12)" className="mb-3" />
                            <p className="text-white/70 italic text-sm leading-relaxed">
                                "They shipped my car to Senegal and it arrived in perfect condition. The team kept me updated the whole time."
                            </p>
                            <div className="text-white/35 text-xs mt-3">
                                — Verified Ottawa Customer
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: { opacity: 0, x: 40 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
                        }}
                        className="w-full relative"
                    >
                        <div className="bg-[#F7F8FA] border border-[#D8DCE8] md:rounded-3xl overflow-hidden shadow-[var(--shadow-card)] relative min-h-[500px] w-full flex flex-col">
                            {!formLoaded && (
                                <div className="absolute inset-0 bg-[#EDEEF2] md:rounded-3xl flex flex-col items-center justify-center py-20 gap-4 z-10">
                                    <Loader2 size={28} color="#1E6FD9" className="animate-spin" />
                                    <span className="font-[400] text-sm text-[#9099AB]">Loading quote form...</span>
                                </div>
                            )}

                            <iframe
                                src="https://link.apisystem.tech/widget/form/542y9FiGg4swYXx563BE"
                                id="shipdirect-quote-form"
                                title="ShipDirect Free Quote Form"
                                allow="payment"
                                scrolling="no"
                                onLoad={() => setFormLoaded(true)}
                                style={{
                                    width: "100%",
                                    border: "none",
                                    background: "transparent",
                                    opacity: formLoaded ? 1 : 0,
                                    transition: "opacity 0.3s ease",
                                    borderRadius: "1.5rem"
                                }}
                                className="min-h-[680px] md:min-h-[620px]"
                            />

                            <div className="px-6 pb-4 pt-4 mt-auto">
                                <div className="flex items-center gap-1.5 justify-center md:justify-start">
                                    <Lock size={12} color="#9099AB" />
                                    <span className="font-[400] text-xs text-[#9099AB]">
                                        Your information is secure and goes directly to our team.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
