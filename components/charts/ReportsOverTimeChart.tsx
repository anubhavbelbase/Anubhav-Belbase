import React from 'react';
import { Complaint } from '../../types';
import { CHART_COLORS } from '../../constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format, parseISO, startOfMonth } from 'date-fns';

interface ComplaintsOverTimeChartProps {
  data: Complaint[];
}

const ComplaintsOverTimeChart: React.FC<ComplaintsOverTimeChartProps> = ({ data }) => {
  const complaintsByMonth = data.reduce((acc, complaint) => {
    const month = format(startOfMonth(parseISO(complaint.date)), 'MMM yyyy');
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month]++;
    return acc;
  }, {} as { [key: string]: number });

  const chartData = Object.entries(complaintsByMonth)
    .map(([month, count]) => ({ month, count }))
    .sort((a,b) => new Date(a.month).getTime() - new Date(b.month).getTime());

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis allowDecimals={false}/>
        <Tooltip 
             contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #e2e8f0',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            }}
        />
        <Legend />
        <Line type="monotone" dataKey="count" name="Complaints" stroke={CHART_COLORS[0]} strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ComplaintsOverTimeChart;
