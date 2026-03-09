"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                className={`fixed top-0 w-full z-50 h-[72px] transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isScrolled
                    ? "bg-[rgba(247,248,250,0.92)] backdrop-blur-xl border-b border-[--color-border]"
                    : "bg-transparent border-b border-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center">
                        <img src={siteConfig.logoUrl} alt={siteConfig.name} className="h-10 object-contain" />
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {["Home", "Services", "About Us", "Contact"].map((label) => (
                            <a
                                key={label}
                                href={label === "Home" ? "/" : `#${label.toLowerCase().replace(" ", "-")}`}
                                className={`font-[500] text-sm transition-colors ${isScrolled
                                    ? "text-[--color-text-secondary] hover:text-[--color-text-primary]"
                                    : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <motion.a
                                href="#quote"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className={`rounded-full px-5 py-2.5 font-semibold text-sm transition-colors duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] inline-block ${isScrolled
                                    ? "bg-transparent border border-[#0A0F1E] text-[#0A0F1E] hover:bg-black/5"
                                    : "bg-white/10 border border-white/20 text-white backdrop-blur-sm hover:bg-white/20"
                                    }`}
                            >
                                Get a Quote
                            </motion.a>
                        </div>

                        <button
                            className={`md:hidden p-2 -mr-2 transition-colors ${isScrolled ? "text-[--color-text-primary]" : "text-white"
                                }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-[72px] left-0 right-0 bg-[--color-dark] z-40 overflow-hidden md:hidden border-t border-[--color-border-dark]"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {["Home", "Services", "About Us", "Contact"].map((label) => (
                                <a
                                    key={label}
                                    href={label === "Home" ? "/" : `#${label.toLowerCase().replace(" ", "-")}`}
                                    className="text-white text-lg font-[500] hover:text-[--color-accent] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {label}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/10 mt-2">
                                <a
                                    href="#quote"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full block text-center bg-[#1E6FD9] text-white rounded-full px-5 py-3 font-semibold hover:bg-[#1859B3] transition-colors"
                                >
                                    Get a Quote
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
