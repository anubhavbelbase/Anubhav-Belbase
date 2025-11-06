import React from 'react';
import { Complaint } from '../types';
// FIX: Corrected import path to match the filename 'ReportsOverTimeChart.tsx'.
import ComplaintsOverTimeChart from '../components/charts/ReportsOverTimeChart';
// FIX: Corrected import path to match the filename 'ReportsByCategoryChart.tsx'.
import ComplaintsByCategoryChart from '../components/charts/ReportsByCategoryChart';
// FIX: Corrected import path to match the filename 'ReportsByStatusChart.tsx'.
import ComplaintsByStatusChart from '../components/charts/ReportsByStatusChart';

interface AnalyticsViewProps {
    complaints: Complaint[];
}

const AnalyticsView: React.FC<AnalyticsViewProps> = ({ complaints }) => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <h1 className="text-3xl font-bold text-slate-800">Advanced Analytics</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Complaints Over Time</h3>
        <div className="h-96">
          <ComplaintsOverTimeChart data={complaints} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Complaints by Status</h3>
          <ComplaintsByStatusChart data={complaints} />
        </div>
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Complaints by Category</h3>
          <ComplaintsByCategoryChart data={complaints} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;