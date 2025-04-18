// import React from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// const Contact = () => {
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-pink-50 to-cyan-50 p-6 md:p-10">
//             {/* Header */}
//             <header className="text-center mb-12">
//                 <h1 className="text-4xl  font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-green-500">
//                     Contact Us
//                 </h1>
//                 <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//                     {`  We'd love to hear from you! Reach out through any of these channels.`}
//                 </p>
//             </header>

//             {/* Main Content - Side by Side Layout */}
//             <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left Column - Contact Methods */}
//                 <div className="space-y-6">
//                     {/* Email and Phone - Side by Side */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         {/* Email Card */}
//                         <div className="bg-white p-6 rounded-xl border-2 border-pink-200 shadow-md hover:shadow-lg hover:border-pink-300 transition-all">
//                             <div className="flex flex-col items-center text-center">
//                                 <div className="p-3 bg-pink-100 rounded-full mb-3">
//                                     <Mail className="w-6 h-6 text-pink-500" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-pink-600 mb-2">Email Us</h3>
//                                 <p className="text-gray-600 mb-2">Send us a message anytime</p>
//                                 <a
//                                     href="mailto:globalgrandeurevents@gmail.com"
//                                     className="text-pink-500 hover:text-pink-600 transition-colors font-medium"
//                                 >
//                                     globalgrandeurevents@gmail.com
//                                 </a>
//                             </div>
//                         </div>

//                         {/* Phone Card */}
//                         <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-md hover:shadow-lg hover:border-green-300 transition-all">
//                             <div className="flex flex-col items-center text-center">
//                                 <div className="p-3 bg-green-100 rounded-full mb-3">
//                                     <Phone className="w-6 h-6 text-green-500" />
//                                 </div>
//                                 <h3 className="text-xl font-bold text-green-600 mb-2">Call Us</h3>
//                                 <p className="text-gray-600 mb-2">Available 9AM-9PM daily</p>
//                                 <a
//                                     href="tel:+18005551234"
//                                     className="text-green-500 hover:text-green-600 transition-colors font-medium"
//                                 >
//                                     +91 9701352244
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Visit Us - Full Width Below */}
//                     <div className="bg-white p-6 rounded-xl border-2 border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-300 transition-all">
//                         <div className="flex flex-col items-center text-center">
//                             <div className="p-3 bg-cyan-100 rounded-full mb-3">
//                                 <MapPin className="w-6 h-6 text-cyan-500" />
//                             </div>
//                             <h3 className="text-xl font-bold text-cyan-600 mb-2">Visit Us</h3>
//                             <p className="text-gray-600 mb-2">Come experience the fun</p>
//                             <address className="text-cyan-500 not-italic font-medium">
//                                 123 Fantasy Lane<br />
//                                 Dream City, DY 54321
//                             </address>
//                         </div>
//                     </div>

//                     {/* Social Links - Full Width Below */}
//                     <div className="bg-white p-6 rounded-xl border-2 border-purple-200 shadow-md hover:shadow-lg hover:border-purple-300 transition-all">
//                         <h3 className="text-xl font-bold text-purple-600 mb-4 text-center">Connect With Us</h3>
//                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                             {[
//                                 { name: 'Facebook', color: 'bg-blue-100 text-blue-600' },
//                                 { name: 'Twitter', color: 'bg-sky-100 text-sky-600' },
//                                 { name: 'Instagram', color: 'bg-pink-100 text-pink-600' },
//                                 { name: 'TikTok', color: 'bg-red-100 text-red-600' }
//                             ].map((platform) => (
//                                 <a
//                                     key={platform.name}
//                                     href="#"
//                                     className={`px-3 py-2 rounded-lg ${platform.color} font-medium hover:shadow-md transition-all text-center`}
//                                 >
//                                     {platform.name}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Column - Contact Form */}
//                 <div className="bg-white p-8 rounded-xl border-2 border-yellow-200 shadow-lg">
//                     <h2 className="text-2xl font-bold text-yellow-600 mb-6">Send a Message</h2>
//                     <form className="space-y-5">
//                         <div>
//                             <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Your Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
//                                 placeholder="Enter your name"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
//                                 placeholder="your@email.com"
//                             />
//                         </div>
//                         <div>
//                             <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Your Message</label>
//                             <textarea
//                                 id="message"
//                                 rows="5"
//                                 className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
//                                 placeholder="Type your message here..."
//                             ></textarea>
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-md hover:shadow-yellow-200 transition-all flex items-center justify-center gap-2"
//                         >
//                             <Send className="w-5 h-5" />
//                             Send Message
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;
import React from 'react';
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
    { name: 'Facebook', href: 'https://facebook.com', icon: 'ic:baseline-facebook', bg: 'bg-[#1877F2]', hover: 'hover:bg-[#166FE5]' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'mdi:twitter', bg: 'bg-[#1DA1F2]', hover: 'hover:bg-[#1991D2]' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'mdi:instagram', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600', hover: 'hover:opacity-80' },
    { name: 'WhatsApp', href: 'https://wa.me/919032952244', icon: 'ic:baseline-whatsapp', bg: 'bg-green-600', hover: 'hover:bg-gray-700' },
    { name: 'Email', href: 'mailto:info@kidsfunfair.com', icon: 'ic:baseline-email', bg: 'bg-red-500', hover: 'hover:bg-red-600' },
    { name: 'Phone', href: 'tel:+919032952244', icon: 'ic:baseline-phone', bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
    {
        name: 'Address',
        href: 'https://www.google.com/maps?q=YOUR_LATITUDE,YOUR_LONGITUDE',
        icon: 'mdi:map-marker',
        bg: 'bg-gray-800',
        hover: 'hover:bg-gray-900'
    },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/kidsfunfair', icon: 'mdi:linkedin', bg: 'bg-[#0077B5]', hover: 'hover:bg-[#006699]' },
];

const Contact = () => {
    return (
        <div className="min-h-screen bg-[url('/images/3d.png')] bg-black/20 bg-blend-overlay px-4 py-10 flex items-center justify-center">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="w-full max-w-7xl grid grid-cols-1 gap-8 mt-10 md:mt-2"
            >
                {/* Header Section */}
                <motion.div variants={fadeUp} className="text-center">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-black mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg text-black">
                        {`We're happy to connect! Reach out through any channel below.`}
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left Column - Video */}
                    <motion.div
                        variants={fadeUp}
                        className="w-full h-full rounded-xl overflow-hidden shadow-lg"
                    >
                        <iframe
                            className="w-full h-full min-h-[400px]"
                            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                            title="Kids Funfair Promo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </motion.div>

                    {/* Right Column - Content */}
                    <div className="rounded-xl overflow-hidden bg-white/10 border border-cyan-200 shadow-lg max-h-96">
                        <div className='h-full overflow-y-auto p-4'>
                            <h1 className='text-xl uppercase mb-2 text-purple-900 font-bold'>Why Vijayawada?</h1>
                            <p className='mb-2'>
                                {`Vijayawada is known for its rich culture,
                                historical significance, and thriving community
                                spirit. Hosting the Kid's Funland Fair in this
                                vibrant city allows us to bring joy and fun to
                                thousands of families.`}
                            </p>

                            <h1 className='text-xl uppercase mb-2 text-purple-900 font-bold'>Why Kids Funfair</h1>
                            <p className='mb-2'>
                                {`Kids Funland Fair - The Ultimate Summer Fun!
                                Step into a world of excitement at Kids Funland Fair - the must-visit
                                event of the season! Packed with thrilling games, fun rides,
                                creative activities, and delicious food, it's the perfect place for kids
                                to laugh, play, and explore.`}
                            </p>
                            <p className='mb-6'>
                                {`From bouncy castles and face painting to yummy treats and cool
                                prizes, every corner is bursting with joy. Safe, vibrant, and full of
                                surprises - it's a summer adventure your kids will never forget!
                                Don't miss out - Funland is where the magic happens!`}
                            </p>

                            {/* Pricing Section with Registration Button */}
                            <section className="max-w-4xl mx-auto px-4 py-4">
                                <h1 className='text-xl uppercase mb-4 text-purple-900 font-bold'>STALL PRICING & LAYOUT</h1>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-green-100 rounded-2xl p-4 shadow text-center">
                                        <h3 className="text-xl font-semibold mb-2">Small Stall</h3>
                                        <p className="text-gray-700 text-lg">4 Sq. Mtrs</p>
                                        <p className="text-black font-bold text-xl mt-2">₹18,000 <span className="text-sm font-medium text-gray-500">+ GST</span></p>
                                    </div>

                                    <div className="bg-yellow-100 rounded-2xl p-4 shadow text-center">
                                        <h3 className="text-xl font-semibold mb-2">Medium Stall</h3>
                                        <p className="text-gray-700 text-lg">6 Sq. Mtrs</p>
                                        <p className="text-black font-bold text-xl mt-2">₹28,000 <span className="text-sm font-medium text-gray-500">+ GST</span></p>
                                    </div>

                                    <div className="bg-blue-100 rounded-2xl p-4 shadow text-center">
                                        <h3 className="text-xl font-semibold mb-2">Big Stall</h3>
                                        <p className="text-gray-700 text-lg">9 Sq. Mtrs</p>
                                        <p className="text-black font-bold text-xl mt-2">₹32,000 <span className="text-sm font-medium text-gray-500">+ GST</span></p>
                                    </div>
                                </div>

                                {/* Registration Button */}
                                <motion.div
                                    className="mt-8 text-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <motion.a
                                        href="#register"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Register Your Stall Now
                                    </motion.a>
                                </motion.div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <motion.div
                    variants={fadeUp}
                    custom={5}
                    className="bg-gradient-to-r from-transparent via-violet-300 to-transparent rounded-lg p-6 shadow-lg"
                >
                    <h3 className="text-purple-900 text-lg font-semibold text-center mb-6">
                        Follow Us On Social Media
                    </h3>
                    <div className="flex justify-center flex-wrap gap-6">
                        {socialLinks.map(({ name, href, icon, bg, hover }) => (
                            <motion.a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className={`w-12 h-12 rounded-full ${bg} text-white flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out transform ${hover} hover:ring-2 hover:ring-offset-2 hover:ring-${bg.split('-')[1]}-600`}
                            >
                                <Icon icon={icon} className="text-2xl" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Contact;
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
//     { name: 'Twitter', href: 'https://twitter.com', icon: 'mdi:twitter', bg: 'bg-[#1DA1F2]', hover: 'hover:bg-[#1991D2]' },
//     { name: 'Instagram', href: 'https://instagram.com', icon: 'mdi:instagram', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600', hover: 'hover:opacity-80' },
//     { name: 'WhatsApp', href: 'https://wa.me/919032952244', icon: 'ic:baseline-whatsapp', bg: 'bg-green-600', hover: 'hover:bg-gray-700' },
//     { name: 'Email', href: 'mailto:info@kidsfunfair.com', icon: 'ic:baseline-email', bg: 'bg-red-500', hover: 'hover:bg-red-600' },
//     { name: 'Phone', href: 'tel:+919032952244', icon: 'ic:baseline-phone', bg: 'bg-blue-500', hover: 'hover:bg-blue-600' },
//     {
//         name: 'Address',
//         href: 'https://www.google.com/maps?q=YOUR_LATITUDE,YOUR_LONGITUDE', // Replace with actual coordinates
//         icon: 'mdi:map-marker',
//         bg: 'bg-gray-800',
//         hover: 'hover:bg-gray-900'
//     },
//     { name: 'LinkedIn', href: 'https://linkedin.com/company/kidsfunfair', icon: 'mdi:linkedin', bg: 'bg-[#0077B5]', hover: 'hover:bg-[#006699]' },
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
//                             src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//                             title="Kids Funfair Promo"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         ></iframe>
//                     </motion.div>

//                     {/* Right Column - Content */}
//                     <div className="rounded-xl overflow-hidden bg-white/10 border border-cyan-200 shadow-lg max-h-96">
//                         <div className='h-full overflow-y-auto p-4'>
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

//                             {/* Pricing Section */}
//                             <section className="max-w-4xl mx-auto px-4 py-4">
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