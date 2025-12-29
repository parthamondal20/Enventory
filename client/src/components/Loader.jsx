import React from 'react';

// Spinner Loader
export const Spinner = ({ size = 'md', color = 'primary' }) => {
    const sizes = {
        sm: 'w-6 h-6 border-2',
        md: 'w-12 h-12 border-3',
        lg: 'w-16 h-16 border-4',
        xl: 'w-24 h-24 border-4'
    };

    const colors = {
        primary: 'border-t-violet-500 border-r-blue-500',
        secondary: 'border-t-teal-500 border-r-cyan-500',
        white: 'border-t-white border-r-gray-300'
    };

    return (
        <div className="flex items-center justify-center">
            <div className={`${sizes[size]} ${colors[color]} border-transparent rounded-full`}
                style={{ animation: 'spin 1s linear infinite' }} />
        </div>
    );
};

// Dots Loader
export const DotsLoader = ({ size = 'md', color = 'primary' }) => {
    const sizes = {
        sm: 'w-2 h-2',
        md: 'w-3 h-3',
        lg: 'w-4 h-4'
    };

    const colors = {
        primary: 'bg-gradient-to-r from-violet-500 to-blue-500',
        secondary: 'bg-gradient-to-r from-teal-500 to-cyan-500',
        white: 'bg-white'
    };

    return (
        <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map((index) => (
                <div
                    key={index}
                    className={`${sizes[size]} ${colors[color]} rounded-full`}
                    style={{
                        animation: 'bounce 1.4s ease-in-out infinite',
                        animationDelay: `${index * 0.16}s`
                    }}
                />
            ))}
        </div>
    );
};

// Pulse Loader
export const PulseLoader = ({ size = 'md', color = 'primary' }) => {
    const sizes = {
        sm: 'w-12 h-12',
        md: 'w-20 h-20',
        lg: 'w-32 h-32'
    };

    const colors = {
        primary: 'bg-gradient-to-br from-violet-500 to-blue-500',
        secondary: 'bg-gradient-to-br from-teal-500 to-cyan-500',
        white: 'bg-white'
    };

    return (
        <div className="flex items-center justify-center">
            <div
                className={`${sizes[size]} ${colors[color]} rounded-full opacity-75`}
                style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
            />
        </div>
    );
};

// Full Page Loader
export const PageLoader = ({ message = 'Loading...' }) => {
    return (
        <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center z-50">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full opacity-20 blur-xl"
                    style={{ animation: 'pulse 2s ease-in-out infinite' }} />
                <Spinner size="xl" color="primary" />
            </div>
            <p className="mt-8 text-lg font-medium gradient-text">{message}</p>
        </div>
    );
};

// Button Loader (for loading states on buttons)
export const ButtonLoader = () => {
    return (
        <div className="inline-flex items-center gap-2">
            <Spinner size="sm" color="white" />
            <span>Loading...</span>
        </div>
    );
};

// Card Loader
export const CardLoader = ({ count = 1 }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className="bg-slate-800 rounded-xl overflow-hidden">
                    <div className="h-48 bg-slate-700 shimmer" />
                    <div className="p-6 space-y-4">
                        <div className="h-6 bg-slate-700 rounded shimmer w-3/4" />
                        <div className="h-4 bg-slate-700 rounded shimmer w-1/2" />
                        <div className="h-4 bg-slate-700 rounded shimmer w-full" />
                        <div className="flex gap-2 mt-4">
                            <div className="h-8 bg-slate-700 rounded shimmer w-20" />
                            <div className="h-8 bg-slate-700 rounded shimmer w-20" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Spinner;
