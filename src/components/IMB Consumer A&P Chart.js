import React from 'react';
// Note: You may need to add these colors to your 'chartData.js' file
// For this component, they are defined locally for simplicity.
const BRAND_COLORS = {
  brand1: '#2c3e50',    // Dark Blue/Grey
  brand2FMC: '#e74c3c', // Red
  otherFCT: '#f39c12',  // Orange
  brand4FCT: '#3498db', // Blue
  brand2FCT: '#9b59b6', // Purple
  brand4FMC: '#2ecc71', // Green
  brand3: '#1abc9c',    // Teal
  otherFMC: '#e67e22',  // Darker Orange
  brand5: '#8e44ad',    // Darker Purple
};

const apData = [
  {
    year: 'FY22',
    total: 90.0,
    segments: [
      { name: 'Brand 1', value: 10.0, color: BRAND_COLORS.brand1, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 2 FMC', value: 10.0, color: BRAND_COLORS.brand2FMC, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Other FCT', value: 10.0, color: BRAND_COLORS.otherFCT, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 4 FCT', value: 10.0, color: BRAND_COLORS.brand4FCT, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 2 FCT', value: 10.0, color: BRAND_COLORS.brand2FCT, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 4 FMC', value: 10.0, color: BRAND_COLORS.brand4FMC, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 3', value: 10.0, color: BRAND_COLORS.brand3, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Other FMC', value: 10.0, color: BRAND_COLORS.otherFMC, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 5', value: 10.0, color: BRAND_COLORS.brand5, ofAP: 11.1, ofNR: 11.1 },
    ].reverse(), // Reversed to build the bar from bottom to top
  },
  {
    year: 'FY23',
    total: 90.0,
    segments: [
      { name: 'Brand 1', value: 10.0, color: BRAND_COLORS.brand1, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 2 FMC', value: 10.0, color: BRAND_COLORS.brand2FMC, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Other FCT', value: 10.0, color: BRAND_COLORS.otherFCT, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 4 FCT', value: 10.0, color: BRAND_COLORS.brand4FCT, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 2 FCT', value: 10.0, color: BRAND_COLORS.brand2FCT, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 4 FMC', value: 10.0, color: BRAND_COLORS.brand4FMC, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 3', value: 10.0, color: BRAND_COLORS.brand3, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Other FMC', value: 10.0, color: BRAND_COLORS.otherFMC, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 5', value: 10.0, color: BRAND_COLORS.brand5, ofAP: 11.1, ofNR: 11.1 },
    ].reverse(),
  },
  {
    year: 'FY24',
    total: 90.0,
    segments: [
      { name: 'Brand 1', value: 10.0, color: BRAND_COLORS.brand1, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 2 FMC', value: 10.0, color: BRAND_COLORS.brand2FMC, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Other FCT', value: 10.0, color: BRAND_COLORS.otherFCT, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 4 FCT', value: 10.0, color: BRAND_COLORS.brand4FCT, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 2 FCT', value: 10.0, color: BRAND_COLORS.brand2FCT, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 4 FMC', value: 10.0, color: BRAND_COLORS.brand4FMC, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 3', value: 10.0, color: BRAND_COLORS.brand3, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Other FMC', value: 10.0, color: BRAND_COLORS.otherFMC, ofAP: 11.1, ofNR: 11.1 },
      { name: 'Brand 5', value: 10.0, color: BRAND_COLORS.brand5, ofAP: 11.1, ofNR: 11.1 },
    ].reverse(),
  },
];

const YearColumn = ({ data }) => (
    <div className="flex flex-col w-full">
        {/* Bar and Table Section */}
        <div className="flex flex-row items-end gap-4">
            {/* Stacked Bar */}
            <div className="flex flex-col w-1/3 text-center">
                <p className="font-bold text-sm mb-1">{data.total.toFixed(1)}</p>
                <div className="flex flex-col border-2 border-gray-700">
                    {data.segments.map((segment, index) => (
                        <div key={index} className="flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: segment.color, height: '40px' }}>
                            {segment.value.toFixed(1)}
                        </div>
                    ))}
                </div>
            </div>
            {/* Data Table */}
            <div className="w-2/3">
                <table className="w-full text-xs text-center">
                    <thead>
                        <tr className="font-bold">
                            <td className="p-1">% of A&P</td>
                            <td className="p-1">% of NR</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.segments.map((segment, index) => (
                            <tr key={index} className="border-b">
                                <td className="p-1 font-semibold">{segment.name}</td>
                                <td className="p-1">{segment.ofAP.toFixed(1)}</td>
                                <td className="p-1">{segment.ofNR.toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        {/* Year Label */}
        <p className="text-center font-bold mt-2">{data.year}</p>
    </div>
);


const ConsumerAPChart = () => {
    const legendItems = apData[0].segments.slice().reverse(); // Use one year's data for the legend

    return (
        <div id="consumer-ap-chart" className="bg-white p-6 rounded-xl shadow-lg">
            {/* Header Navigation Removed */}

            <h2 className="text-2xl font-bold text-orange-600 mb-1">IMB Consumer A&P – Last 3 Years</h2>
            <div className="key-message border rounded-md p-4 my-4">
                <p className="text-gray-600">[Type key message]</p>
            </div>

            <div className="chart-capture-area">
                <h3 className="text-center font-bold text-gray-700 my-4">IMB Brand Contribution to Consumer A&P, Mn £</h3>
                
                {/* Main chart content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {apData.map(yearData => (
                        <YearColumn key={yearData.year} data={yearData} />
                    ))}
                </div>

                {/* Custom Legend */}
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-8 text-xs">
                    {legendItems.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <span className="w-3 h-3 mr-2" style={{ backgroundColor: item.color }}></span>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConsumerAPChart;
