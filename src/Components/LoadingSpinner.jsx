import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
      <div className="animate-spin w-16 h-16 border-4 border-t-4 border-gray-300 border-t-[#632EE3] rounded-full"></div>
    </div>
  );
};

export default LoadingSpinner;