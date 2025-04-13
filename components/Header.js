import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const navItems = [
        { icon: "mdi:home", label: "Home", href: "/" },
        { icon: "mdi:information", label: "About", href: "/about" },
        { icon: "mdi:phone", label: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="flex justify-between items-center">
                {/* Left side: Mobile Toggle + Navigation */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Toggle - Now on Left */}
                    <button
                        className="md:hidden text-gray-700 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} className="text-3xl" />
                    </button>

                    {/* Desktop Nav Items */}
                    <nav className="hidden md:flex items-center space-x-2">
                        {navItems.map((item, index) => {
                            const isActive = router.pathname === item.href;
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className={`flex items-center px-4 py-2 rounded-full group transition-all duration-300
                                        ${isActive ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-indigo-50 text-gray-600'}
                                    `}
                                >
                                    <Icon
                                        icon={item.icon}
                                        className={`text-xl ${isActive ? 'text-indigo-600' : 'group-hover:text-indigo-600'} transition-colors duration-300`}
                                    />
                                    <span className="ml-2 text-sm font-medium">
                                        {item.label}
                                    </span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Right side: Logos */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="group">
                        <Image src='/images/Fuland.png' width={400} height={400} alt='Logo' className='w-20 h-auto' />
                    </Link>
                    <Link href="/" className="group">
                        <Image src='/images/Global.png' width={400} height={400} alt='Logo' className='w-20 h-auto' />
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isOpen && (
                <nav className="md:hidden mt-4 space-y-2">
                    {navItems.map((item, index) => {
                        const isActive = router.pathname === item.href;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center px-4 py-2 rounded-full group transition-all duration-300
                                    ${isActive ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-indigo-50 text-gray-600'}
                                `}
                            >
                                <Icon
                                    icon={item.icon}
                                    className={`text-xl ${isActive ? 'text-indigo-600' : 'group-hover:text-indigo-600'} transition-colors duration-300`}
                                />
                                <span className="ml-2 text-sm font-medium">
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            )}
        </header>
    );
};

export default Header;
