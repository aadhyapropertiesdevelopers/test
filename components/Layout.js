import React from 'react';
import { Poppins } from "next/font/google";
import Header from './Header';
import Footer from './Footer';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className={`${poppins.variable} font-sans`}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout; 