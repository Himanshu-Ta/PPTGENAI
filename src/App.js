import React, { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Modal from './components/layout/Modal';
import ArrowHeader from './components/layout/ArrowHeader';
import LoadingOverlay from './components/layout/LoadingOverlay'; // Import the new component
import MarketProjections from './components/MarketProjections';
import IMBCategoryVolumeShare from './components/IMBCategoryVolumeShare';
import ComplexChart from './components/ComplexChart';
import ManufacturerProfile from './components/ManufacturerProfile';
import ConsumerTypology from './components/ConsumerTypology';
import { generatePPT } from './utils/pptxGenerator';

const TABS = ['Market Projections', 'Category Overview', 'Consumer Overview', 'A&P Overview'];

const reportOptions = [
    // { id: 'marketProjections', label: 'Market Projections', tab: TABS[0], elementId: 'market-projections-slide', master: 'HEADER_MASTER_Market_Projections', title: 'Market Projections' },
    { id: 'imbPerformance', label: 'IMB Volume & Share', tab: TABS[0], elementId: 'chart2', master: 'DEFAULT_MASTER', title: 'IMB Volume & Share' },
    { id: 'manufacturerProfile', label: 'Manufacturer Profile', tab: TABS[1], elementId: 'chart4', master: 'HEADER_MASTER_Category_Overview', title: 'Manufacturer Profile by Price Segment – Category 1' },
    // { id: 'imbPerformance', label: 'IMB Volume & Share', tab: TABS[0], elementId: 'chart2', master: 'DEFAULT_MASTER', title: 'IMB Volume & Share' },
    { id: 'consumerTypology', label: 'Consumer Typology', tab: TABS[2], elementId: 'consumer-typology-slide', master: 'HEADER_MASTER_Consumer_Overview', title: 'Consumer Typology Distribution' },
    { id: 'monthlyAnalysis', label: 'Monthly Performance Analysis', tab: TABS[3], elementId: 'chart3', master: 'DEFAULT_MASTER', title: 'Monthly Performance Analysis' }
];

function App() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const initialSelections = reportOptions.reduce((acc, option) => {
      acc[option.id] = true;
      return acc;
  }, {});
  const [selections, setSelections] = useState(initialSelections);

  const handleSelectionChange = (id) => {
    setSelections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleGenerate = async () => {
    setIsModalOpen(false);
    setIsGenerating(true); // Show loading overlay
    
    const selectedReports = reportOptions.filter(option => selections[option.id]);
    await generatePPT(selectedReports, setActiveTab);
    
    setIsGenerating(false); // Hide loading overlay
  };

  const renderContent = () => {
      switch(activeTab) {
          case TABS[0]:
              return <IMBCategoryVolumeShare />
          case TABS[1]:
              return (
                  <div className="space-y-8"> 
                      <ManufacturerProfile />
                  </div>
              );
          case TABS[2]:
              return <ConsumerTypology />;
          case TABS[3]:
              return <ComplexChart />;
          default:
              return <MarketProjections />;
      }
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <LoadingOverlay isLoading={isGenerating} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <ArrowHeader tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="mt-4">
            {renderContent()}
        </div>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Select Reports to Generate">
          <div className="space-y-4">
              <p className="text-sm text-gray-600">Choose which sections to include in the PowerPoint presentation.</p>
              {reportOptions.map(option => (
                  <label key={option.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200">
                      <input type="checkbox" checked={selections[option.id]} onChange={() => handleSelectionChange(option.id)} className="h-5 w-5 rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                      <span className="text-gray-700 font-medium">{option.label}</span>
                  </label>
              ))}
          </div>
          <div className="mt-6 pt-4 border-t flex justify-end">
              <button onClick={handleGenerate} disabled={isGenerating || Object.values(selections).every(v => !v)} className="flex items-center justify-center px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 disabled:bg-gray-400">
                  {isGenerating ? 'Generating...' : 'Generate'}
              </button>
          </div>
      </Modal>
    </div>
  );
}

export default App;
