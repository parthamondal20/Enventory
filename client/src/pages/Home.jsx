import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, TrendingUp, Star } from 'lucide-react';
import EventCard from '../components/EventCard';
import { mockEvents, getFeaturedEvents } from '../data/mockData';

const Home = () => {
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setFeaturedEvents(getFeaturedEvents());
            setLoading(false);
        }, 500);
    }, []);

    const categories = [
        { name: 'Music', icon: '🎵', color: 'from-violet-500 to-purple-500' },
        { name: 'Technology', icon: '💻', color: 'from-blue-500 to-cyan-500' },
        { name: 'Sports', icon: '⚽', color: 'from-green-500 to-emerald-500' },
        { name: 'Art & Culture', icon: '🎨', color: 'from-pink-500 to-rose-500' },
        { name: 'Business', icon: '💼', color: 'from-yellow-500 to-orange-500' },
        { name: 'Food & Drink', icon: '🍕', color: 'from-red-500 to-orange-500' },
    ];

    const stats = [
        { label: 'Total Events', value: mockEvents.length, icon: Calendar },
        { label: 'Happy Attendees', value: '10K+', icon: Users },
        { label: 'Event Categories', value: '8+', icon: TrendingUp },
        { label: 'Success Rate', value: '4.9', icon: Star },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-4xl mx-auto animate-fadeIn">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                            Find Your Next <span className="gradient-text">Amazing Experience</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            Discover events that match your interests, connect with like-minded people, and create unforgettable memories.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/events" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                                Explore Events <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/signup" className="btn-secondary text-lg px-8 py-4">
                                Sign Up Free
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700/50 animate-fadeIn"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex justify-center mb-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center">
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-slate-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 animate-fadeIn">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Browse by <span className="gradient-text">Category</span>
                        </h2>
                        <p className="text-lg text-slate-400">
                            Find events that match your interests
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category, index) => (
                            <Link
                                key={category.name}
                                to={`/events?category=${category.name}`}
                                className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:scale-105 transition-all duration-300 hover:border-violet-500/50 animate-fadeIn"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className={`w-16 h-16 mx-auto mb-3 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-center text-white font-medium group-hover:text-violet-400 transition-colors">
                                    {category.name}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Events */}
            <section className="py-16 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12 animate-fadeIn">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Featured <span className="gradient-text">Events</span>
                            </h2>
                            <p className="text-lg text-slate-400">
                                Don't miss these amazing upcoming events
                            </p>
                        </div>
                        <Link to="/events" className="hidden md:flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors">
                            View All <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="animate-spin w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl p-12 text-center animate-fadeIn">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
                            Sign up now to start discovering and registering for amazing events
                        </p>
                        <Link to="/signup" className="btn-secondary bg-white text-violet-600 hover:bg-slate-100 text-lg px-8 py-4">
                            Create Free Account
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
