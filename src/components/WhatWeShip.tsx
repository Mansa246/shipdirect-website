"use client";

import { motion } from "framer-motion";
import { Package, PackageOpen, Archive, Armchair, ShoppingBag, Car, Truck, PackageCheck } from "lucide-react";
import { staggerContainer, scaleUp } from "@/config/animations";

export default function WhatWeShip() {
    const standardCards = [
        { icon: Package, name: "Small Boxes", price: "$100", detail: "23kg max weight" },
        { icon: PackageOpen, name: "Big Boxes", price: "$150", detail: "32kg max weight" },
        { icon: Archive, name: "Baril", price: "$250", detail: "50–60kg" },
        { icon: Armchair, name: "Sofa", price: "$500", detail: "3-seat sofa" },
        { icon: ShoppingBag, name: "Large Bag (Costco Bag)", price: "$75", detail: "Standard size" },
        { icon: Car, name: "Sedan", price: "$1,600", detail: "Full vehicle shipping" },
        { icon: Truck, name: "SUV", price: "$1,700", detail: "Full vehicle shipping" },
    ];

    return (
        <section id="services" className="bg-[--color-surface] py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="font-[700] text-xs uppercase tracking-widest text-[--color-accent] block mb-4">
                        OUR SERVICES
                    </span>
                    <h2 className="font-[700] text-[--color-text-primary] text-6xl tracking-[-0.02em] mb-4">
                        What We Ship.
                    </h2>
                    <p className="font-[400] text-[--color-text-secondary] text-xl">
                        Clear pricing. No surprises. Just reliable service.
                    </p>
                </div>

                {/* Pricing Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {standardCards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            variants={scaleUp}
                            className="bg-[--color-bg] border border-[--color-border] rounded-3xl p-7 shadow-[--shadow-card] hover:-translate-y-[6px] hover:shadow-[--shadow-card-hover] hover:border-[--color-accent]/25 transition-all duration-300 ease-out group flex flex-col"
                        >
                            <div className="bg-[--color-accent]/[0.08] border border-[--color-accent]/[0.15] rounded-2xl p-3 w-fit mb-5">
                                <card.icon size={24} className="text-[--color-accent]" />
                            </div>
                            <h3 className="font-[700] text-lg text-[--color-text-primary] mb-1">{card.name}</h3>
                            <div className="font-[800] text-3xl text-[--color-accent] mb-1">{card.price}</div>
                            <p className="font-[400] text-sm text-[--color-text-muted] mb-5">{card.detail}</p>

                            <div className="mt-auto object-bottom">
                                <div className="bg-[--color-surface] border border-[--color-border] rounded-full px-4 py-1.5 text-xs font-[600] text-[--color-text-muted] w-fit group-hover:bg-[--color-accent] group-hover:text-white group-hover:border-[--color-accent] transition-colors duration-200">
                                    SERVICE DETAILS →
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Featured Card */}
                    <motion.div
                        variants={scaleUp}
                        className="bg-white border border-[--color-border] rounded-3xl p-7 shadow-[--shadow-card] hover:-translate-y-[6px] hover:shadow-[--shadow-card-hover] transition-all duration-300 ease-out md:col-span-2 flex flex-col"
                    >
                        <div className="bg-[--color-accent]/[0.08] border border-[--color-accent]/[0.15] rounded-2xl p-3 w-fit mb-5">
                            <PackageCheck size={24} className="text-[--color-accent]" />
                        </div>
                        <h3 className="font-[700] text-lg text-[--color-text-primary] mb-1">Moving & Packing</h3>
                        <div className="font-[700] text-xl text-[--color-accent] mb-1">Available</div>
                        <p className="font-[400] text-sm text-[--color-text-secondary] mb-5 max-w-sm">Contact us for a custom quote on large-scale packing and custom moves.</p>

                        <div className="mt-auto">
                            <a href="#quote" className="inline-block bg-[--color-accent] border-none rounded-full px-5 py-2.5 text-xs font-[600] text-white w-fit hover:bg-[--color-accent-hover] transition-colors duration-200">
                                GET A CUSTOM QUOTE →
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
