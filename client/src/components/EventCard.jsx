import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, DollarSign } from 'lucide-react';
import { formatDate } from '../utils/utils';
import toast from 'react-hot-toast';

const EventCard = ({ event }) => {
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRSVP = (e) => {
        e.preventDefault();
        e.stopPropagation();

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

    return (
        <Link
            to={`/events/${event.id}`}
            className="group block bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:scale-105 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10"
        >
            {/* Event Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-teal-500/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-white">{event.category}</span>
                </div>

                {/* Price Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg">
                    <span className="text-sm font-bold text-white">{event.price}</span>
                </div>
            </div>

            {/* Event Info */}
            <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-violet-400 transition-colors">
                    {event.title}
                </h3>

                <p className="text-sm text-slate-400 line-clamp-2">
                    {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Calendar className="w-4 h-4 text-violet-400" />
                        {formatDate(event.date)} at {event.time}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-300">
                        <MapPin className="w-4 h-4 text-violet-400" />
                        <span className="line-clamp-1">{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-300">
                        <Users className="w-4 h-4 text-violet-400" />
                        {event.attendees} Attendees
                    </div>
                </div>

                {/* RSVP Button */}
                <button
                    onClick={handleRSVP}
                    className={`w-full py-2.5 rounded-lg font-medium transition-all duration-300 ${isRegistered
                            ? 'bg-green-500 hover:bg-green-600 text-white'
                            : 'bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white'
                        }`}
                >
                    {isRegistered ? '✓ Registered' : 'RSVP Now'}
                </button>
            </div>
        </Link>
    );
};

export default EventCard;
