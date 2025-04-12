import React from "react";
import { Icon } from '@iconify/react';
import SocialLinks from "./Animation/SocialLinks";

const Footer = () => {
    const footerItems = [
        { icon: "mdi:home", label: "Home" },
        { icon: "mdi:information", label: "About" },
        { icon: "mdi:phone", label: "Contact" },
        { icon: "mdi:email", label: "Services" }
    ];

    return (
        <div className="bg-black/15 p-4 rounded-t-xl shadow-2xl border-t border-white/10">
            <div className="flex justify-around items-center text-white">
                {footerItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 group cursor-pointer transition-all duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
                    >
                        <div className="relative">
                            <Icon
                                icon={item.icon}
                                className="text-2xl transition-all duration-300 group-hover:text-yellow-300"
                            />
                        </div>
                        <span className="text-sm opacity-80 group-hover:opacity-100 group-hover:font-medium transition-all duration-300">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>

            <div>
                {/* Social media links */}
                <div className="flex justify-center space-x-6">
                    <SocialLinks />
                </div>

                <div className=" text-center text-xs text-white/50">
                    © {new Date().getFullYear()} Kids Funland Fair. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;