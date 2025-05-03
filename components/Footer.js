'use client'; // Add this if you're using Next.js 13+ with the app router

import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className="md:fixed md:bottom-0 md:left-0 md:right-0 z-50 md:bg-green-900/50 bg-green-800 py-4 px-6 text-sm text-white flex flex-row justify-between items-center gap-2 md:gap-4">
            {/* Left Side - Copyright */}
            <p className="text-xs md:text-sm">© {new Date().getFullYear()} Kids Funland Fair. All rights reserved.</p>

            {/* Center - Privacy Policy */}
            <Link href="/images/privacy-policy.pdf" className="hover:underline text-white text-xs md:text-sm">
                Privacy Policy
            </Link>

            {/* Right Side - Social Icons */}
            <div className="flex gap-4">
                <Link href="https://wa.me/919032952244" target="_blank" rel="noopener noreferrer">
                    <Icon icon="ic:baseline-whatsapp" className="text-white hover:text-green-400 text-xl md:text-2xl transition" />
                </Link>
                <Link href="https://www.instagram.com/kidsfunlandfair" target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:instagram" className="text-white hover:text-pink-400 text-xl md:text-2xl transition" />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61575017804597" target="_blank" rel="noopener noreferrer">
                    <Icon icon="ic:baseline-facebook" className="text-white hover:text-blue-400 text-xl md:text-2xl transition" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
