import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Cell, ReferenceLine, LabelList } from 'recharts';
import { priceLadderData, COLORS, priceSegments, brandSummaryData } from '../data/chartData';

// Custom Tooltip for more detailed information on hover
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-300 rounded-md shadow-lg">
        <p className="font-bold text-gray-800">{data.sku}</p>
        <p className="text-sm text-gray-600">{`WAP: ${data.wap.toFixed(2)}`}</p>
        <p className="text-sm text-gray-600">{`Market Share: ${data.ms.toFixed(2)}%`}</p>
      </div>
    );
  }
  return null;
};

// Custom Label for specific data points marked with 'label: true'
const CustomizedLabel = ({ x, y, payload }) => {
    if (payload && payload.label) {
        return (
            <g>
                <text x={x} y={y} dy={-15} fill="#555" fontSize={10} textAnchor="middle">
                    {payload.sku}
                </text>
                <text x={x} y={y} dy={-2} fill="#555" fontSize={9} textAnchor="middle">
                    {`LC${payload.wap.toFixed(2)}, ${payload.ms.toFixed(2)}%`}
                </text>
            </g>
        );
    }
    return null;
};

const PriceLadderChart = () => {
  return (
    // --- FIX APPLIED HERE ---
    // The ID has been changed from "price-ladder-chart" to "chart3" to match the
    // elementId in the reportOptions array in your App.js file.
    <div id="chart3" className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-orange-600 mb-1">IMB Price Ladder by SKU – Category 1</h2>
      <div className="key-message border rounded-md p-4 my-4">
        <p className="text-gray-600">[Type key message]</p>
      </div>
      
      <div className="chart-capture-area">
        <ResponsiveContainer width="100%" height={400}>
          <ScatterChart
            margin={{
              top: 40,
              right: 20,
              bottom: 20,
              left: 100, // Increased left margin for price segment labels
            }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis 
              type="number" 
              dataKey="xPosition" 
              name="Brand" 
              domain={['dataMin - 1', 'dataMax + 1']} 
              tick={false}
              axisLine={false}
            />
            <YAxis 
              type="number" 
              dataKey="wap" 
              name="WAP (per 20 stick pack)" 
              domain={[0, 7]}
              tickLine={false}
              axisLine={false}
            >
              <Label value="WAP (per 20 stick pack)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} offset={-80} />
            </YAxis>
            <ZAxis type="number" dataKey="ms" range={[50, 1000]} name="Market Share" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
            
            {/* Price Segment Reference Lines and Labels */}
            {priceSegments.map((seg, index) => (
                <ReferenceLine key={`seg-${index}`} y={seg.y} stroke="grey" strokeDasharray="3 3">
                    <Label 
                        value={seg.name} 
                        position="left" 
                        angle={0} 
                        offset={10}
                        style={{ fontSize: '10px', whiteSpace: 'pre-wrap', textAnchor: 'end' }}
                    />
                </ReferenceLine>
            ))}

            <Scatter name="SKUs" data={priceLadderData}>
              {priceLadderData.map((entry, index) => {
                  const brandNumber = entry.brand.split(' ').pop();
                  const brandKey = `brand${brandNumber}`;
                  return <Cell key={`cell-${index}`} fill={COLORS[brandKey]} />;
              })}
              <LabelList dataKey="sku" content={<CustomizedLabel />} />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>

        {/* Bottom Summary Table */}
        <div className="w-full mt-4">
            <table className="w-full text-center text-xs">
                <thead>
                    <tr className="border-t border-b">
                        <th className="p-2 font-semibold">Brand</th>
                        {brandSummaryData.map(brand => <th key={brand.brand} className="p-2 font-normal">{brand.brand}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="p-2 font-semibold">MS%</td>
                        {brandSummaryData.map(brand => <td key={brand.brand} className="p-2">{brand.ms}</td>)}
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 font-semibold"># SKUS</td>
                        {brandSummaryData.map(brand => <td key={brand.brand} className="p-2">{brand.skus}</td>)}
                    </tr>
                    <tr className="border-b">
                        <td className="p-2 font-semibold">Avg. SKU MS%</td>
                        {brandSummaryData.map(brand => <td key={brand.brand} className="p-2">{brand.avgMs}</td>)}
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default PriceLadderChart;
