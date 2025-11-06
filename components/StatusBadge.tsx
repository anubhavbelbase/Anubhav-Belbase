

import React from 'react';
// FIX: Corrected type import from 'ReportStatus' to 'ComplaintStatus' as per types.ts.
import { ComplaintStatus } from '../types';
import { STATUS_COLORS } from '../constants';

interface StatusBadgeProps {
  // FIX: Updated prop type to use the correct 'ComplaintStatus' type.
  status: ComplaintStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const colorClass = STATUS_COLORS[status] || 'bg-gray-100 text-gray-800';
  
  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClass}`}>
      {status}
    </span>
  );
};

export default StatusBadge;