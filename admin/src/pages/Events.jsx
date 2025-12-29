import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { mockEvents } from '../data/mockData';
import { searchEvents, filterByCategory } from '../utils/utils';
import { Search, Edit, Trash2, Eye, Users, Calendar } from 'lucide-react';
import { formatDate, formatNumber } from '../utils/utils';

const Events = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [categoryFilter, setCategoryFilter] = useState(searchParams.get('category') || 'All');

    const categories = ['All', 'Music', 'Technology', 'Sports', 'Art & Culture', 'Business', 'Food & Drink'];

    useEffect(() => {
        setTimeout(() => {
            setEvents(mockEvents);
            setLoading(false);
        }, 300);
    }, []);

    useEffect(() => {
        let result = [...events];
        if (searchQuery) {
            result = searchEvents(result, searchQuery);
        }
        result = filterByCategory(result, categoryFilter);
        setFilteredEvents(result);
    }, [events, searchQuery, categoryFilter]);

    const handleDelete = (eventId) => {
        toast.success('Event deleted successfully!', {
            icon: '🗑️',
            duration: 2000,
        });
        setEvents(events.filter(e => e.id !== eventId));
        setFilteredEvents(filteredEvents.filter(e => e.id !== eventId));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between animate-fadeIn">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Manage <span className="gradient-text">Events</span>
                    </h1>
                    <p className="text-slate-400 text-lg">
                        View, edit, and delete all events
                    </p>
                </div>
                <Link
                    to="/create-event"
                    className="btn-primary flex items-center gap-2"
                >
                    <Calendar className="w-5 h-5" />
                    Add New Event
                </Link>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 animate-fadeIn">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search events..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="input-field pl-12 pr-4"
                    />
                </div>
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="input-field w-full md:w-48"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* Events Table */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden animate-fadeIn">
                <div className="p-6 border-b border-slate-700/50">
                    <h2 className="text-2xl font-bold text-white">
                        All Events ({filteredEvents.length})
                    </h2>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full" />
                    </div>
                ) : filteredEvents.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700/50 text-slate-400 text-sm">
                                    <th className="text-left p-4 font-medium">Event</th>
                                    <th className="text-left p-4 font-medium">Category</th>
                                    <th className="text-left p-4 font-medium">Date</th>
                                    <th className="text-left p-4 font-medium">Location</th>
                                    <th className="text-left p-4 font-medium">Participants</th>
                                    <th className="text-left p-4 font-medium">Price</th>
                                    <th className="text-right p-4 font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredEvents.map((event, index) => (
                                    <tr
                                        key={event.id}
                                        className="border-b border-slate-700/30 hover:bg-slate-700/30 transition-colors animate-fadeIn"
                                        style={{ animationDelay: `${index * 30}ms` }}
                                    >
                                        <td className="p-4">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={event.image}
                                                    alt={event.title}
                                                    className="w-16 h-16 rounded-lg object-cover"
                                                />
                                                <div>
                                                    < p className="font-medium text-white">{event.title}</p>
                                                    <p className="text-sm text-slate-400 line-clamp-1">{event.organizer}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 bg-slate-700 text-teal-400 rounded-full text-sm">
                                                {event.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-slate-300">{formatDate(event.date)}</td>
                                        <td className="p-4 text-slate-300 line-clamp-1">{event.location}</td>
                                        <td className="p-4">
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <Users className="w-4 h-4 text-violet-400" />
                                                {formatNumber(event.attendees)}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="px-3 py-1 bg-gradient-to-r from-violet-500/20 to-blue-500/20 text-violet-400 rounded-lg text-sm font-semibold">
                                                {event.price}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    to={`/events/${event.id}`}
                                                    className="p-2 hover:bg-slate-600 rounded-lg transition-colors group"
                                                    title="View Details"
                                                >
                                                    <Eye className="w-4 h-4 text-slate-400 group-hover:text-white" />
                                                </Link>
                                                <Link
                                                    to={`/create-event?edit=${event.id}`}
                                                    className="p-2 hover:bg-slate-600 rounded-lg transition-colors group"
                                                    title="Edit Event"
                                                >
                                                    <Edit className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(event.id)}
                                                    className="p-2 hover:bg-slate-600 rounded-lg transition-colors group"
                                                    title="Delete Event"
                                                >
                                                    <Trash2 className="w-4 h-4 text-slate-400 group-hover:text-red-400" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <Calendar className="w-24 h-24 mx-auto mb-6 text-slate-600" />
                        <h3 className="text-2xl font-bold text-white mb-2">No Events Found</h3>
                        <p className="text-slate-400 mb-6">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
