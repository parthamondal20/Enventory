import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, Plus, Menu, X, LogOut, Search } from 'lucide-react';

const AdminLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

    const navigation = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'All Events', href: '/events', icon: Calendar },
        { name: 'Add Event', href: '/create-event', icon: Plus },
        { name: 'Participants', href: '/participants', icon: Users },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-slate-900 flex">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 bg-slate-800 border-r border-slate-700 transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'
                }`}>
                {/* Logo & Toggle */}
                <div className="flex items-center justify-between p-4 border-b border-slate-700">
                    <Link to="/" className={`flex items-center gap-2 ${!sidebarOpen && 'justify-center'}`}>
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-white" />
                        </div>
                        {sidebarOpen && (
                            <span className="text-xl font-bold gradient-text">Eventory</span>
                        )}
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className={`p-2 hover:bg-slate-700 rounded-lg transition-colors ${!sidebarOpen && 'hidden'}`}
                    >
                        <X className="w-5 h-5 text-slate-400" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${isActive(item.href)
                                    ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white'
                                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                }`}
                            title={!sidebarOpen ? item.name : ''}
                        >
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            {sidebarOpen && <span className="font-medium">{item.name}</span>}
                        </Link>
                    ))}
                </nav>

                {/* Admin Profile */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
                    <div className={`flex items-center gap-3 ${!sidebarOpen && 'justify-center'}`}>
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white   font-bold">A</span>
                        </div>
                        {sidebarOpen && (
                            <div className="flex-1">
                                <p className="text-sm font-medium text-white">Admin</p>
                                <p className="text-xs text-slate-400">admin@eventory.com</p>
                            </div>
                        )}
                    </div>
                    {sidebarOpen && (
                        <Link
                            to="/signin"
                            className="mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-all duration-300"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="text-sm">Logout</span>
                        </Link>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
                {/* Header */}
                <header className="sticky top-0 z-40 bg-slate-800/80 backdrop-blur-sm border-b border-slate-700">
                    <div className="flex items-center justify-between px-6 py-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 hover:bg-slate-700 rounded-lg transition-colors lg:hidden"
                        >
                            <Menu className="w-6 h-6 text-white" />
                        </button>

                        <div className="flex items-center gap-4 ml-auto">
                            <div className="relative hidden md:block">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                                />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default AdminLayout;
