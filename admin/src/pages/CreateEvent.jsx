import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Calendar, MapPin, Clock, DollarSign, Users, FileText, Tag, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { ButtonLoader } from '../components/Loader';

const CreateEvent = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        date: '',
        time: '',
        location: '',
        price: '',
        capacity: '',
        image: ''
    });

    const categories = [
        'Music', 'Technology', 'Sports', 'Art & Culture',
        'Business', 'Food & Drink', 'Health & Wellness', 'Education', 'Networking'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            toast.success('Event created successfully! 🎉', {
                duration: 3000,
                position: 'top-center',
            });
            setTimeout(() => {
                navigate('/my-events');
            }, 1000);
        }, 2000);
    };

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Create <span className="gradient-text">New Event</span>
                    </h1>
                    <p className="text-lg text-slate-400">
                        Fill in the details to create an amazing event
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Event Title */}
                    <div className="animate-fadeIn">
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-violet-400" />
                                Event Title *
                            </div>
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Enter event title..."
                            className="input-field"
                        />
                    </div>

                    {/* Description */}
                    <div className="animate-fadeIn" style={{ animationDelay: '50ms' }}>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4 text-blue-400" />
                                Description *
                            </div>
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Describe your event..."
                            className="input-field resize-none"
                        />
                    </div>

                    {/* Category & Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn" style={{ animationDelay: '100ms' }}>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                <div className="flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-teal-400" />
                                    Category *
                                </div>
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                className="input-field"
                            >
                                <option value="">Select category</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-4 h-4 text-yellow-400" />
                                    Price *
                                </div>
                            </label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                placeholder="e.g., $50 or Free"
                                className="input-field"
                            />
                        </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn" style={{ animationDelay: '150ms' }}>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-violet-400" />
                                    Date *
                                </div>
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-400" />
                                    Time *
                                </div>
                            </label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-teal-400" />
                                Location *
                            </div>
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            placeholder="Enter event location..."
                            className="input-field"
                        />
                    </div>

                    {/* Capacity */}
                    <div className="animate-fadeIn" style={{ animationDelay: '250ms' }}>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-emerald-400" />
                                Expected Attendees
                            </div>
                        </label>
                        <input
                            type="number"
                            name="capacity"
                            value={formData.capacity}
                            onChange={handleChange}
                            placeholder="e.g., 100"
                            className="input-field"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="animate-fadeIn" style={{ animationDelay: '300ms' }}>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            <div className="flex items-center gap-2">
                                <ImageIcon className="w-4 h-4 text-pink-400" />
                                Event Image URL
                            </div>
                        </label>
                        <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/image.jpg"
                            className="input-field"
                        />
                        <p className="text-xs text-slate-500 mt-1">
                            Provide a URL to an image for your event
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 animate-fadeIn" style={{ animationDelay: '350ms' }}>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <ButtonLoader />
                            ) : (
                                <>
                                    Create Event
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;
