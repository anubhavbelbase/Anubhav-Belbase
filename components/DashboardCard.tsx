

import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string;
  icon: string;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between hover:shadow-lg transition-shadow">
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-3xl font-bold text-slate-800">{value}</p>
      </div>
      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl ${color}`}>
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default DashboardCard;