"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Dock, DockIcon } from "@/components/magicui/dock";

const socialMedia = [
    {
        href: "https://www.facebook.com/yourpage",
        icon: "mdi:facebook",
    },
    {
        href: "https://www.twitter.com/yourprofile",
        icon: "mdi:twitter",
    },
    {
        href: "https://wa.me/yourwhatsappnumber",
        icon: "mdi:whatsapp",
    },
    {
        href: "https://www.youtube.com/yourchannel",
        icon: "mdi:youtube",
    },

    {
        href: "https://www.instagram.com/yourprofile",
        icon: "mdi:instagram",
    },
];

const SocialLinks = () => {
    return (
        <div className="relative">
            <Dock iconMagnification={60} iconDistance={100}>
                {socialMedia.map(({ href, icon }, index) => (
                    <DockIcon key={index} className="bg-transparent">
                        <Link href={href} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Icon icon={icon} className="w-full h-full" />
                        </Link>
                    </DockIcon>
                ))}
            </Dock>
        </div>
    );
};

export default SocialLinks;

