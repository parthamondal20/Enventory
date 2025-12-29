import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, TrendingUp, Star, Sparkles } from 'lucide-react';
import EventCard from '../components/EventCard';
import { getFeaturedEvents, categories as eventCategories } from '../data/mockData';
import { formatNumber } from '../utils/utils';

const Home = () => {
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading
        setTimeout(() => {
            setFeaturedEvents(getFeaturedEvents());
            setLoading(false);
        }, 800);
    }, []);

    const stats = [
        { icon: Calendar, label: 'Events', value: '1000+', color: 'from-violet-500 to-blue-500' },
        { icon: Users, label: 'Attendees', value: '50K+', color: 'from-blue-500 to-cyan-500' },
        { icon: TrendingUp, label: 'Cities', value: '200+', color: 'from-teal-500 to-emerald-500' },
        { icon: Star, label: 'Rating', value: '4.9', color: 'from-yellow-500 to-orange-500' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-blue-900/20 to-teal-900/20" />
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="text-center space-y-8 animate-fadeIn">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-violet-500/20 rounded-full">
                            <Sparkles className="w-4 h-4 text-violet-400" />
                            <span className="text-sm text-violet-400 font-medium">Discover Amazing Events</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="text-white">Find Your Next</span>
                            <br />
                            <span className="gradient-text">Amazing Experience</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                            Discover events that match your interests, connect with like-minded people, and create unforgettable memories.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/events"
                                className="btn-primary flex items-center gap-2 group"
                            >
                                Explore Events
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/create-event"
                                className="btn-secondary flex items-center gap-2"
                            >
                                Create Event
                                <Calendar className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative py-16 border-y border-slate-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="text-center space-y-3 animate-fadeIn"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                                    <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-fadeIn">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Browse by Category
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Find events that match your interests
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {eventCategories.slice(1).map((category, index) => (
                            <Link
                                key={category}
                                to={`/events?category=${encodeURIComponent(category)}`}
                                className="group p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 animate-fadeIn"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className="text-center">
                                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-violet-500 group-hover:to-blue-500 transition-all duration-300">
                                        <Calendar className="w-6 h-6 text-violet-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 transition-all duration-300">
                                        {category}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Events Section */}
            <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12 animate-fadeIn">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                Featured Events
                            </h2>
                            <p className="text-slate-400 text-lg">
                                Don't miss these amazing upcoming events
                            </p>
                        </div>
                        <Link
                            to="/events"
                            className="hidden md:flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors group"
                        >
                            View All
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="animate-spin w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full" />
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {featuredEvents.slice(0, 6).map((event) => (
                                    <EventCard key={event.id} event={event} featured />
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <Link
                                    to="/events"
                                    className="inline-flex items-center gap-2 btn-primary"
                                >
                                    View All Events
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden bg-gradient-to-br from-violet-900/50 via-blue-900/50 to-teal-900/50 rounded-2xl p-8 md:p-12 border border-violet-500/20">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

                        <div className="relative text-center space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Ready to Create Your Event?
                            </h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                Join thousands of organizers who trust Eventory to bring their events to life. Start creating memorable experiences today!
                            </p>
                            <Link
                                to="/create-event"
                                className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
                            >
                                <Calendar className="w-6 h-6" />
                                Create Event Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
