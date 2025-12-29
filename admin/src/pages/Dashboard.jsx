import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, TrendingUp, Tag, Eye, Edit, Trash2 } from 'lucide-react';
import StatCard from '../components/StatCard';
import { mockEvents, getDashboardStats } from '../data/mockData';
import { formatDate, formatNumber } from '../utils/utils';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [recentEvents, setRecentEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setStats(getDashboardStats());
            setRecentEvents(mockEvents.slice(0, 5));
            setLoading(false);
        }, 300);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-96">
                <div className="animate-spin w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full" />
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="animate-fadeIn">
                <h1 className="text-4xl font-bold text-white mb-2">
                    Welcome to <span className="gradient-text">Admin Dashboard</span>
                </h1>
                <p className="text-slate-400 text-lg">
                    Manage your events, participants, and track analytics
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Events"
                    value={stats.totalEvents}
                    icon={Calendar}
                    color="from-violet-500 to-blue-500"
                    trend="up"
                    trendValue="+12% from last month"
                />
                <StatCard
                    title="Total Participants"
                    value={formatNumber(stats.totalParticipants)}
                    icon={Users}
                    color="from-blue-500 to-cyan-500"
                    trend="up"
                    trendValue="+8% from last month"
                />
                <StatCard
                    title="Upcoming Events"
                    value={stats.upcomingEvents}
                    icon={TrendingUp}
                    color="from-teal-500 to-emerald-500"
                />
                <StatCard
                    title="Categories"
                    value={stats.categories}
                    icon={Tag}
                    color="from-yellow-500 to-orange-500"
                />
            </div>

            {/* Recent Events Table */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden animate-fadeIn">
                <div className="p-6 border-b border-slate-700/50 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">Recent Events</h2>
                    <Link
                        to="/events"
                        className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
                    >
                        View All →
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-slate-700/50 text-slate-400 text-sm">
                                <th className="text-left p-4 font-medium">Event Name</th>
                                <th className="text-left p-4 font-medium">Category</th>
                                <th className="text-left p-4 font-medium">Date</th>
                                <th className="text-left p-4 font-medium">Participants</th>
                                <th className="text-left p-4 font-medium">Status</th>
                                <th className="text-right p-4 font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentEvents.map((event, index) => (
                                <tr
                                    key={event.id}
                                    className="border-b border-slate-700/30 hover:bg-slate-700/30 transition-colors animate-fadeIn"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-12 h-12 rounded-lg object-cover"
                                            />
                                            <div>
                                                <p className="font-medium text-white">{event.title}</p>
                                                <p className="text-sm text-slate-400">{event.location}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 bg-slate-700 text-teal-400 rounded-full text-sm">
                                            {event.category}
                                        </span>
                                    </td>
                                    <td className="p-4 text-slate-300">
                                        {formatDate(event.date)}
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2 text-slate-300">
                                            <Users className="w-4 h-4 text-violet-400" />
                                            {formatNumber(event.attendees)}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-sm ${event.status === 'upcoming'
                                                ? 'bg-emerald-500/20 text-emerald-400'
                                                : 'bg-slate-700 text-slate-400'
                                            }`}>
                                            {event.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                to={`/events/${event.id}`}
                                                className="p-2 hover:bg-slate-600 rounded-lg transition-colors group"
                                                title="View"
                                            >
                                                <Eye className="w-4 h-4 text-slate-400 group-hover:text-white" />
                                            </Link>
                                            <Link
                                                to={`/create-event?edit=${event.id}`}
                                                className="p-2 hover:bg-slate-600 rounded-lg transition-colors group"
                                                title="Edit"
                                            >
                                                <Edit className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                                            </Link>
                                            <button
                                                onClick={() => console.log('Delete', event.id)}
                                                className="p-2 hover:bg-slate-600 rounded-lg transition-colors group"
                                                title="Delete"
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
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link
                    to="/create-event"
                    className="p-6 bg-gradient-to-br from-violet-500 to-blue-500 rounded-xl hover:scale-105 transition-transform duration-300 animate-fadeIn"
                >
                    <Calendar className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Create New Event</h3>
                    <p className="text-violet-100">Add a new event to your platform</p>
                </Link>

                <Link
                    to="/participants"
                    className="p-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl hover:scale-105 transition-transform duration-300 animate-fadeIn"
                    style={{ animationDelay: '100ms' }}
                >
                    <Users className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">View Participants</h3>
                    <p className="text-teal-100">Manage all event participants</p>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
