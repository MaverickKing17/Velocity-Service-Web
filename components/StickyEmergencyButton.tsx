
import React from 'react';

const StickyEmergencyButton: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:2892164428" 
        className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95"
      >
        <i className="fa-solid fa-phone-volume animate-pulse"></i>
        CALL EMERGENCY DISPATCH
      </a>
    </div>
  );
};

export default StickyEmergencyButton;
