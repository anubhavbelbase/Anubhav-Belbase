import React from 'react';
import { Complaint, ComplaintCategory } from '../../types';
import { CHART_COLORS } from '../../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ComplaintsByCategoryChartProps {
  data: Complaint[];
}

const ComplaintsByCategoryChart: React.FC<ComplaintsByCategoryChartProps> = ({ data }) => {
  const categoryCounts = data.reduce((acc, complaint) => {
    acc[complaint.category] = (acc[complaint.category] || 0) + 1;
    return acc;
  }, {} as { [key in ComplaintCategory]: number });

  const chartData = Object.entries(categoryCounts).map(([name, value]) => ({ name, complaints: value }));

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} angle={-20} textAnchor="end" height={60} />
        <YAxis allowDecimals={false} />
        <Tooltip
          cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }}
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #e2e8f0',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          }}
        />
        <Bar dataKey="complaints" fill={CHART_COLORS[0]} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ComplaintsByCategoryChart;
