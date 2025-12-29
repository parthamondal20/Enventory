import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, Calendar, Plus, User, Home } from 'lucide-react';

const Navbar = ({ onSearch }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/events?search=${encodeURIComponent(searchQuery)}`);
            setIsMenuOpen(false);
        }
    };

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/events', label: 'Events', icon: Calendar },
        { path: '/create-event', label: 'Create Event', icon: Plus },
        { path: '/my-events', label: 'My Events', icon: User },
    ];

    return (
        <nav className="sticky top-0 z-50 glass-effect border-b border-slate-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                            <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold gradient-text hidden sm:block">
                            Eventory
                        </span>
                    </Link>

                    {/* Desktop Search */}
                    <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search events..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="input-field pl-10 pr-4"
                            />
                        </div>
                    </form>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${isActive(link.path)
                                        ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white'
                                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                                    }`}
                            >
                                <link.icon className="w-4 h-4" />
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/signin"
                            className="ml-4 px-6 py-2 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300"
                        >
                            Sign In
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6 text-white" />
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearchSubmit} className="md:hidden pb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="input-field pl-10 pr-4"
                        />
                    </div>
                </form>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-slate-700/50 animate-fadeIn">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white'
                                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                                    }`}
                            >
                                <link.icon className="w-5 h-5" />
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to="/signin"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-lg font-semibold mt-4"
                        >
                            <User className="w-5 h-5" />
                            Sign In
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
