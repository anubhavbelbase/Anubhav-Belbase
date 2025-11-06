import React from 'react';
import { Complaint, ComplaintCategory } from '../types';
// FIX: Corrected import path to match the filename 'ReportsTable.tsx'.
import ComplaintsTable from '../components/ReportsTable';

interface ComplaintsViewProps {
  complaints: Complaint[];
  onViewDetails: (complaint: Complaint) => void;
  onCategoryChange: (category: ComplaintCategory | 'all') => void;
  onExportCSV: () => void;
  selectedCategory: ComplaintCategory | 'all';
  t: (key: string) => string;
}

const ComplaintsView: React.FC<ComplaintsViewProps> = ({ complaints, onViewDetails, onCategoryChange, onExportCSV, selectedCategory, t }) => {
  return (
    <div className="p-4 md:p-8">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="text-xl font-bold text-slate-800">{t('allComplaints')} ({complaints.length})</h2>
            <div className="flex items-center gap-4 w-full md:w-auto">
                <select 
                  className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange(e.target.value as ComplaintCategory | 'all')}
                >
                    <option value="all">{t('allCategories')}</option>
                    {Object.values(ComplaintCategory).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <button 
                  onClick={onExportCSV}
                  className="px-4 py-2.5 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75 flex items-center gap-2"
                >
                    <i className="fa-solid fa-download"></i>
                    {t('export')}
                </button>
            </div>
        </div>
        <ComplaintsTable complaints={complaints} onViewDetails={onViewDetails} t={t} />
      </div>
    </div>
  );
};

export default ComplaintsView;