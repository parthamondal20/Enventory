import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllParticipants, getParticipantsByEventId, mockEvents } from '../data/mockData';
import { Mail, User, Calendar, Filter } from 'lucide-react';

const Participants = () => {
    const [selectedEvent, setSelectedEvent] = useState('all');
    const allParticipants = getAllParticipants();

    // Filter participants based on selected event
    const filteredParticipants = selectedEvent === 'all'
        ? allParticipants
        : getParticipantsByEventId(selectedEvent).map(p => ({
            ...p,
            eventName: mockEvents.find(e => e.id === parseInt(selectedEvent))?.title || 'Unknown Event'
        }));

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="animate-fadeIn">
                <h1 className="text-4xl font-bold text-white mb-2">
                    All <span className="gradient-text">Participants</span>
                </h1>
                <p className="text-slate-400 text-lg">
                    View and manage event participants
                </p>
            </div>

            {/* Event Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-2 text-slate-300">
                        <Filter className="w-5 h-5 text-violet-400" />
                        <span className="font-medium">Filter by Event:</span>
                    </div>
                    <select
                        value={selectedEvent}
                        onChange={(e) => setSelectedEvent(e.target.value)}
                        className="input-field w-full md:w-96"
                    >
                        <option value="all">All Events ({allParticipants.length} participants)</option>
                        {mockEvents.map((event) => {
                            const eventParticipants = getParticipantsByEventId(event.id);
                            return (
                                <option key={event.id} value={event.id}>
                                    {event.title} ({eventParticipants.length} participants)
                                </option>
                            );
                        })}
                    </select>
                </div>

                {selectedEvent !== 'all' && (
                    <Link
                        to={`/events/${selectedEvent}`}
                        className="text-violet-400 hover:text-violet-300 font-medium transition-colors text-sm"
                    >
                        View Event Details →
                    </Link>
                )}
            </div>

            {/* Participants Table */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden animate-fadeIn">
                <div className="p-6 border-b border-slate-700/50">
                    <h2 className="text-2xl font-bold text-white">
                        {selectedEvent === 'all' ? 'All Participants' : 'Event Participants'}
                    </h2>
                    <p className="text-slate-400 mt-1">
                        {filteredParticipants.length} participant{filteredParticipants.length !== 1 ? 's' : ''}
                        {selectedEvent !== 'all' && ' for this event'}
                    </p>
                </div>

                {filteredParticipants.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700/50 text-slate-400 text-sm">
                                    <th className="text-left p-4 font-medium">Name</th>
                                    <th className="text-left p-4 font-medium">Email</th>
                                    <th className="text-left p-4 font-medium">Phone</th>
                                    {selectedEvent === 'all' && (
                                        <th className="text-left p-4 font-medium">Event</th>
                                    )}
                                    <th className="text-left p-4 font-medium">Registration Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredParticipants.map((participant, index) => (
                                    <tr
                                        key={participant.id}
                                        className="border-b border-slate-700/30 hover:bg-slate-700/30 transition-colors animate-fadeIn"
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
                                        {selectedEvent === 'all' && (
                                            <td className="p-4">
                                                <Link
                                                    to={`/events/${participant.eventId}`}
                                                    className="text-violet-400 hover:text-violet-300 transition-colors"
                                                >
                                                    {participant.eventName}
                                                </Link>
                                            </td>
                                        )}
                                        <td className="p-4">
                                            <div className="flex items-center gap-2 text-slate-300">
                                                <Calendar className="w-4 h-4 text-slate-400" />
                                                {new Date(participant.registrationDate).toLocaleDateString()}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <User className="w-24 h-24 mx-auto mb-6 text-slate-600" />
                        <h3 className="text-2xl font-bold text-white mb-2">No Participants</h3>
                        <p className="text-slate-400">No participants found for this event.</p>
                    </div>
                )}
            </div>

            {/* Summary Cards */}
            {selectedEvent === 'all' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                    <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Total Participants</p>
                                <p className="text-2xl font-bold text-white">{allParticipants.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Total Events</p>
                                <p className="text-2xl font-bold text-white">{mockEvents.length}</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-400">Avg per Event</p>
                                <p className="text-2xl font-bold text-white">
                                    {Math.round(allParticipants.length / mockEvents.length)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Participants;
