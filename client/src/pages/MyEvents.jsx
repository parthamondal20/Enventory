import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { mockEvents } from '../data/mockData';
import { Calendar } from 'lucide-react';

const MyEvents = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            // Mock: In real app, this would be user's registered events
            setRegisteredEvents(mockEvents.slice(0, 4));
            setLoading(false);
        }, 500);
    }, []);

    const upcomingEvents = registeredEvents.filter(e => e.status === 'upcoming');
    const pastEvents = registeredEvents.filter(e => e.status === 'completed');

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="gradient-text">Events</span>
                    </h1>
                    <p className="text-lg text-slate-400">
                        View and manage your registered events
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 animate-fadeIn">
                    <button
                        onClick={() => setActiveTab('upcoming')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'upcoming'
                                ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white'
                                : 'bg-slate-800 text-slate-400 hover:text-white'
                            }`}
                    >
                        Upcoming ({upcomingEvents.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('past')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'past'
                                ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white'
                                : 'bg-slate-800 text-slate-400 hover:text-white'
                            }`}
                    >
                        Past ({pastEvents.length})
                    </button>
                </div>

                {/* Events Grid */}
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full" />
                    </div>
                ) : (
                    <>
                        {activeTab === 'upcoming' && (
                            <>
                                {upcomingEvents.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {upcomingEvents.map((event) => (
                                            <EventCard key={event.id} event={event} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-20 animate-fadeIn">
                                        <Calendar className="w-24 h-24 mx-auto mb-6 text-slate-600" />
                                        <h3 className="text-2xl font-bold text-white mb-2">No Upcoming Events</h3>
                                        <p className="text-slate-400 mb-6">You haven't registered for any upcoming events yet</p>
                                        <Link to="/events" className="btn-primary">
                                            Browse Events
                                        </Link>
                                    </div>
                                )}
                            </>
                        )}

                        {activeTab === 'past' && (
                            <>
                                {pastEvents.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {pastEvents.map((event) => (
                                            <EventCard key={event.id} event={event} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-20 animate-fadeIn">
                                        <Calendar className="w-24 h-24 mx-auto mb-6 text-slate-600" />
                                        <h3 className="text-2xl font-bold text-white mb-2">No Past Events</h3>
                                        <p className="text-slate-400">You don't have any past events yet</p>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default MyEvents;
