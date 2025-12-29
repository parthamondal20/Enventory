import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Calendar, Edit, Trash2, CheckCircle } from 'lucide-react';
import EventCard from '../components/EventCard';
import SkeletonLoader from '../components/SkeletonLoader';
import { mockEvents } from '../data/mockData';

const MyEvents = () => {
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('created'); // 'created' or 'attending'
    const [createdEvents, setCreatedEvents] = useState([]);
    const [attendingEvents, setAttendingEvents] = useState([]);

    useEffect(() => {
        // Simulate loading my events
        setTimeout(() => {
            // Mock: first 4 events as created, next 4 as attending
            setCreatedEvents(mockEvents.slice(0, 4));
            setAttendingEvents(mockEvents.slice(4, 8));
            setLoading(false);
        }, 1000);
    }, []);

    const handleEdit = (eventId) => {
        toast.success('Editing event... (Feature not implemented)', {
            icon: '✏️',
            duration: 2000,
        });
    };

    const handleDelete = (eventId) => {
        toast.success('Event deleted successfully!', {
            icon: '🗑️',
            duration: 2000,
        });
        setCreatedEvents(createdEvents.filter(event => event.id !== eventId));
    };

    const currentEvents = activeTab === 'created' ? createdEvents : attendingEvents;

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        My <span className="gradient-text">Events</span>
                    </h1>
                    <p className="text-lg text-slate-400">
                        Manage your created events and view events you're attending
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 animate-fadeIn">
                    <button
                        onClick={() => setActiveTab('created')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'created'
                                ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white'
                                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                            }`}
                    >
                        <Edit className="w-5 h-5" />
                        Created Events
                        <span className="px-2 py-0.5 bg-white/20 rounded-full text-sm">
                            {createdEvents.length}
                        </span>
                    </button>

                    <button
                        onClick={() => setActiveTab('attending')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'attending'
                                ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white'
                                : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                            }`}
                    >
                        <CheckCircle className="w-5 h-5" />
                        Attending
                        <span className="px-2 py-0.5 bg-white/20 rounded-full text-sm">
                            {attendingEvents.length}
                        </span>
                    </button>
                </div>

                {/* Events Display */}
                {loading ? (
                    <SkeletonLoader type="card" count={4} />
                ) : currentEvents.length > 0 ? (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {currentEvents.map((event) => (
                                <div key={event.id} className="relative group">
                                    <EventCard event={event} />

                                    {/* Action Buttons (only for created events) */}
                                    {activeTab === 'created' && (
                                        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={() => handleEdit(event.id)}
                                                className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center text-white transition-colors shadow-lg"
                                            >
                                                <Edit className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(event.id)}
                                                className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-lg flex items-center justify-center text-white transition-colors shadow-lg"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 animate-fadeIn">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-violet-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                            <Calendar className="w-12 h-12 text-violet-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            No Events Yet
                        </h3>
                        <p className="text-slate-400 mb-6">
                            {activeTab === 'created'
                                ? "You haven't created any events yet"
                                : "You haven't RSVP'd to any events yet"}
                        </p>
                        {activeTab === 'created' ? (
                            <Link to="/create-event" className="btn-primary inline-flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Create Your First Event
                            </Link>
                        ) : (
                            <Link to="/events" className="btn-primary inline-flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Browse Events
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyEvents;
