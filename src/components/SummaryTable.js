import React from 'react';

const SummaryTable = ({ data, headers }) => (
    <div className="w-full">
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
                    <tr key={index} className={`border-b ${row.category === 'TOTAL' ? 'bg-gray-200 font-bold' : 'bg-white'}`}>
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{row.category}</td>
                        {Object.values(row).slice(1).map((val, i) => (
                             <td key={i} className={`px-4 py-2 text-center ${parseFloat(val) < 0 ? 'text-red-500' : 'text-gray-900'}`}>
                                {val}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default SummaryTable;
