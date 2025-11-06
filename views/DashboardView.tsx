import React from 'react';
import { Complaint, ComplaintStatus } from '../types';
import DashboardCard from '../components/DashboardCard';
// FIX: Corrected import path to match the filename 'ReportsByStatusChart.tsx'.
import ComplaintsByStatusChart from '../components/charts/ReportsByStatusChart';
// FIX: Corrected import path to match the filename 'ReportsByCategoryChart.tsx'.
import ComplaintsByCategoryChart from '../components/charts/ReportsByCategoryChart';
// FIX: Corrected import path to match the filename 'RecentReports.tsx'.
import RecentComplaints from '../components/RecentReports';

interface DashboardViewProps {
  complaints: Complaint[];
  onViewDetails: (complaint: Complaint) => void;
  t: (key: string) => string;
}

const DashboardView: React.FC<DashboardViewProps> = ({ complaints, onViewDetails, t }) => {
  const totalComplaints = complaints.length;
  const pendingComplaints = complaints.filter(c => c.status === ComplaintStatus.New || c.status === ComplaintStatus.InProgress).length;
  const resolvedComplaints = complaints.filter(c => c.status === ComplaintStatus.Resolved).length;
  const newComplaints = complaints.filter(c => c.status === ComplaintStatus.New).length;
  
  const recentComplaints = [...complaints].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

  return (
    <div className="p-4 md:p-8 space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title={t('totalComplaints')} value={totalComplaints.toString()} icon="fa-solid fa-bullhorn" color="bg-sky-600" />
        <DashboardCard title={t('pendingComplaints')} value={pendingComplaints.toString()} icon="fa-solid fa-person-digging" color="bg-orange-500" />
        <DashboardCard title={t('resolvedComplaints')} value={resolvedComplaints.toString()} icon="fa-solid fa-check-circle" color="bg-green-500" />
        <DashboardCard title={t('newComplaints')} value={newComplaints.toString()} icon="fa-solid fa-flag" color="bg-blue-500" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">{t('complaintsByStatus')}</h3>
          <ComplaintsByStatusChart data={complaints} />
        </div>
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">{t('complaintsByCategory')}</h3>
          <ComplaintsByCategoryChart data={complaints} />
        </div>
      </div>
      
      {/* Recent Complaints Table */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">{t('recentComplaints')}</h3>
        <RecentComplaints complaints={recentComplaints} onViewDetails={onViewDetails} t={t} />
      </div>
    </div>
  );
};

export default DashboardView;