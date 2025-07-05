import React from 'react';

// The Tabs component is now controlled by a parent component.
// It receives the active tab and a function to change it.
export const Tabs = ({ activeTab, onTabChange, children }) => {
    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        onTabChange(newActiveTab);
    };

    return (
        <div>
            <div className="flex border-b border-gray-200">
                {children.map(child => (
                    <button
                        key={child.props.label}
                        className={`${
                            activeTab === child.props.label 
                                ? 'border-b-2 border-orange-500 text-orange-600' 
                                : 'text-gray-500 hover:text-gray-700'
                        } font-medium py-3 px-4 sm:px-6 -mb-px focus:outline-none transition-all duration-200`}
                        onClick={e => handleClick(e, child.props.label)}
                    >
                        {child.props.label}
                    </button>
                ))}
            </div>
            <div className="pt-8">
                {children.map(child => {
                    if (child.props.label === activeTab) {
                        return <div key={child.props.label}>{child.props.children}</div>;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export const Tab = ({ label, children }) => {
    return <div label={label}>{children}</div>;
};
