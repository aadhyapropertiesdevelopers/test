import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const Header = () => {
    const navItems = [
        { icon: "mdi:home", label: "Home", href: "/" },
        { icon: "mdi:information", label: "About", href: "/about" },
        { icon: "mdi:phone", label: "Contact", href: "/contact" },
        { icon: "mdi:email", label: "Services", href: "/services" }
    ];

    return (
        <header className="sticky top-0 z-50 px-6 py-4 flex justify-between items-center ">
            {/* <Link href="/" rel="noopener noreferrer" className="group">
                <h1 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    KidsFunLand
                </h1>
                <Image src='/images/Global.png' width={400} height={400} alt='Logo' className='w-24 h-auto' />
            </Link> */}

            <nav className="flex items-center space-x-2">
                {navItems.map((item, index) => (
                    <Link
                        key={index} passHref
                        href={item.href} rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 rounded-full group transition-all duration-300 hover:bg-indigo-50"
                    >
                        <Icon
                            icon={item.icon}
                            className="text-xl text-gray-600 group-hover:text-indigo-600 transition-colors duration-300"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-600 group-hover:text-indigo-600 transition-colors duration-300">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </nav>

            {/* Additional call-to-action button */}
            {/* <Link rel="noopener noreferrer"
                href="/book-now"
                className="hidden md:flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
                <Icon icon="mdi:ticket" className="mr-2" />
                Book Now
            </Link> */}

            <div className='flex items-center gap-6'>
                <Link href="/" rel="noopener noreferrer" className="group">
                    {/* <h1 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    KidsFunLand
                </h1> */}
                    <Image src='/images/Fuland.png' width={400} height={400} alt='Logo' className='w-24 h-auto' />
                </Link>

                <Link href="/" rel="noopener noreferrer" className="group">
                    {/* <h1 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    KidsFunLand
                </h1> */}
                    <Image src='/images/Global.png' width={400} height={400} alt='Logo' className='w-24 h-auto' />
                </Link>
            </div>


        </header>
    );
};

export default Header;