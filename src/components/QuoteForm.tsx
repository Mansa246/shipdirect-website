"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/config/animations";

export default function QuoteForm() {
    return (
        <section id="quote" className="bg-white py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <motion.span variants={fadeUp} className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">GET A QUOTE</motion.span>
                    <motion.h2 variants={fadeUp} className="font-[700] text-5xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-4">Start Your Shipment Today</motion.h2>
                    <motion.p variants={fadeUp} className="font-[400] text-lg text-[#5A6478]">Fill out the form below and our team will get back to you with a custom quote.</motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={fadeUp}
                    className="max-w-4xl mx-auto bg-white border border-[--color-border] rounded-3xl p-4 sm:p-8 shadow-[var(--shadow-card-hover)]"
                >
                    {/* GHL Form Embed */}
                    <iframe
                        src="https://api.leadconnectorhq.com/widget/form/mZlZ3AXYoB2qWex5b7sS"
                        style={{ width: '100%', height: '100%', minHeight: '800px', border: 'none', borderRadius: '4px' }}
                        id="inline-mZlZ3AXYoB2qWex5b7sS"
                        data-layout="{'id':'INLINE'}"
                        data-trigger-type="alwaysShow"
                        data-trigger-value=""
                        data-activation-type="alwaysActivated"
                        data-activation-value=""
                        data-deactivation-type="neverDeactivate"
                        data-deactivation-value=""
                        data-form-name="Form 1"
                        data-height="885"
                        data-layout-iframe-id="inline-mZlZ3AXYoB2qWex5b7sS"
                        data-form-id="mZlZ3AXYoB2qWex5b7sS"
                        title="Form 1"
                    />
                </motion.div>
            </div>
        </section>
    );
}
