import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, Text } from 'recharts';
import { categoryVolumeShareData, summaryData1, COLORS } from '../data/chartData';
import SummaryTable from './SummaryTable';

const TotalLabel = (props) => {
    const { x, y, value } = props;
    if (!value) return null;
    return (
        <Text x={x} y={y} dy={-10} fill={COLORS.darkText} fontSize={12} textAnchor="middle">
            {value.toFixed(1)}
        </Text>
    );
};

const CategoryVolumeShareChart = () => {
    return (
        <div id="chart1" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-700 mb-1">Category Volume & Share</h2>
            {/* This div now has a specific class for the generator to find */}
            <div className="key-message border rounded-md p-4 mb-6">
                <p className="text-gray-600">▪ [Type key message]</p>
            </div>
            {/* This new div wraps the content we want to capture */}
            <div className="chart-capture-area">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                        <h3 className="text-center font-semibold text-gray-600 mb-4">Category Share % and Volumes bn SE</h3>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={categoryVolumeShareData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                                <YAxis hide={true} domain={[0, 'dataMax + 5']} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(240, 240, 240, 0.5)' }}
                                    formatter={(value, name) => [`${value.toFixed(1)} bn`, name.charAt(0).toUpperCase() + name.slice(1)]}
                                />
                                <Legend verticalAlign="bottom" wrapperStyle={{ paddingTop: '20px' }} />
                                <Bar dataKey="category1" stackId="a" fill={COLORS.orange} name="Category 1" label={<TotalLabel />} >
                                    {categoryVolumeShareData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} />
                                    ))}
                                </Bar>
                                <Bar dataKey="category2" stackId="a" fill={COLORS.grey} name="Category 2" label={{
                                    position: 'inside',
                                    content: (props) => {
                                        const { x, y, width, height, value } = props;
                                        const total = categoryVolumeShareData[props.index].total;
                                        if (total === 0 || !value) return null;
                                        const percentage = ((value / total) * 100).toFixed(1);
                                        return (
                                            <g>
                                                <text x={x + width / 2} y={y + height / 2 - 7} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize={12} fontWeight="bold">{`${percentage}%`}</text>
                                                <text x={x + width / 2} y={y + height / 2 + 7} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize={10}>{`(${value.toFixed(1)})`}</text>
                                            </g>
                                        );
                                    }
                                }} />
                                 <Bar dataKey="category1" stackId="b" fill="transparent" label={{
                                    position: 'inside',
                                    content: (props) => {
                                        const { x, y, width, height, value } = props;
                                        const total = categoryVolumeShareData[props.index].total;
                                        if (total === 0 || !value) return null;
                                        const percentage = ((value / total) * 100).toFixed(1);
                                        return (
                                            <g>
                                                <text x={x + width / 2} y={y + height / 2 - 7} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize={12} fontWeight="bold">{`${percentage}%`}</text>
                                                <text x={x + width / 2} y={y + height / 2 + 7} fill="white" textAnchor="middle" dominantBaseline="middle" fontSize={10}>{`(${value.toFixed(1)})`}</text>
                                            </g>
                                        );
                                    }
                                }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="lg:col-span-1 self-start pt-16">
                        <SummaryTable data={summaryData1} headers={['FY24-30', 'VOL CAGR (%)', 'SOM Change (bps)']} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryVolumeShareChart;
