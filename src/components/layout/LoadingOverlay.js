import React from 'react';

const LoadingOverlay = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-white bg-opacity-75 z-50 flex flex-col justify-center items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
            <p className="mt-4 text-lg font-semibold text-gray-700">Generating Your Report...</p>
            <p className="text-sm text-gray-500">Please wait, this may take a few moments.</p>
        </div>
    );
};

export default LoadingOverlay;
