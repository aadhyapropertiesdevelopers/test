// import React from 'react';
// import { Icon } from '@iconify/react';
// import { motion } from 'framer-motion';

// const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i = 1) => ({
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: i * 0.1,
//             duration: 0.5,
//             ease: 'easeOut',
//         },
//     }),
// };

// const socialLinks = [
//     { name: 'Facebook', href: 'https://facebook.com', icon: 'ic:baseline-facebook', bg: 'bg-[#1877F2]', hover: 'hover:bg-[#166FE5]' },
//     // { name: 'Twitter', href: 'https://twitter.com', icon: 'mdi:twitter', bg: 'bg-[#1DA1F2]', hover: 'hover:bg-[#1991D2]' },
//     { name: 'Instagram', href: 'https://www.instagram.com/kidsfunlandfair?igsh=MXRyM3VobXBiNGN0Yw==', icon: 'mdi:instagram', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600', hover: 'hover:opacity-80' },
//     { name: 'WhatsApp', href: 'https://wa.me/919032952244', icon: 'ic:baseline-whatsapp', bg: 'bg-green-600', hover: 'hover:bg-gray-700' },
//     { name: 'YouTube', href: 'https://youtube.com/@globalgrandeurevents?si=Oux8jDmaxz_fAybP', icon: 'line-md:youtube', bg: 'bg-red-600', hover: 'hover:bg-red-700' },
//     // { name: 'Email', href: 'mailto:globalgrandeurevents@gmail.com', icon: 'ic:baseline-email', bg: 'bg-red-500', hover: 'hover:bg-red-600' },
//     // { name: 'Phone', href: 'tel:+919032952244', icon: 'ic:baseline-phone', bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
//     {
//         name: 'Address',
//         href: 'https://g.co/kgs/5nH75ib',
//         icon: 'mdi:map-marker',
//         bg: 'bg-gray-800',
//         hover: 'hover:bg-gray-900'
//     },
//     // { name: 'LinkedIn', href: 'https://linkedin.com/company/kidsfunfair', icon: 'mdi:linkedin', bg: 'bg-[#0077B5]', hover: 'hover:bg-[#006699]' },
// ];

// const Contact = () => {
//     return (
//         <div className="min-h-screen bg-[url('/images/3d.png')] bg-black/20 bg-blend-overlay px-4 py-10 flex items-center justify-center">
//             <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="w-full max-w-7xl grid grid-cols-1 gap-8 mt-10 md:mt-2"
//             >
//                 {/* Header Section */}
//                 <motion.div variants={fadeUp} className="text-center">
//                     <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-black mb-4">
//                         Contact Us
//                     </h1>
//                     <p className="text-lg text-black">
//                         {`We're happy to connect! Reach out through any channel below.`}
//                     </p>
//                 </motion.div>

//                 {/* Main Content Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
//                     {/* Left Column - Video */}
//                     <motion.div
//                         variants={fadeUp}
//                         className="w-full h-full rounded-xl overflow-hidden shadow-lg"
//                     >
//                         <iframe
//                             className="w-full h-full min-h-[400px]"
//                             src="https://www.youtube.com/embed/gZ0J8Cx7AX4?si=qlPXOrHX29TPUrq_"
//                             title="Kids Funfair Promo"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         ></iframe>
//                     </motion.div>

//                     {/* Right Column - Content */}
//                     <div className="rounded-xl overflow-hidden bg-white/10 border border-cyan-200 shadow-lg max-h-96">
//                         <div className='h-full overflow-y-auto p-4'>
//                             {/* Pricing Section with Registration Button */}
//                             <section className="max-w-4xl mx-auto pb-4">
//                                 <h1 className='text-xl uppercase mb-4 text-purple-900 font-bold'>STALL PRICING & LAYOUT</h1>
//                                 <div className="grid md:grid-cols-3 gap-4">
//                                     <div className="bg-green-100 rounded-2xl p-4 shadow text-center">
//                                         <h3 className="text-xl font-semibold mb-2">Small Stall</h3>
//                                         <p className="text-gray-700 text-lg">4 Sq. Mtrs</p>
//                                         <p className="text-black font-bold text-xl mt-2">₹18,000 <span className="text-sm font-medium text-gray-500">+ GST</span></p>
//                                     </div>

//                                     <div className="bg-yellow-100 rounded-2xl p-4 shadow text-center">
//                                         <h3 className="text-xl font-semibold mb-2">Medium Stall</h3>
//                                         <p className="text-gray-700 text-lg">6 Sq. Mtrs</p>
//                                         <p className="text-black font-bold text-xl mt-2">₹28,000 <span className="text-sm font-medium text-gray-500">+ GST</span></p>
//                                     </div>

//                                     <div className="bg-blue-100 rounded-2xl p-4 shadow text-center">
//                                         <h3 className="text-xl font-semibold mb-2">Big Stall</h3>
//                                         <p className="text-gray-700 text-lg">9 Sq. Mtrs</p>
//                                         <p className="text-black font-bold text-xl mt-2">₹32,000 <span className="text-sm font-medium text-gray-500">+ GST</span></p>
//                                     </div>
//                                 </div>
//                             </section>

//                             <h1 className='text-xl uppercase mb-2 text-purple-900 font-bold'>Why Vijayawada?</h1>
//                             <p className='mb-2'>
//                                 {`Vijayawada is known for its rich culture,
//                                 historical significance, and thriving community
//                                 spirit. Hosting the Kid's Funland Fair in this
//                                 vibrant city allows us to bring joy and fun to
//                                 thousands of families.`}
//                             </p>

//                             <h1 className='text-xl uppercase mb-2 text-purple-900 font-bold'>Why Kids Funfair</h1>
//                             <p className='mb-2'>
//                                 {`Kids Funland Fair - The Ultimate Summer Fun!
//                                 Step into a world of excitement at Kids Funland Fair - the must-visit
//                                 event of the season! Packed with thrilling games, fun rides,
//                                 creative activities, and delicious food, it's the perfect place for kids
//                                 to laugh, play, and explore.`}
//                             </p>
//                             <p className='mb-6'>
//                                 {`From bouncy castles and face painting to yummy treats and cool
//                                 prizes, every corner is bursting with joy. Safe, vibrant, and full of
//                                 surprises - it's a summer adventure your kids will never forget!
//                                 Don't miss out - Funland is where the magic happens!`}
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Social Media Section */}
//                 <motion.div
//                     variants={fadeUp}
//                     custom={5}
//                     className="bg-gradient-to-r from-transparent via-violet-300 to-transparent rounded-lg p-6 shadow-lg"
//                 >
//                     <h3 className="text-purple-900 text-lg font-semibold text-center mb-6">
//                         Follow Us On Social Media
//                     </h3>
//                     <div className="flex justify-center flex-wrap gap-6">
//                         {socialLinks.map(({ name, href, icon, bg, hover }) => (
//                             <motion.a
//                                 key={name}
//                                 href={href}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 whileHover={{ scale: 1.2, rotate: 10 }}
//                                 className={`w-12 h-12 rounded-full ${bg} text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out transform ${hover} hover:ring-2 hover:ring-offset-2 hover:ring-${bg.split('-')[1]}-600`}
//                             >
//                                 <Icon icon={icon} className="text-2xl" />
//                             </motion.a>
//                         ))}
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default Contact;


import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61575017804597', icon: 'ic:baseline-facebook', bg: 'bg-[#1877F2]' },
    { name: 'Instagram', href: 'https://www.instagram.com/kidsfunlandfair', icon: 'mdi:instagram', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600' },
    { name: 'WhatsApp', href: 'https://wa.me/919032952244', icon: 'ic:baseline-whatsapp', bg: 'bg-green-600' },
    { name: 'YouTube', href: 'https://youtube.com/@globalgrandeurevents', icon: 'line-md:youtube', bg: 'bg-red-600' },
    { name: 'Address', href: 'https://g.co/kgs/5nH75ib', icon: 'mdi:map-marker', bg: 'bg-gray-800' },
];

const Contact = () => {
    return (
        <div className="bg-[url('/images/3d.png')] py-24 md:py-2 min-h-screen flex justify-center items-center  bg-cover bg-center bg-blend-overlay bg-white/20 px-6">
            <div>
                {/* Full Width Why Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="w-full max-w-6xl mx-auto bg-white/40 p-6 rounded-3xl mb-4"
                >
                    <h2 className='text-xl md:text-2xl uppercase mb-3 text-purple-900 font-bold'>Why Vijayawada?</h2>
                    <p className='mb-6 text-gray-700 text-sm'>
                        {` Vijayawada is known for its rich culture, historical significance, and thriving community spirit.
                        Hosting the Kid's Funland Fair in this vibrant city allows us to bring joy and fun to thousands of families.`}
                    </p>

                    <h2 className='text-xl md:text-2xl uppercase mb-3 text-purple-900 font-bold'>Why Kids Funfair</h2>
                    <p className='mb-3 text-gray-700 text-sm'>
                        {` Kids Funland Fair - The Ultimate Summer Fun! Step into a world of excitement at Kids Funland Fair -
                        the must-visit event of the season! Packed with thrilling games, fun rides, creative activities,
                        and delicious food, it's the perfect place for kids to laugh, play, and explore.`}
                    </p>
                    <p className='text-gray-700 text-sm'>
                        {` From bouncy castles and face painting to yummy treats and cool prizes, every corner is bursting with joy.
                        Safe, vibrant, and full of surprises - it's a summer adventure your kids will never forget!
                        Don't miss out - Funland is where the magic happens!`}
                    </p>
                </motion.div>

                {/* Centered Grid Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 bg-white/20 p-6 rounded-3xl"
                >
                    {/* Left - Video */}
                    <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-lg aspect-video">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/gZ0J8Cx7AX4?si=qlPXOrHX29TPUrq_"
                            title="Kids Funfair Promo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </motion.div>

                    {/* Right - Info */}
                    <motion.div variants={fadeUp} className="flex flex-col justify-between space-y-4">
                        <div>
                            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-2">
                                Kids Funland Fair
                            </h1>
                            <p className="text-gray-700 text-sm mb-3">
                                {` A world of excitement! Fun rides, creative games, treats, and laughter await in Vijayawada’s favorite summer event!`}
                            </p>

                            <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                                <div className="bg-green-100 p-3 rounded-lg">Small<br />₹18K + GST</div>
                                <div className="bg-yellow-100 p-3 rounded-lg">Medium<br />₹28K + GST</div>
                                <div className="bg-blue-100 p-3 rounded-lg">Big<br />₹32K + GST</div>
                            </div>
                        </div>

                        {/* Download Form Section */}
                        <div className="mt-4 space-y-2">
                            <p className="text-sm text-gray-800">
                                Want to book a stall? Download the form, fill it, and send it to our WhatsApp:
                                <span className="font-semibold text-green-600"> 9032952244</span>
                            </p>
                            <div className='flex justify-between items-center'>
                                <Link
                                    href="/images/Application Form.pdf"
                                    download
                                    className="inline-block bg-purple-600 text-white text-sm px-4 py-2 rounded-full shadow hover:bg-purple-700 transition"
                                >
                                    📄 Download Booking Form
                                </Link>
                                <Link
                                    href="https://wa.me/919032952244"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full shadow"
                                >
                                    Send Screen Shot
                                </Link>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                            {socialLinks.map(({ name, href, icon, bg }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-9 h-9 rounded-full ${bg} text-white flex items-center justify-center shadow hover:scale-110 transition`}
                                >
                                    <Icon icon={icon} className="text-lg" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
