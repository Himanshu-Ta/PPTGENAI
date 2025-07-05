import React from 'react';
import { consumerTypologyData, COLORS } from '../data/chartData';

const ConsumerTypology = () => {
    const getCellColor = (value) => {
        if (value > 15) return COLORS.indexHigh; // Example logic
        if (value > 10) return COLORS.indexOver;
        return COLORS.indexUnder;
    };

    const headers = ['Total', 'Typology 1', 'Typology 2', 'Typology 3', 'Typology 4', 'Typology 5', 'Typology 6', 'Typology 7'];
    const dataKeys = ['n', 't1', 't2', 't3', 't4', 't5', 't6', 't7'];

    return (
        <div id="consumer-typology-slide" className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-bold text-orange-500 mb-1">Consumer Typology Distribution</h2>
            <div className="key-message border rounded-md p-4 mb-6">
                <p className="text-gray-600">▪ [Type key message]</p>
            </div>
            
            <div className="chart-capture-area">
                <h3 className="text-center font-semibold text-gray-600 mb-4">Category Profile by Typology (row = 100%)</h3>
                <table className="w-full border-collapse text-center text-sm">
                    <thead>
                        <tr>
                            <th className="p-2 border bg-gray-200"></th>
                            {headers.map((header, i) => (
                                <th key={i} className={`p-2 border text-white ${header === 'Typology 1' ? 'bg-red-500' : header === 'Typology 3' ? 'bg-blue-400' : 'bg-gray-500'}`}>
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {consumerTypologyData.map(row => (
                            <tr key={row.category}>
                                <td className="p-2 border font-semibold text-left bg-gray-200">{row.category}</td>
                                <td className="p-2 border bg-gray-100">n = {row.n}</td>
                                {dataKeys.slice(1).map(key => (
                                    <td key={key} className="p-2 border" style={{ backgroundColor: getCellColor(row[key]) }}>
                                        {row[key]}%
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center items-center gap-x-6 mt-4 text-xs text-gray-600">
                    <span>Indexation to Market / Category Total :</span>
                    <span className="flex items-center"><span className="w-3 h-3 mr-2" style={{backgroundColor: COLORS.indexHigh}}></span>Highest over-indexation</span>
                    <span className="flex items-center"><span className="w-3 h-3 mr-2" style={{backgroundColor: COLORS.indexOver}}></span>Over-indexation (&gt;110)</span>
                    <span className="flex items-center"><span className="w-3 h-3 mr-2 border border-gray-300"></span>Under-indexation (&lt;90)</span>
                </div>
            </div>
        </div>
    );
};

export default ConsumerTypology;
