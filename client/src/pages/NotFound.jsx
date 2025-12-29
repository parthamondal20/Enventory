import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto animate-fadeIn">
                {/* 404 Illustration */}
                <div className="relative mb-8">
                    <div className="text-[150px] md:text-[200px] font-bold gradient-text leading-none">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
                    </div>
                </div>

                {/* Message */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Page Not Found
                </h1>
                <p className="text-lg text-slate-400 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="btn-primary flex items-center gap-2 group"
                    >
                        <Home className="w-5 h-5" />
                        Go to Homepage
                    </Link>
                    <Link
                        to="/events"
                        className="btn-secondary flex items-center gap-2"
                    >
                        <Search className="w-5 h-5" />
                        Browse Events
                    </Link>
                </div>

                {/* Suggested Links */}
                <div className="mt-12 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Maybe you're looking for:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                            to="/events"
                            className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-300 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            All Events
                        </Link>
                        <Link
                            to="/create-event"
                            className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-300 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Create Event
                        </Link>
                        <Link
                            to="/my-events"
                            className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-300 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            My Events
                        </Link>
                        <Link
                            to="/signin"
                            className="flex items-center gap-2 px-4 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-slate-300 hover:text-white transition-all duration-300 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
