import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Tag } from 'lucide-react';
import { formatDate, formatTime, formatNumber } from '../utils/utils';

const EventCard = ({ event, featured = false }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/events/${event.id}`);
    };

    return (
        <div
            onClick={handleClick}
            className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 cursor-pointer card-hover animate-fadeIn ${featured ? 'ring-2 ring-violet-500/50' : ''
                }`}
        >
            {/* Featured Badge */}
            {featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-violet-500 to-blue-500 text-white text-xs font-semibold rounded-full">
                    Featured
                </div>
            )}

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3 text-teal-400" />
                    <span className="text-xs font-medium text-teal-400">{event.category}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-blue-400 transition-all duration-300">
                    {event.title}
                </h3>

                {/* Date & Time */}
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-2">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    <span>{formatDate(event.date)} at {formatTime(event.time)}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="line-clamp-1">{event.location}</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    {/* Attendees */}
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 border-2 border-slate-800 flex items-center justify-center"
                                >
                                    <Users className="w-4 h-4 text-white" />
                                </div>
                            ))}
                        </div>
                        <span className="text-sm text-slate-400">
                            {formatNumber(event.attendees)} attending
                        </span>
                    </div>

                    {/* Price */}
                    <div className="px-4 py-2 bg-gradient-to-r from-violet-500/10 to-blue-500/10 border border-violet-500/20 rounded-lg">
                        <span className="text-sm font-semibold gradient-text">
                            {event.price}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
