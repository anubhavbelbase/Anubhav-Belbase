import React from 'react';
import { Complaint, ComplaintStatus } from '../../types';
import { CHART_COLORS } from '../../constants';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ComplaintsByStatusChartProps {
  data: Complaint[];
}

const ComplaintsByStatusChart: React.FC<ComplaintsByStatusChartProps> = ({ data }) => {
  const statusCounts = data.reduce((acc, complaint) => {
    acc[complaint.status] = (acc[complaint.status] || 0) + 1;
    return acc;
  }, {} as { [key in ComplaintStatus]: number });

  const chartData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));
  const colors = [CHART_COLORS[0], CHART_COLORS[1], CHART_COLORS[2], CHART_COLORS[3]];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid #e2e8f0',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          }}
        />
        <Legend iconType="circle" />
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {chartData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ComplaintsByStatusChart;
