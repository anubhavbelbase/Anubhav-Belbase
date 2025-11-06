import React from 'react';
import { Complaint } from '../types';
import StatusBadge from './StatusBadge';

interface ComplaintsTableProps {
  complaints: Complaint[];
  onViewDetails: (complaint: Complaint) => void;
  t: (key: string) => string;
}

const ComplaintsTable: React.FC<ComplaintsTableProps> = ({ complaints, onViewDetails, t }) => {
  return (
    <div className="overflow-x-auto relative border rounded-lg">
      <table className="w-full text-sm text-left text-slate-500">
        <thead className="text-xs text-slate-700 uppercase bg-slate-50">
          <tr>
            <th scope="col" className="px-6 py-3">{t('complaintId')}</th>
            <th scope="col" className="px-6 py-3">{t('category')}</th>
            <th scope="col" className="px-6 py-3">{t('description')}</th>
            <th scope="col" className="px-6 py-3">{t('submittedBy')}</th>
            <th scope="col" className="px-6 py-3">{t('date')}</th>
            <th scope="col" className="px-6 py-3">{t('status')}</th>
            <th scope="col" className="px-6 py-3">{t('action')}</th>
          </tr>
        </thead>
        <tbody>
          {complaints.length > 0 ? complaints.map((complaint) => (
            <tr key={complaint.id} className="bg-white border-b hover:bg-slate-50">
              <td className="px-6 py-4 font-medium text-slate-900">{complaint.id}</td>
              <td className="px-6 py-4">{complaint.category}</td>
              <td className="px-6 py-4 max-w-xs truncate" title={complaint.description}>{complaint.description}</td>
              <td className="px-6 py-4">{complaint.submittedBy}</td>
              <td className="px-6 py-4">{new Date(complaint.date).toLocaleString()}</td>
              <td className="px-6 py-4">
                <StatusBadge status={complaint.status} />
              </td>
              <td className="px-6 py-4">
                <button onClick={() => onViewDetails(complaint)} className="font-medium text-sky-600 hover:underline">{t('viewDetails')}</button>
              </td>
            </tr>
          )) : (
            <tr>
              <td colSpan={7} className="text-center py-10 text-slate-500">
                <i className="fa-solid fa-folder-open fa-2x mb-2"></i>
                <p>No complaints found.</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ComplaintsTable;
