import React from 'react';
import { ArrowDownToLine, LayoutDashboard } from 'lucide-react';

// The Header is now much simpler. It just signals the parent to open the modal.
const Header = ({ onOpenModal }) => {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-3">
                    <LayoutDashboard className="h-8 w-8 text-orange-500" />
                    <div>
                        <h1 className="text-lg font-bold text-gray-800">Sales & Marketing Dashboard</h1>
                        <p className="text-xs text-gray-500">Confidential | For Discussion Purposes Only</p>
                    </div>
                </div>
                <button
                    onClick={onOpenModal}
                    className="flex items-center justify-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-all duration-200"
                >
                    <ArrowDownToLine size={18} className="mr-2" />
                    Generate Report
                </button>
            </div>
        </div>
    </header>
  );
};

export default Header;
