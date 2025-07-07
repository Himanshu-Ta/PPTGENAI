import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { manufacturerProfileData, COLORS } from '../data/chartData';

// This sub-component for the chart does not need to be changed.
const ProfileChart = ({ title }) => (
    <div className="w-full">
        <h4 className="font-semibold text-center text-gray-700 mb-2">{title}</h4>
        <ResponsiveContainer width="100%" height={250}>
            <BarChart data={manufacturerProfileData} margin={{ top: 20, right: 5, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis hide={true} />
                <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                <Bar dataKey="PriSeg1" stackId="a" fill={COLORS.profile1} />
                <Bar dataKey="PriSeg2" stackId="a" fill={COLORS.profile2} />
                <Bar dataKey="PriSeg3" stackId="a" fill={COLORS.profile3} />
                <Bar dataKey="PriSeg4" stackId="a" fill={COLORS.profile4} />
                <Bar dataKey="PriSeg5" stackId="a" fill={COLORS.profile5} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

const ManufacturerProfile = () => {
    const manufacturers = ['IMB', 'PMI', 'BAT', 'JTI'];

    return (
        <div id="chart4" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-gray-700 mb-1">Manufacturer Profile by Price Segment – Category 1</h2>
            <div className="key-message border rounded-md p-4 mb-6">
                <p className="text-gray-600">[Type key message]</p>
            </div>

            <div className="chart-capture-area">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {manufacturers.map(m => <ProfileChart key={m} title={`${m} Profile by Price Segment`} />)}
                </div>
            </div>

            {/* --- RESPONSIVE FOOTER SECTION (FIX APPLIED HERE) --- */}
            {/* This div replaces the old <Legend> component for better layout control. */}
            <div className="mt-4 pt-4 border-t border-gray-200">
                {/* - flex: Enables flexbox layout.
                  - flex-wrap: Allows items to wrap onto a new line on smaller screens.
                  - justify-between: Pushes the two children (legends and source text) to opposite ends.
                  - items-center: Vertically aligns the content.
                */}
                <div className="flex flex-wrap items-center justify-between gap-4">

                    {/* 1. Legends List (Aligned to the left) */}
                    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                        <li className="flex items-center"><span className="w-3 h-3 mr-2" style={{ backgroundColor: COLORS.profile1 }}></span>PriSeg 1</li>
                        <li className="flex items-center"><span className="w-3 h-3 mr-2" style={{ backgroundColor: COLORS.profile2 }}></span>PriSeg 2</li>
                        <li className="flex items-center"><span className="w-3 h-3 mr-2" style={{ backgroundColor: COLORS.profile3 }}></span>PriSeg 3</li>
                        <li className="flex items-center"><span className="w-3 h-3 mr-2" style={{ backgroundColor: COLORS.profile4 }}></span>PriSeg 4</li>
                        <li className="flex items-center"><span className="w-3 h-3 mr-2" style={{ backgroundColor: COLORS.profile5 }}></span>PriSeg 5</li>
                    </ul>

                    {/* 2. Source Text (Aligned to the right) */}
                    <div className="text-xs text-gray-500">
                        <span>Source: Profit Pool. Strictly Private & Confidential.</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ManufacturerProfile;