import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', path: '/' },
        { label: 'Events', path: '/events' },
        { label: 'Create Event', path: '/create-event' },
        { label: 'My Events', path: '/my-events' },
    ];

    const categories = [
        'Music', 'Technology', 'Sports', 'Art & Culture', 'Business', 'Food & Drink'
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 to-slate-800 border-t border-slate-700/50 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold gradient-text">
                                Eventory
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Discover and create amazing events. Connect with people who share your interests and passions.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-violet-500 hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                >
                                    <social.icon className="w-5 h-5 text-slate-400 hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 group-hover:w-4 transition-all duration-300" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Categories</h3>
                        <ul className="space-y-2">
                            {categories.map((category) => (
                                <li key={category}>
                                    <Link
                                        to={`/events?category=${encodeURIComponent(category)}`}
                                        className="text-slate-400 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 group-hover:w-4 transition-all duration-300" />
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                                <span>123 Event Street, New York, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400 text-sm">
                                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                <a href="mailto:info@eventory.com" className="hover:text-white transition-colors">
                                    info@eventory.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-700/50">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-slate-400 text-sm">
                            © {currentYear} Eventory. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
