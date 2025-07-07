import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlyPerformanceData, COLORS } from '../data/chartData';

const ComplexChart = () => {
  return (
    <div id="chart3" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-700 mb-1">Monthly Performance Analysis</h2>
      {/* The key message for this chart is part of the subtitle */}
      <div className="key-message">
        <p className="text-gray-500 mb-6">Sales Volume, Moving Average, and Market Share</p>
      </div>
      <div className="chart-capture-area">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={monthlyPerformanceData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" label={{ value: 'Sales Volume (Units)', angle: -90, position: 'insideLeft' }} />
            <YAxis yAxisId="right" orientation="right" label={{ value: 'Market Share (%)', angle: -90, position: 'insideRight' }} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="sales" name="Sales Volume" fill={COLORS.Brown} />
            <Line yAxisId="left" type="monotone" dataKey="movingAvg" name="3-Month Moving Avg" stroke={COLORS.orange} strokeWidth={2} />
            <Line yAxisId="right" type="monotone" dataKey="marketShare" name="Market Share (%)" stroke={COLORS.blue} strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComplexChart;
