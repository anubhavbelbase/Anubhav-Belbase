import React, { useState, useRef, useEffect } from 'react';
import type { ViewType } from '../types';

interface HeaderProps {
    currentView: ViewType;
    onSearchChange: (term: string) => void;
    setCurrentView: (view: ViewType) => void;
    language: 'en' | 'ne';
    setLanguage: (lang: 'en' | 'ne') => void;
    onLogout: () => void;
    t: (key: string) => string;
}

const Header: React.FC<HeaderProps> = ({ currentView, onSearchChange, setCurrentView, language, setLanguage, onLogout, t }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'ne' : 'en');
  };

  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-20 shadow-sm relative">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-slate-800 capitalize">{t(currentView)}</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative">
          <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
          <input
            type="text"
            placeholder="Search complaints..."
            className="pl-10 pr-4 py-2 w-64 bg-slate-100 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <button 
            onClick={handleLanguageToggle}
            className="flex items-center gap-2 text-slate-500 hover:text-sky-600 font-semibold"
        >
            <i className="fa-solid fa-globe"></i>
            <span>{language === 'en' ? 'नेपाली' : 'English'}</span>
        </button>

        <div ref={notificationsRef} className="relative">
            <button onClick={() => setNotificationsOpen(prev => !prev)} className="relative text-slate-500 hover:text-sky-600">
                <i className="fa-solid fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            </button>
            {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden">
                    <div className="p-3 border-b">
                        <h3 className="font-semibold text-slate-700">Notifications</h3>
                    </div>
                    <ul className="py-2 max-h-80 overflow-y-auto">
                        <li className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 flex items-start gap-3">
                            <i className="fa-solid fa-flag text-blue-500 mt-1"></i>
                            <div><span className="font-semibold">New Complaint:</span> CCN-007 (Missing manhole cover) was submitted.</div>
                        </li>
                         <li className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 flex items-start gap-3">
                            <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                            <div><span className="font-semibold">Resolved:</span> Complaint CCN-003 (Streetlight) status updated.</div>
                        </li>
                         <li className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 flex items-start gap-3">
                           <i className="fa-solid fa-person-digging text-orange-500 mt-1"></i>
                            <div><span className="font-semibold">In Progress:</span> CCN-002 (Pothole) is now being addressed.</div>
                        </li>
                    </ul>
                     <a href="#" className="block bg-slate-50 text-center py-2 text-sm font-medium text-sky-600 hover:bg-slate-100">View all notifications</a>
                </div>
            )}
        </div>

        <div ref={profileRef} className="relative">
            <button onClick={() => setProfileOpen(prev => !prev)} className="flex items-center gap-3">
            <img
                src="https://picsum.photos/seed/admin/40/40"
                alt="Admin User"
                className="w-10 h-10 rounded-full"
            />
            <div>
                <p className="font-semibold text-slate-700 text-left">Admin</p>
                <p className="text-xs text-slate-500">administrator@civic.gov.np</p>
            </div>
            <i className={`fa-solid fa-chevron-down text-xs text-slate-500 transition-transform ${profileOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl border border-slate-200 py-1">
                    <a href="#" onClick={(e) => { e.preventDefault(); setCurrentView('settings'); setProfileOpen(false); }} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"><i className="fa-solid fa-user-cog w-6 text-slate-500"></i>Profile Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"><i className="fa-solid fa-life-ring w-6 text-slate-500"></i>Support</a>
                    <div className="my-1 border-t border-slate-200"></div>
                    <a href="#" onClick={(e) => {e.preventDefault(); onLogout();}} className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"><i className="fa-solid fa-sign-out-alt w-6 text-red-500"></i>Logout</a>
                </div>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;