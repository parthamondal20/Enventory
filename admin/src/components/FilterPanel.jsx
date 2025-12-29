import React from 'react';
import { Filter, X } from 'lucide-react';

const FilterPanel = ({
    onCategoryChange,
    onDateRangeChange,
    onLocationChange,
    onPriceChange,
    onClearFilters,
    activeFilters
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const categories = [
        'All', 'Music', 'Technology', 'Sports', 'Art & Culture',
        'Business', 'Food & Drink', 'Health & Wellness', 'Education', 'Networking'
    ];

    const priceOptions = [
        { value: '', label: 'All Prices' },
        { value: 'free', label: 'Free' },
        { value: 'paid', label: 'Paid' }
    ];

    const hasActiveFilters = () => {
        return activeFilters?.category !== 'All' ||
            activeFilters?.dateRange?.start ||
            activeFilters?.dateRange?.end ||
            activeFilters?.location ||
            activeFilters?.price;
    };

    return (
        <div className="mb-6">
            {/* Mobile Filter Toggle */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg hover:bg-slate-700/50 transition-colors mb-4"
            >
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-violet-400" />
                    <span className="font-medium text-white">Filters</span>
                    {hasActiveFilters() && (
                        <span className="px-2 py-0.5 bg-violet-500 text-white text-xs rounded-full">
                            Active
                        </span>
                    )}
                </div>
                <X className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-0' : 'rotate-45'}`} />
            </button>

            {/* Filter Panel */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 space-y-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Filter className="w-5 h-5 text-violet-400" />
                            Filters
                        </h3>
                        {hasActiveFilters() && (
                            <button
                                onClick={onClearFilters}
                                className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
                            >
                                Clear All
                            </button>
                        )}
                    </div>

                    {/* Category Filter */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                            Category
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => onCategoryChange(category)}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeFilters?.category === category
                                            ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white'
                                            : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Date Range Filter */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                            Date Range
                        </label>
                        <div className="space-y-2">
                            <input
                                type="date"
                                onChange={(e) => onDateRangeChange({ ...activeFilters?.dateRange, start: e.target.value })}
                                value={activeFilters?.dateRange?.start || ''}
                                className="input-field text-sm"
                                placeholder="Start Date"
                            />
                            <input
                                type="date"
                                onChange={(e) => onDateRangeChange({ ...activeFilters?.dateRange, end: e.target.value })}
                                value={activeFilters?.dateRange?.end || ''}
                                className="input-field text-sm"
                                placeholder="End Date"
                            />
                        </div>
                    </div>

                    {/* Location Filter */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                            Location
                        </label>
                        <input
                            type="text"
                            placeholder="Enter city or venue..."
                            value={activeFilters?.location || ''}
                            onChange={(e) => onLocationChange(e.target.value)}
                            className="input-field text-sm"
                        />
                    </div>

                    {/* Price Filter */}
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-3">
                            Price
                        </label>
                        <select
                            value={activeFilters?.price || ''}
                            onChange={(e) => onPriceChange(e.target.value)}
                            className="input-field text-sm"
                        >
                            {priceOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;
