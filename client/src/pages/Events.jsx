import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { mockEvents } from '../data/mockData';
import { searchEvents, filterByCategory } from '../utils/utils';
import { Search, SlidersHorizontal } from 'lucide-react';

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
        }, 500);
    }, []);

    useEffect(() => {
        let result = [...events];
        if (searchQuery) {
            result = searchEvents(result, searchQuery);
        }
        result = filterByCategory(result, categoryFilter);
        setFilteredEvents(result);
    }, [events, searchQuery, categoryFilter]);

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Discover <span className="gradient-text">Events</span>
                    </h1>
                    <p className="text-lg text-slate-400">
                        Find events that match your interests and passions
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 animate-fadeIn">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="input-field pl-12 text-lg"
                        />
                    </div>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="input-field w-full md:w-64"
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Results Info */}
                <div className="flex items-center justify-between mb-6 animate-fadeIn">
                    <p className="text-slate-400">
                        {loading ? 'Loading events...' : (
                            <>
                                <span className="text-white font-semibold">{filteredEvents.length}</span> events found
                            </>
                        )}
                    </p>
                </div>

                {/* Events Grid */}
                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <div className="animate-spin w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full" />
                    </div>
                ) : filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.map((event) => (
                            <EventCard key={event.id} event={event} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 animate-fadeIn">
                        <SlidersHorizontal className="w-24 h-24 mx-auto mb-6 text-slate-600" />
                        <h3 className="text-2xl font-bold text-white mb-2">No Events Found</h3>
                        <p className="text-slate-400 mb-6">Try adjusting your search or filters</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
