import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-cyan-50 p-6 md:p-10">
            {/* Header */}
            <header className="text-center mb-12">
                <h1 className="text-4xl  font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-green-500">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    {`  We'd love to hear from you! Reach out through any of these channels.`}
                </p>
            </header>

            {/* Main Content - Side by Side Layout */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Contact Methods */}
                <div className="space-y-6">
                    {/* Email and Phone - Side by Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email Card */}
                        <div className="bg-white p-6 rounded-xl border-2 border-pink-200 shadow-md hover:shadow-lg hover:border-pink-300 transition-all">
                            <div className="flex flex-col items-center text-center">
                                <div className="p-3 bg-pink-100 rounded-full mb-3">
                                    <Mail className="w-6 h-6 text-pink-500" />
                                </div>
                                <h3 className="text-xl font-bold text-pink-600 mb-2">Email Us</h3>
                                <p className="text-gray-600 mb-2">Send us a message anytime</p>
                                <a
                                    href="mailto:contact@funland.com"
                                    className="text-pink-500 hover:text-pink-600 transition-colors font-medium"
                                >
                                    contact@funland.com
                                </a>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white p-6 rounded-xl border-2 border-green-200 shadow-md hover:shadow-lg hover:border-green-300 transition-all">
                            <div className="flex flex-col items-center text-center">
                                <div className="p-3 bg-green-100 rounded-full mb-3">
                                    <Phone className="w-6 h-6 text-green-500" />
                                </div>
                                <h3 className="text-xl font-bold text-green-600 mb-2">Call Us</h3>
                                <p className="text-gray-600 mb-2">Available 9AM-9PM daily</p>
                                <a
                                    href="tel:+18005551234"
                                    className="text-green-500 hover:text-green-600 transition-colors font-medium"
                                >
                                    +1 (800) 555-1234
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Visit Us - Full Width Below */}
                    <div className="bg-white p-6 rounded-xl border-2 border-cyan-200 shadow-md hover:shadow-lg hover:border-cyan-300 transition-all">
                        <div className="flex flex-col items-center text-center">
                            <div className="p-3 bg-cyan-100 rounded-full mb-3">
                                <MapPin className="w-6 h-6 text-cyan-500" />
                            </div>
                            <h3 className="text-xl font-bold text-cyan-600 mb-2">Visit Us</h3>
                            <p className="text-gray-600 mb-2">Come experience the fun</p>
                            <address className="text-cyan-500 not-italic font-medium">
                                123 Fantasy Lane<br />
                                Dream City, DY 54321
                            </address>
                        </div>
                    </div>

                    {/* Social Links - Full Width Below */}
                    <div className="bg-white p-6 rounded-xl border-2 border-purple-200 shadow-md hover:shadow-lg hover:border-purple-300 transition-all">
                        <h3 className="text-xl font-bold text-purple-600 mb-4 text-center">Connect With Us</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                                { name: 'Facebook', color: 'bg-blue-100 text-blue-600' },
                                { name: 'Twitter', color: 'bg-sky-100 text-sky-600' },
                                { name: 'Instagram', color: 'bg-pink-100 text-pink-600' },
                                { name: 'TikTok', color: 'bg-red-100 text-red-600' }
                            ].map((platform) => (
                                <a
                                    key={platform.name}
                                    href="#"
                                    className={`px-3 py-2 rounded-lg ${platform.color} font-medium hover:shadow-md transition-all text-center`}
                                >
                                    {platform.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="bg-white p-8 rounded-xl border-2 border-yellow-200 shadow-lg">
                    <h2 className="text-2xl font-bold text-yellow-600 mb-6">Send a Message</h2>
                    <form className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Your Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                                placeholder="Type your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-md hover:shadow-yellow-200 transition-all flex items-center justify-center gap-2"
                        >
                            <Send className="w-5 h-5" />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;