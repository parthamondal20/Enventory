import React from 'react';

const StatCard = ({ title, value, icon: Icon, color, trend, trendValue }) => {
    return (
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 animate-fadeIn">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-slate-400 mb-1">{title}</p>
                    <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
                    {trend && (
                        <p className={`text-sm flex items-center gap-1 ${trend === 'up' ? 'text-green-400' : 'text-red-400'
                            }`}>
                            {trend === 'up' ? '↑' : '↓'} {trendValue}
                        </p>
                    )}
                </div>
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center bg-gradient-to-br ${color}`}>
                    <Icon className="w-7 h-7 text-white" />
                </div>
            </div>
        </div>
    );
};

export default StatCard;
