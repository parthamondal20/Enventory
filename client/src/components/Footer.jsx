import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold gradient-text">Eventory</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Discover and register for amazing events near you. Create unforgettable memories.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-slate-400 hover:text-violet-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/events" className="text-slate-400 hover:text-violet-400 transition-colors text-sm">
                                    Browse Events
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-events" className="text-slate-400 hover:text-violet-400 transition-colors text-sm">
                                    My Events
                                </Link>
                            </li>
                            <li>
                                <Link to="/signin" className="text-slate-400 hover:text-violet-400 transition-colors text-sm">
                                    Sign In
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            {['Music', 'Technology', 'Sports', 'Art & Culture', 'Business'].map((category) => (
                                <li key={category}>
                                    <Link
                                        to={`/events?category=${category}`}
                                        className="text-slate-400 hover:text-violet-400 transition-colors text-sm"
                                    >
                                        {category}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <Mail className="w-4 h-4 text-violet-400" />
                                contact@eventory.com
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <Phone className="w-4 h-4 text-violet-400" />
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 text-violet-400" />
                                New York, NY 10001
                            </li>
                        </ul>
                        <div className="flex gap-3 mt-4">
                            <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-violet-500 rounded-full flex items-center justify-center transition-colors">
                                <Facebook className="w-4 h-4 text-slate-400 hover:text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-violet-500 rounded-full flex items-center justify-center transition-colors">
                                <Twitter className="w-4 h-4 text-slate-400 hover:text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-violet-500 rounded-full flex items-center justify-center transition-colors">
                                <Instagram className="w-4 h-4 text-slate-400 hover:text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-violet-500 rounded-full flex items-center justify-center transition-colors">
                                <Linkedin className="w-4 h-4 text-slate-400 hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-8 pt-8 text-center">
                    <p className="text-slate-400 text-sm">
                        © {currentYear} Eventory. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
