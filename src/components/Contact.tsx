"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight, staggerContainer } from "@/config/animations";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function Contact() {
    return (
        <section id="contact" className="bg-[--color-surface] py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <motion.div variants={slideRight}>
                            <span className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">CONTACT US</span>
                            <h2 className="font-[700] text-5xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-10">We're Here to Help</h2>

                            <div className="flex flex-col gap-8">
                                {/* Phone */}
                                <div className="flex items-start gap-5">
                                    <div className="bg-white border border-[--color-border] rounded-full p-3 shadow-sm shrink-0">
                                        <Phone size={24} color="#1E6FD9" />
                                    </div>
                                    <div>
                                        <h3 className="font-[700] text-lg text-[#0A0F1E] mb-1">Call Us</h3>
                                        <p className="font-[400] text-sm text-[#5A6478] mb-1">Mon-Fri, 9am-5pm EST</p>
                                        <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="font-[600] text-[#1E6FD9] hover:underline">
                                            {siteConfig.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-5">
                                    <div className="bg-white border border-[--color-border] rounded-full p-3 shadow-sm shrink-0">
                                        <Mail size={24} color="#1E6FD9" />
                                    </div>
                                    <div>
                                        <h3 className="font-[700] text-lg text-[#0A0F1E] mb-1">Email Us</h3>
                                        <p className="font-[400] text-sm text-[#5A6478] mb-1">We aim to reply within 24 hours</p>
                                        <a href={`mailto:${siteConfig.email}`} className="font-[600] text-[#1E6FD9] hover:underline">
                                            {siteConfig.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-5">
                                    <div className="bg-white border border-[--color-border] rounded-full p-3 shadow-sm shrink-0">
                                        <MapPin size={24} color="#1E6FD9" />
                                    </div>
                                    <div>
                                        <h3 className="font-[700] text-lg text-[#0A0F1E] mb-1">Headquarters</h3>
                                        <p className="font-[400] text-sm text-[#5A6478] mb-1">{siteConfig.address}</p>
                                        <p className="font-[400] text-sm text-[#5A6478]">By appointment only</p>
                                    </div>
                                </div>
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
                        <div className="rounded-3xl overflow-hidden aspect-square shadow-2xl relative">
                            <img
                                src="/ottawa-map.png"
                                alt="Ottawa map"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
