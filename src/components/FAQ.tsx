"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp } from "@/config/animations";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: "How long does shipping to Senegal take?", a: "Transit times vary depending on the service selected. Contact us for current estimated timelines." },
        { q: "What items can I ship?", a: "We ship boxes, barrels, furniture, household goods, and vehicles. Contact us if you're unsure about a specific item." },
        { q: "Do you ship vehicles?", a: "Yes. We ship Sedans ($1,600) and SUVs ($1,700). Contact us to arrange vehicle shipping." },
        { q: "Are there weight limits?", a: "Yes. Small boxes up to 23kg, big boxes up to 32kg, barils up to 60kg. Contact us for oversized items." },
        { q: "How do I get a quote?", a: "Fill out our quote form, call us at (613) 700-2747, or email info@shipdirect.ca." },
        { q: "Are your prices fixed?", a: "Our listed prices are our standard rates. Custom quotes are available for special items." },
        { q: "What if I'm not sure which option I need?", a: "Just call or email us. Our team will help you find the right shipping option for your items." },
    ];

    return (
        <section className="bg-[--color-bg] py-32 px-6 overflow-hidden">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                    className="text-center mb-16"
                >
                    <motion.span variants={fadeUp} className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">FAQ</motion.span>
                    <motion.h2 variants={fadeUp} className="font-[700] text-5xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-4">Frequently Asked Questions</motion.h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                    className="flex flex-col"
                >
                    {faqs.map((faq, i) => (
                        <motion.div key={i} variants={fadeUp} className="border-b border-[--color-border]">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center py-5 text-left cursor-pointer outline-none group"
                            >
                                <span className="font-[600] text-lg text-[#0A0F1E] pr-8 group-hover:text-[#1E6FD9] transition-colors">{faq.q}</span>
                                <ChevronDown
                                    size={20}
                                    color="#1E6FD9"
                                    className={`shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="font-[400] text-base text-[#5A6478] leading-relaxed pb-5 pr-8">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
