"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleUp, fadeUp } from "@/config/animations";
import { Package, PackageOpen, Archive, Armchair, ShoppingBag, Car, Truck, PackageCheck } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import FlashlightCard from "@/components/FlashlightCard";

export default function Services() {
    const services = [
        { icon: Package, name: "Small Boxes", price: "$100", detail: "23kg max weight", featured: false },
        { icon: PackageOpen, name: "Big Boxes", price: "$150", detail: "32kg max weight", featured: false },
        { icon: Archive, name: "Baril", price: "$250", detail: "50–60kg", featured: false },
        { icon: Armchair, name: "Sofa", price: "$500", detail: "3-seat sofa", featured: false },
        { icon: ShoppingBag, name: "Costco Bag", price: "$75", detail: "Standard size", featured: false },
        { icon: Car, name: "Sedan", price: "$1,600", detail: "Full vehicle shipping", featured: false },
        { icon: Truck, name: "SUV", price: "$1,700", detail: "Full vehicle shipping", featured: false },
        { icon: PackageCheck, name: "Custom Quote", price: "", detail: "Contact us for a custom quote", featured: true },
    ];

    return (
        <section id="services" className="bg-[--color-surface] py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={staggerContainer}
                    className="max-w-2xl mx-auto text-center mb-16"
                >
                    <motion.span variants={fadeUp} className="font-[700] text-xs uppercase tracking-widest text-[#1E6FD9] mb-4 block">OUR SERVICES</motion.span>
                    <motion.h2 variants={fadeUp} className="font-[700] text-6xl text-[#0A0F1E] tracking-[-0.02em] leading-tight mb-4">Our Services</motion.h2>
                    <motion.p variants={fadeUp} className="font-[400] text-xl text-[#5A6478]">Clear pricing. No surprises. Just reliable service to Senegal.</motion.p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.08 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        if (service.featured) {
                            return (
                                <FlashlightCard
                                    key={i}
                                    variants={scaleUp}
                                    className="bg-white border-2 border-[#1E6FD9] rounded-3xl p-7 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1.5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-accent)]"
                                >
                                    <div className="bg-[#1E6FD9]/10 border border-[#1E6FD9]/20 rounded-2xl p-3 w-fit mb-5">
                                        <Icon size={24} color="#1E6FD9" />
                                    </div>
                                    <h3 className="font-[700] text-lg text-[#0A0F1E] mb-1">{service.name}</h3>
                                    {service.price && <div className="font-[800] text-xl text-[#1E6FD9] mb-1">{service.price}</div>}
                                    <p className="font-[400] text-sm text-[#5A6478] mb-auto pb-5">{service.detail}</p>
                                    <a
                                        href="#quote"
                                        className="inline-block bg-[#1E6FD9] border border-[#1E6FD9] rounded-full px-4 py-1.5 text-xs font-[600] text-white w-fit hover:bg-[#1859B3] transition-colors relative z-10"
                                    >
                                        GET A CUSTOM QUOTE &rarr;
                                    </a>
                                </FlashlightCard>
                            );
                        }

                        return (
                            <FlashlightCard
                                key={i}
                                variants={scaleUp}
                                className="bg-[--color-bg] border border-[--color-border] rounded-3xl p-7 flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1E6FD9]/40 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                            >
                                <div className="bg-[#1E6FD9]/10 border border-[#1E6FD9]/15 rounded-2xl p-3 w-fit mb-5">
                                    <Icon size={24} color="#1E6FD9" />
                                </div>
                                <h3 className="font-[700] text-lg text-[#0A0F1E] mb-1">{service.name}</h3>
                                <div className="font-[800] text-3xl text-[#1E6FD9] mb-1">{service.price}</div>
                                <p className="font-[400] text-sm text-[#9099AB] mb-auto pb-5">{service.detail}</p>
                                <a
                                    href={siteConfig.quoteUrl}
                                    className="inline-block bg-[--color-surface] border border-[--color-border] rounded-full px-4 py-1.5 text-xs font-[600] text-[#5A6478] w-fit hover:bg-[#1E6FD9] hover:text-white hover:border-[#1E6FD9] transition-colors relative z-10"
                                >
                                    Get Quote
                                </a>
                            </FlashlightCard>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
