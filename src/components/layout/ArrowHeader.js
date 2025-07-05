import React from 'react';

// This component renders the clickable arrow-shaped navigation tabs.
const ArrowHeader = ({ tabs, activeTab, onTabChange }) => {
    
    // Using inline SVG for the chevron shape to avoid external dependencies
    const Chevron = ({ color }) => (
        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute w-full h-full top-0 left-0">
            <polygon points="0,0 85,0 100,20 85,40 0,40" style={{ fill: color }} />
        </svg>
    );

    return (
        <div className="flex items-center h-10 mb-4">
            {tabs.map((tab, index) => {
                const isActive = tab === activeTab;
                const color = isActive ? '#F58220' : '#6E6E6E'; // Orange for active, grey for inactive

                return (
                    <div 
                        key={tab} 
                        onClick={() => onTabChange(tab)}
                        className="relative h-full flex-1 cursor-pointer"
                        style={{ marginLeft: index > 0 ? '-15px' : '0' }} // Overlap the chevrons
                    >
                        <Chevron color={color} />
                        <div className="relative h-full flex items-center justify-center pr-4">
                            <span className={`text-white text-sm font-bold`}>
                                {tab}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ArrowHeader;
