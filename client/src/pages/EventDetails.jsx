import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, DollarSign, ArrowLeft, Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import { getEventById, getSimilarEvents } from '../data/mockData';
import { formatDate, formatTime } from '../utils/utils';
import EventCard from '../components/EventCard';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [similarEvents, setSimilarEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isRegistered, setIsRegistered] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            const foundEvent = getEventById(id);
            if (foundEvent) {
                setEvent(foundEvent);
                setSimilarEvents(getSimilarEvents(parseInt(id), foundEvent.category));
            }
            setLoading(false);
        }, 300);
    }, [id]);

    const handleRSVP = () => {
        if (!isRegistered) {
            setIsRegistered(true);
            toast.success(`Successfully registered for ${event.title}!`, {
                icon: '🎉',
                duration: 3000,
            });
        } else {
            setIsRegistered(false);
            toast.success('Registration cancelled', {
                icon: '✅',
                duration: 2000,
            });
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full" />
            </div>
        );
    }

    if (!event) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="text-center animate-fadeIn">
                    <h2 className="text-3xl font-bold text-white mb-4">Event Not Found</h2>
                    <button onClick={() => navigate('/events')} className="btn-primary">
                        Browse Events
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group mb-6 animate-fadeIn"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Event Image */}
                        <div className="relative h-96 rounded-2xl overflow-hidden animate-fadeIn">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                            <div className="absolute top-6 left-6 px-4 py-2 bg-teal-500/90 backdrop-blur-sm rounded-full">
                                <span className="text-sm font-semibold text-white">{event.category}</span>
                            </div>
                        </div>

                        {/* Event Title & Description */}
                        <div className="space-y-4 animate-fadeIn">
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                {event.title}
                            </h1>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                {event.description}
                            </p>
                        </div>

                        {/* Event Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn">
                            <div className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Date</p>
                                    <p className="text-white font-medium">{formatDate(event.date)}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Time</p>
                                    <p className="text-white font-medium">{formatTime(event.time)}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Location</p>
                                    <p className="text-white font-medium">{event.location}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                                    <DollarSign className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 mb-1">Price</p>
                                    <p className="text-white font-medium">{event.price}</p>
                                </div>
                            </div>
                        </div>

                        {/* Organizer Info */}
                        <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl animate-fadeIn">
                            <h3 className="text-xl font-bold text-white mb-4">About the Organizer</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{event.organizer.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="text-lg font-semibold text-white">{event.organizer}</p>
                                    <p className="text-slate-400 text-sm">Event Organizer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="lg:sticky lg:top-24 space-y-6">
                            {/* RSVP Card */}
                            <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl animate-fadeIn">
                                <div className="flex items-center gap-3 mb-4">
                                    <Users className="w-6 h-6 text-violet-400" />
                                    <div>
                                        <p className="text-2xl font-bold text-white">{event.attendees}</p>
                                        <p className="text-sm text-slate-400">People Registered</p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleRSVP}
                                    className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${isRegistered
                                            ? 'bg-green-500 hover:bg-green-600 text-white'
                                            : 'bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white'
                                        }`}
                                >
                                    {isRegistered ? '✓ Registered' : 'RSVP Now'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar Events */}
                {similarEvents.length > 0 && (
                    <div className="mt-16 animate-fadeIn">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Similar <span className="gradient-text">Events</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {similarEvents.map((similarEvent) => (
                                <EventCard key={similarEvent.id} event={similarEvent} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventDetails;
