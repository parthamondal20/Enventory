import React from 'react';

const SkeletonLoader = ({ type = 'card', count = 1 }) => {
    if (type === 'card') {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 animate-fadeIn"
                    >
                        {/* Image Skeleton */}
                        <div className="relative h-52 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 shimmer" />

                        {/* Content Skeleton */}
                        <div className="p-6 space-y-4">
                            {/* Category & Date */}
                            <div className="flex items-center justify-between">
                                <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full shimmer w-24" />
                                <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-20" />
                            </div>

                            {/* Title */}
                            <div className="space-y-2">
                                <div className="h-7 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-full" />
                                <div className="h-7 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-3/4" />
                            </div>

                            {/* Location */}
                            <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-2/3" />

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4">
                                <div className="h-8 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full shimmer w-24" />
                                <div className="h-10 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg shimmer w-28" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (type === 'detail') {
        return (
            <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
                {/* Image Skeleton */}
                <div className="h-96 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-2xl shimmer" />

                {/* Content */}
                <div className="space-y-6">
                    <div className="h-10 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-3/4" />
                    <div className="flex gap-4">
                        <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full shimmer w-32" />
                        <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-full shimmer w-32" />
                    </div>
                    <div className="space-y-3">
                        <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-full" />
                        <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-full" />
                        <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-4/5" />
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'list') {
        return (
            <div className="space-y-4">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className="flex gap-4 bg-slate-800/50 rounded-lg p-4 border border-slate-700/50"
                    >
                        <div className="h-24 w-32 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-lg shimmer flex-shrink-0" />
                        <div className="flex-1 space-y-3">
                            <div className="h-6 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-3/4" />
                            <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-1/2" />
                            <div className="h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded shimmer w-2/3" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return null;
};

export default SkeletonLoader;
