import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Tag, Clock, DollarSign, ArrowLeft, Edit, Trash2, User, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { getEventById, getParticipantsByEventId } from '../data/mockData';
import { formatDate, formatTime, formatNumber } from '../utils/utils';

const EventDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const foundEvent = getEventById(id);
            if (foundEvent) {
                setEvent(foundEvent);
                setParticipants(getParticipantsByEventId(id));
            }
            setLoading(false);
        }, 300);
    }, [id]);

    const handleEdit = () => {
        navigate(`/create-event?edit=${id}`);
    };

    const handleDelete = () => {
        toast.success('Event deleted successfully!', {
            icon: '🗑️',
            duration: 2000,
        });
        setTimeout(() => {
            navigate('/events');
        }, 500);
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
                    <p className="text-slate-400 mb-6">The event you're looking for doesn't exist.</p>
                    <button onClick={() => navigate('/events')} className="btn-primary">
                        Back to Events
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Back Button & Actions */}
            <div className="flex items-center justify-between animate-fadeIn">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back
                </button>
                <div className="flex gap-3">
                    <button
                        onClick={handleEdit}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    >
                        <Edit className="w-4 h-4" />
                        Edit Event
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                    >
                        <Trash2 className="w-4 h-4" />
                        Delete Event
                    </button>
                </div>
            </div>

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

                        {/* Category Badge */}
                        <div className="absolute top-6 left-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center gap-2">
                            <Tag className="w-4 h-4 text-teal-400" />
                            <span className="text-sm font-medium text-teal-400">{event.category}</span>
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
                        <div className="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Date</p>
                                <p className="text-white font-medium">{formatDate(event.date)}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Time</p>
                                <p className="text-white font-medium">{formatTime(event.time)}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Location</p>
                                <p className="text-white font-medium">{event.location}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <DollarSign className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400 mb-1">Price</p>
                                <p className="text-white font-medium">{event.price}</p>
                            </div>
                        </div>
                    </div>

                    {/* Organizer Info */}
                    <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl animate-fadeIn">
                        <h3 className="text-xl font-bold text-white mb-4">About the Organizer</h3>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">
                                    {event.organizer.charAt(0)}
                                </span>
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
                        {/* Attendees Card */}
                        <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl animate-fadeIn">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="w-6 h-6 text-violet-400" />
                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        {formatNumber(event.attendees)}
                                    </p>
                                    <p className="text-sm text-slate-400">Total Registrations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Participants Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden animate-fadeIn">
                <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Registered Participants</h2>
                        <p className="text-slate-400 mt-1">{participants.length} participants registered for this event</p>
                    </div>
                    <Link
                        to="/participants"
                        className="text-violet-400 hover:text-violet-300 font-medium transition-colors text-sm"
                    >
                        View All Participants →
                    </Link>
                </div>

                {participants.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700/50 text-slate-400 text-sm">
                                    <th className="text-left p-4 font-medium">Name</th>
                                    <th className="text-left p-4 font-medium">Email</th>
                                    <th className="text-left p-4 font-medium">Phone</th>
                                    <th className="text-left p-4 font-medium">Registration Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {participants.map((participant, index) => (
                                    <tr
                                        key={participant.id}
                                        className="border-b border-slate-700/30 hover:bg-slate-700/30 transition-colors"
                                        style={{ animationDelay: `${index * 30}ms` }}
                                    >
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-full flex items-center justify-center">
                                                    <User className="w-5 h-5 text-white" />
                                                </div>
                                                <span className="font-medium text-white">{participant.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <Mail className="w-4 h-4 text-slate-400" />
                                                {participant.email}
                                            </div>
                                        </td>
                                        <td className="p-4 text-slate-300">{participant.phone}</td>
                                        <td className="p-4 text-slate-300">
                                            {new Date(participant.registrationDate).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <Users className="w-16 h-16 mx-auto mb-4 text-slate-600" />
                        <h3 className="text-xl font-bold text-white mb-2">No Participants Yet</h3>
                        <p className="text-slate-400">No one has registered for this event yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventDetails;
