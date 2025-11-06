import React from 'react';
import type { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  t: (key: string) => string;
}

const NavItem: React.FC<{
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ icon, label, isActive, onClick }) => (
  <li>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`flex items-center p-3 my-1 text-base rounded-lg transition duration-75 group ${
        isActive
          ? 'bg-sky-600 text-white shadow-md'
          : 'text-slate-200 hover:bg-sky-800 hover:text-white'
      }`}
    >
      <i className={`w-6 h-6 text-center ${icon} ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}></i>
      <span className="ml-3">{label}</span>
    </a>
  </li>
);

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView, t }) => {
  const navItems = [
    { id: 'dashboard', label: t('dashboard'), icon: 'fa-solid fa-tachometer-alt' },
    { id: 'complaints', label: t('complaints'), icon: 'fa-solid fa-file-alt' },
    { id: 'analytics', label: t('analytics'), icon: 'fa-solid fa-chart-pie' },
    { id: 'users', label: t('users'), icon: 'fa-solid fa-users' },
    { id: 'settings', label: t('settings'), icon: 'fa-solid fa-cog' },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col" aria-label="Sidebar">
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <div className="flex items-center gap-3">
            <i className="fa-solid fa-city text-sky-500 text-2xl"></i>
            <h1 className="text-xl font-bold text-white">CivicConnect</h1>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-4 px-3">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={currentView === item.id}
              onClick={() => setCurrentView(item.id as ViewType)}
            />
          ))}
        </ul>
      </div>
       <div className="p-4 border-t border-slate-800">
        <p className="text-xs text-slate-500">&copy; 2024 CivicConnect Nepal</p>
      </div>
    </aside>
  );
};

export default Sidebar;
