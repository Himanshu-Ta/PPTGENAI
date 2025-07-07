import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Text } from 'recharts';
import { imbVolumeData, imbVolumeShareData, summaryData2, COLORS } from '../data/chartData';
import SummaryTable from './SummaryTable';

const TotalLabel = (props) => {
    const { x, y, value } = props;
    return (
        <Text x={x} y={y} dy={-10} fill={COLORS.darkText} fontSize={12} textAnchor="middle">
            {value.toFixed(2)}
        </Text>
    );
};

const IMBCategoryVolumeShare = () => {
    const RightSideSummaryTable = () => {
        const data = summaryData2.filter(r => r.category !== 'TOTAL');
        const headers = ['FY24-30', 'SOM Change (bps)'];
        return (
             <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase">
                    <tr>
                        {headers.map((header, index) => (
                             <th key={header} scope="col" className={`px-4 py-2 text-center text-white ${index === 0 ? 'bg-orange-500' : 'bg-gray-500'}`}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} className="bg-white border-b">
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{row.category}</td>
                            <td className={`px-4 py-2 text-center ${parseFloat(row.somChange) < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                {row.somChange}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div id="chart2" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-700 mb-1">IMB Category Volume & Share</h2>
            <div className="key-message border rounded-md p-4 mb-6">
                <p className="text-gray-600">[Type key message]</p>
            </div>
            <div className="chart-capture-area">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Side: Bar Chart & Table */}
                    <div>
                        <h3 className="text-center font-semibold text-gray-600 mb-4">IMB Volumes, bn SE</h3>
                         <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={imbVolumeData} margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis hide={true} domain={[0, 'dataMax + 2']} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(240, 240, 240, 0.5)' }}
                                    formatter={(value, name) => [`${value.toFixed(2)} bn`, name.charAt(0).toUpperCase() + name.slice(1)]}
                                />
                                 <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar dataKey="category1" stackId="a" fill={COLORS.orange} name="Category 1" label={<TotalLabel />} />
                                <Bar dataKey="category2" stackId="a" fill={COLORS.Brown} name="Category 2" />
                            </BarChart>
                        </ResponsiveContainer>
                        <div className="mt-6">
                           <SummaryTable data={summaryData2} headers={['FY24-30', 'CAGR (%)', 'SOM Change (bps)']} />
                        </div>
                    </div>

                    {/* Right Side: Line Chart & Table */}
                    <div>
                        <h3 className="text-center font-semibold text-gray-600 mb-4">IMB Volume Share of Category</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={imbVolumeShareData} margin={{ top: 20, right: 40, left: 0, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                <YAxis domain={[38, 46]} tickFormatter={(tick) => `${tick.toFixed(1)}%`} hide={true} />
                                <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                                <Line type="monotone" dataKey="value" stroke={COLORS.orange} strokeWidth={2} name="Category 1"
                                    label={{ position: 'top', formatter: (val) => `${val.toFixed(1)}%`, fontSize: 12, fill: COLORS.darkText }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                         <div className="mt-6">
                           <RightSideSummaryTable />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IMBCategoryVolumeShare;
