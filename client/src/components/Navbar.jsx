import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Calendar, Search, Menu, X, User } from 'lucide-react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/events?search=${searchQuery}`);
            setSearchQuery('');
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold gradient-text hidden sm:block">
                            Eventory
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            to="/"
                            className="text-slate-300 hover:text-white transition-colors font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/events"
                            className="text-slate-300 hover:text-white transition-colors font-medium"
                        >
                            Events
                        </Link>
                        <Link
                            to="/my-events"
                            className="text-slate-300 hover:text-white transition-colors font-medium"
                        >
                            My Events
                        </Link>
                    </div>

                    {/* Search & Auth */}
                    <div className="hidden md:flex items-center gap-4">
                        <form onSubmit={handleSearch} className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500 w-64"
                            />
                        </form>
                        <Link to="/signin" className="btn-primary flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Sign In
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-800 bg-slate-900 animate-fadeIn">
                    <div className="px-4 py-4 space-y-4">
                        <form onSubmit={handleSearch} className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                        </form>
                        <Link
                            to="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-slate-300 hover:text-white transition-colors font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/events"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-slate-300 hover:text-white transition-colors font-medium"
                        >
                            Events
                        </Link>
                        <Link
                            to="/my-events"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-slate-300 hover:text-white transition-colors font-medium"
                        >
                            My Events
                        </Link>
                        <Link
                            to="/signin"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block btn-primary text-center"
                        >
                            Sign In
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
