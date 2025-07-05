// ... (all previous data remains the same)

export const COLORS = {
  orange: '#F58220',
  grey: '#6E6E6E',
  blue: '#0088CC',
  lightGrey: '#F0F0F0',
  darkText: '#333333',
  lightText: '#FFFFFF',
  // New colors for the profile chart
  profile1: '#A9A9A9',
  profile2: '#808080',
  profile3: '#696969',
  profile4: '#F58220',
  profile5: '#A0522D',
  // New colors for the typology table
  indexHigh: '#2E8B57',   // Dark Green
  indexOver: '#FFB6C1',   // Light Pink
  indexUnder: '#FFFFFF', // White (or a very light pink if preferred)
};

// ... (categoryVolumeShareData, summaryData1, etc. are unchanged)
export const categoryVolumeShareData = [
  { name: 'FY24', category1: 23.1, category2: 10.1, total: 33.2 },
  { name: 'FY25', category1: 19.9, category2: 8.1, total: 28.0 },
  { name: 'FY26', category1: 18.0, category2: 7.2, total: 25.2 },
  { name: 'FY27', category1: 15.3, category2: 5.9, total: 21.2 },
  { name: 'FY28', category1: 13.8, category2: 5.2, total: 19.0 },
  { name: 'FY29', category1: 12.4, category2: 4.6, total: 17.0 },
  { name: 'FY30', category1: 11.0, category2: 4.0, total: 15.0 },
];

export const summaryData1 = [
    { category: 'Category 1', volCagr: -8.7, somChange: "+370" },
    { category: 'Category 2', volCagr: -10.1, somChange: "-370" },
    { category: 'TOTAL', volCagr: -9.1, somChange: "" },
];

export const imbVolumeData = [
  { name: 'FY24', category1: 8.70, category2: 4.40, total: 13.10 },
  { name: 'FY25', category1: 7.40, category2: 3.50, total: 11.00 },
  { name: 'FY26', category1: 6.40, category2: 3.10, total: 9.50 },
  { name: 'FY27', category1: 5.30, category2: 2.60, total: 7.90 },
  { name: 'FY28', category1: 4.60, category2: 2.30, total: 6.90 },
  { name: 'FY29', category1: 4.00, category2: 2.00, total: 6.10 },
  { name: 'FY30', category1: 3.50, category2: 1.80, total: 5.30 },
];

export const imbVolumeShareData = [
  { name: 'FY24', value: 40.0 },
  { name: 'FY25', value: 40.0 },
  { name: 'FY26', value: 40.0 },
  { name: 'FY27', value: 40.0 },
  { name: 'FY28', value: 40.0 },
  { name: 'FY29', value: 40.0 },
  { name: 'FY30', value: 42.0 },
];

export const summaryData2 = [
    { category: 'Category 1', cagr: -9.9, somChange: "+200" },
    { category: 'Category 2', cagr: -10.0, somChange: "-300" },
    { category: 'TOTAL', cagr: -9.9, somChange: "" },
];


// --- NEW DATA FOR MANUFACTURER PROFILE CHART ---
export const manufacturerProfileData = [
  { name: 'MAT-3', PriSeg1: 20, PriSeg2: 20, PriSeg3: 20, PriSeg4: 20, PriSeg5: 20 },
  { name: 'MAT-2', PriSeg1: 20, PriSeg2: 20, PriSeg3: 20, PriSeg4: 20, PriSeg5: 20 },
  { name: 'MAT-1', PriSeg1: 20, PriSeg2: 20, PriSeg3: 20, PriSeg4: 20, PriSeg5: 20 },
  { name: 'MAT', PriSeg1: 20, PriSeg2: 20, PriSeg3: 20, PriSeg4: 20, PriSeg5: 20 },
  { name: 'SPOT', PriSeg1: 20, PriSeg2: 20, PriSeg3: 20, PriSeg4: 20, PriSeg5: 20 },
];

// --- DATA FOR COMPLEX CHART ---
export const monthlyPerformanceData = [
  { month: 'Jan', sales: 120, movingAvg: 120, marketShare: 15.5 },
  { month: 'Feb', sales: 130, movingAvg: 125, marketShare: 15.8 },
  { month: 'Mar', sales: 150, movingAvg: 133, marketShare: 16.1 },
  { month: 'Apr', sales: 145, movingAvg: 141, marketShare: 16.0 },
  { month: 'May', sales: 160, movingAvg: 148, marketShare: 16.5 },
  { month: 'Jun', sales: 155, movingAvg: 153, marketShare: 16.4 },
  { month: 'Jul', sales: 170, movingAvg: 160, marketShare: 17.0 },
  { month: 'Aug', sales: 180, movingAvg: 168, marketShare: 17.2 },
  { month: 'Sep', sales: 175, movingAvg: 175, marketShare: 17.1 },
  { month: 'Oct', sales: 190, movingAvg: 182, marketShare: 17.5 },
  { month: 'Nov', sales: 210, movingAvg: 192, marketShare: 18.0 },
  { month: 'Dec', sales: 200, movingAvg: 200, marketShare: 17.8 },
];
// --- NEW DATA FOR CONSUMER TYPOLOGY TABLE ---
export const consumerTypologyData = [
    { category: 'Global', n: 'x', t1: 10, t2: 20, t3: 10, t4: 30, t5: 10, t6: 10, t7: 10 },
    { category: 'Market', n: 'x', t1: 10, t2: 20, t3: 10, t4: 30, t5: 10, t6: 10, t7: 10 },
    { category: 'Category 1', n: 'x', t1: 10, t2: 20, t3: 20, t4: 30, t5: 10, t6: 10, t7: 10 },
    { category: 'Category 2', n: 'x', t1: 10, t2: 20, t3: 20, t4: 30, t5: 10, t6: 10, t7: 10 },
    { category: 'Category 3', n: 'x', t1: 10, t2: 20, t3: 10, t4: 30, t5: 20, t6: 10, t7: 10 },
    { category: 'Category 4', n: 'x', t1: 10, t2: 20, t3: 10, t4: 30, t5: 10, t6: 10, t7: 20 },
];
