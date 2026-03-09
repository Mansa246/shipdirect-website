import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
    const links = [
        { label: "Home", href: "/" },
        { label: "Services", href: "#services" },
        { label: "About Us", href: "#about" },
        { label: "Contact", href: "#contact" },
    ];

    const legal = [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ];

    return (
        <footer className="bg-[#080E1D] pt-20 pb-10 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Col 1: Brand */}
                    <div className="flex flex-col gap-6">
                        <img src={siteConfig.logoUrl} alt={siteConfig.name} className="h-10 object-contain object-left" style={{ filter: 'brightness(0) invert(1)' }} />
                        <p className="text-white/50 text-base leading-relaxed font-[400] max-w-sm">
                            Premium international shipping from Ottawa to Senegal. Safe, reliable, and transparent.
                        </p>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h4 className="font-[600] text-white text-lg mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            {links.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-white/60 hover:text-[#1E6FD9] transition-colors text-sm font-[400]">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Contact */}
                    <div>
                        <h4 className="font-[600] text-white text-lg mb-6">Contact</h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="text-white/60 hover:text-[#1E6FD9] transition-colors text-sm font-[400]">
                                    {siteConfig.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${siteConfig.email}`} className="text-white/60 hover:text-[#1E6FD9] transition-colors text-sm font-[400]">
                                    {siteConfig.email}
                                </a>
                            </li>
                            <li className="text-white/60 text-sm font-[400]">
                                {siteConfig.address}
                            </li>
                        </ul>
                    </div>

                    {/* Col 4: Legal */}
                    <div>
                        <h4 className="font-[600] text-white text-lg mb-6">Legal</h4>
                        <ul className="flex flex-col gap-4">
                            {legal.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-white/60 hover:text-[#1E6FD9] transition-colors text-sm font-[400]">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Row */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-sm font-[400]">
                        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                    </p>
                    <div className="text-white/40 text-sm font-[400]">
                        Website meticulously crafted for ShipDirect.
                    </div>
                </div>
            </div>
        </footer>
    );
}
