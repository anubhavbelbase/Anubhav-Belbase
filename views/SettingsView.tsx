
import React from 'react';

const SettingsView: React.FC = () => {
    return (
        <div className="p-4 md:p-8 space-y-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-800">Settings</h1>

            {/* Profile Settings */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 border-b pb-4 mb-6">Profile Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-1 flex flex-col items-center">
                        <img src="https://picsum.photos/seed/admin/100/100" alt="Admin User" className="w-24 h-24 rounded-full mb-2" />
                        <button className="text-sm text-sky-600 hover:underline">Change Picture</button>
                    </div>
                    <div className="md:col-span-2 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                            <input type="text" defaultValue="Administrator" className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                            <input type="email" defaultValue="administrator@civic.gov.np" className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" />
                        </div>
                         <button className="px-4 py-2 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500">Save Changes</button>
                    </div>
                </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="text-xl font-semibold text-slate-800 border-b pb-4 mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="new-report-toggle" className="font-medium text-slate-700">New report submitted</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" id="new-report-toggle" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                        </label>
                    </div>
                    <div className="flex justify-between items-center">
                         <label htmlFor="status-update-toggle" className="font-medium text-slate-700">Report status changed</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" id="status-update-toggle" className="sr-only peer" defaultChecked/>
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                        </label>
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="weekly-summary-toggle" className="font-medium text-slate-700">Weekly summary email</label>
                         <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" id="weekly-summary-toggle" className="sr-only peer" />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                        </label>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SettingsView;