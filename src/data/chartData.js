const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

export const COLORS = {
  // Primary UI colors
  orange: '#FB8C00',        // Vibrant Orange
  teal: '#26A69A',          // Medium Teal
  peach: '#FFAB91',         // Soft Peach
  skyBlue: '#4FC3F7',       // Sky Blue
  lightPurple: '#CE93D8',   // Light Purple
  PalePink: '#f9ccca',
  Brown:rgb(171, 86, 25),

  // Background + text
  lightGrey: '#FDFDFD',     // Near-white for surfaces
  darkText: '#212121',      // High-contrast black-ish text
  lightText: '#FFFFFF',     // Pure white for buttons etc.

  // Profile chart colors (harmonized)
  profile1: rgb(252, 121, 46),      // Orange
  profile2:  rgb(33, 230, 144),       // Teal
  profile3: rgb(248, 206, 122),      // Peach
  profile4: rgb(189, 170, 250),       // Sky Blue
  profile5: rgb(194, 111, 208),       // Light Purple

  // Typology color coding
  indexHigh: '#388E3C',      // Green = strong performance
  indexOver: '#E53935',      // Red = over-indexed
  indexUnder: '#FFF176',     // Yellow = under-indexed

    // Brand colors for the Price Ladder chart
  brand1: '#d62728',     // Red
  brand2: '#ff7f0e',     // Orange
  brand3: '#1f77b4',     // Blue
  brand4: '#2ca02c',     // Green
  brand5: '#9467bd',     // Purple
  brand6: '#8c564b',     // Brown
  brand7: '#e377c2',     // Pink
  other: '#7f7f7f',      // Grey
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


export const priceLadderData = [
  // Data for IMB Brand 1
  { brand: 'IMB Brand 1', sku: 'SKU A', wap: 4.0, ms: 1.5, xPosition: 1 },
  { brand: 'IMB Brand 1', sku: 'SKU B', wap: 3.5, ms: 2.5, xPosition: 1 },
  { brand: 'IMB Brand 1', sku: 'SKU C', wap: 3.8, ms: 1.0, xPosition: 1 },

  // Data for IMB Brand 2
  { brand: 'IMB Brand 2', sku: 'SKU D', wap: 6.2, ms: 0.8, xPosition: 2 },
  { brand: 'IMB Brand 2', sku: 'SKU E', wap: 5.2, ms: 1.2, xPosition: 2 },
  { brand: 'IMB Brand 2', sku: 'Brand KS Bright', wap: 2.8, ms: 2.0, xPosition: 2, label: true },

  // Data for IMB Brand 3
  { brand: 'IMB Brand 3', sku: 'SKU F', wap: 4.5, ms: 3.0, xPosition: 3 },
  { brand: 'IMB Brand 3', sku: 'SKU G', wap: 2.8, ms: 1.8, xPosition: 3 },
  { brand: 'IMB Brand 3', sku: 'SKU H', wap: 3.2, ms: 2.2, xPosition: 3 },

  // Data for IMB Brand 4
  { brand: 'IMB Brand 4', sku: 'SKU I', wap: 2.5, ms: 2.5, xPosition: 4 },
  { brand: 'IMB Brand 4', sku: 'SKU J', wap: 2.2, ms: 1.5, xPosition: 4 },
  { brand: 'IMB Brand 4', sku: 'SKU K', wap: 1.8, ms: 3.5, xPosition: 4 },

  // Data for IMB Brand 5
  { brand: 'IMB Brand 5', sku: 'SKU L', wap: 6.4, ms: 0.9, xPosition: 5 },
  { brand: 'IMB Brand 5', sku: 'SKU M', wap: 2.2, ms: 1.1, xPosition: 5 },
  { brand: 'IMB Brand 5', sku: 'SKU N', wap: 1.9, ms: 0.7, xPosition: 5 },

  // Data for IMB Brand 6
  { brand: 'IMB Brand 6', sku: 'Brand KS Blue', wap: 6.0, ms: 1.0, xPosition: 6, label: true },
  { brand: 'IMB Brand 6', sku: 'SKU O', wap: 2.0, ms: 1.4, xPosition: 6 },
  { brand: 'IMB Brand 6', sku: 'SKU P', wap: 3.8, ms: 0.6, xPosition: 6 },

  // Data for IMB Brand 7
  { brand: 'IMB Brand 7', sku: 'SKU Q', wap: 6.2, ms: 0.5, xPosition: 7 },
  { brand: 'IMB Brand 7', sku: 'SKU R', wap: 3.6, ms: 1.3, xPosition: 7 },
  { brand: 'IMB Brand 7', sku: 'SKU S', wap: 2.5, ms: 2.2, xPosition: 7 },
];

export const priceSegments = [
    { name: 'PriSeg1 20.0%\nLC10.00 or more', y: 6.00 },
    { name: 'PriSeg2 20.0%\nLC8.00-9.99', y: 4.50 },
    { name: 'PriSeg3 20.0%\nLC6.00-7.99', y: 3.25 },
    { name: 'PriSeg4 20.0%\nLC3.00-5.99', y: 2.25 },
    { name: 'PriSeg5 20.0%\nLC2.99 or less', y: 1.00 },
];

export const brandSummaryData = [
    { brand: 'IMB Brand 1', ms: '5.00%', skus: 5, avgMs: '1.22%' },
    { brand: 'IMB Brand 2', ms: '5.00%', skus: 8, avgMs: '1.38%' },
    { brand: 'IMB Brand 3', ms: '5.00%', skus: 18, avgMs: '1.12%' },
    { brand: 'IMB Brand 4', ms: '5.00%', skus: 7, avgMs: '0.48%' },
    { brand: 'IMB Brand 5', ms: '5.00%', skus: 4, avgMs: '0.26%' },
    { brand: 'IMB Brand 6', ms: '5.00%', skus: 11, avgMs: '0.40%' },
    { brand: 'IMB Brand 7', ms: '5.00%', skus: 18, avgMs: '0.40%' },
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
