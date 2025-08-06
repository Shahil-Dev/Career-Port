import React, { useEffect } from 'react';
import { FaUsers, FaBriefcase, FaClipboardList } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dashboard = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white/30 max-w-6xl mx-auto backdrop-blur-md shadow-xl rounded-2xl p-10 border border-white/40">
            {/* Sidebar */}
            <aside className="w-full rounded-xl md:w-64 bg-white shadow-lg border-r border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">Dashboard</h2>
                <ul className="space-y-4 text-gray-700 font-medium">
                    <li className="hover:text-blue-600 cursor-pointer">Overview</li>
                    <li className="hover:text-blue-600 cursor-pointer">Manage Jobs</li>
                    <li className="hover:text-blue-600 cursor-pointer">Applications</li>
                    <li className="hover:text-blue-600 cursor-pointer">Users</li>
                    <li className="hover:text-blue-600 cursor-pointer">Settings</li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-10" data-aos="fade-up">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome Back!</h1>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Total Jobs */}
                    <div
                        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
                        data-aos="zoom-in"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-gray-700 text-sm font-semibold uppercase">Total Jobs</div>
                            <FaBriefcase className="text-blue-500 text-2xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">42</h2>
                    </div>

                    {/* Applications */}
                    <div
                        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-gray-700 text-sm font-semibold uppercase">Applications</div>
                            <FaClipboardList className="text-green-500 text-2xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">128</h2>
                    </div>

                    {/* Users */}
                    <div
                        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="text-gray-700 text-sm font-semibold uppercase">Users</div>
                            <FaUsers className="text-purple-500 text-2xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">87</h2>
                    </div>
                </div>

                {/* Future Section Placeholder */}
                <div className="mt-10 text-gray-500 text-sm">
                    More insights and actions will appear here...
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
