import React, { useState } from 'react';
import { Complaint, ComplaintStatus } from '../types';
import StatusBadge from './StatusBadge';

interface ComplaintDetailModalProps {
  complaint: Complaint;
  onClose: () => void;
  onStatusUpdate: (complaintId: string, newStatus: ComplaintStatus) => void;
  t: (key: string) => string;
}

const ComplaintDetailModal: React.FC<ComplaintDetailModalProps> = ({ complaint, onClose, onStatusUpdate, t }) => {
  const [newStatus, setNewStatus] = useState<ComplaintStatus>(complaint.status);
  const mapUrl = `https://www.google.com/maps?q=${complaint.location.lat},${complaint.location.lng}&z=15&output=embed`;
    
  const handleUpdateClick = () => {
      onStatusUpdate(complaint.id, newStatus);
  };

  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center animate-fade-in"
        onClick={onClose}
    >
        <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto m-4 flex flex-col"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal
        >
            {complaint.imageUrl && (
                <img src={complaint.imageUrl} alt="Complaint visualization" className="w-full h-64 object-cover rounded-t-xl" />
            )}
            <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-sm text-slate-500">{complaint.id}</p>
                        <h2 className="text-2xl font-bold text-slate-800">{complaint.category}</h2>
                    </div>
                    <StatusBadge status={complaint.status} />
                </div>
                
                <p className="text-slate-700 mb-6">{complaint.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
                    <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="font-semibold text-slate-600">{t('submittedByLabel')}</p>
                        <p className="text-slate-800">{complaint.submittedBy}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                        <p className="font-semibold text-slate-600">{t('dateTimeLabel')}</p>
                        <p className="text-slate-800">{new Date(complaint.date).toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg col-span-1 sm:col-span-2">
                        <p className="font-semibold text-slate-600">{t('location')}</p>
                        <p className="text-slate-800">{complaint.location.address}</p>
                    </div>
                </div>

                <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                    <h3 className="text-md font-semibold text-slate-800 mb-3">{t('updateStatus')}</h3>
                    <div className="flex items-center gap-4">
                        <select 
                            value={newStatus}
                            onChange={(e) => setNewStatus(e.target.value as ComplaintStatus)}
                            className="flex-grow bg-white border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                        >
                            {Object.values(ComplaintStatus).map(status => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                        <button 
                            onClick={handleUpdateClick}
                            disabled={newStatus === complaint.status}
                            className="px-4 py-2.5 bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed"
                        >
                            Update
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('locationOnMap')}</h3>
                    <div className="aspect-video w-full border rounded-lg overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={mapUrl}>
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="p-4 bg-slate-50 border-t rounded-b-xl flex justify-end">
                <button
                    onClick={onClose}
                    className="px-5 py-2 bg-slate-600 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-75"
                >
                    {t('close')}
                </button>
            </div>
        </div>
    </div>
  );
};

export default ComplaintDetailModal;
