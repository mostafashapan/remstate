import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Footer = ({ selectedSkip, skipData }) => {
  if (!selectedSkip) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-3 text-xs text-gray-400 text-center leading-snug">
          Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
        </div>
        
        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">{selectedSkip.size} Yard Skip</h3>
            <div>
              <span className="text-xl font-bold text-[#0037C1]">£{selectedSkip.price_before_vat}</span>
              <span className="text-sm text-gray-400 ml-2">{selectedSkip.hire_period_days} days</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-secondary w-full">Back</button>
            <button className="btn-primary w-full">Continue</button>
          </div>
        </div>
        
        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-gray-400">{selectedSkip.size} Yard Skip</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#0037C1]">£{selectedSkip.price_before_vat}</span>
              <span className="text-sm text-gray-400 ml-2">{selectedSkip.hire_period_days} day hire</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
          <button className="px-4 py-2 border border-gray-300 ml-2 text-white rounded hover:bg-gray-500/10">
        Back
      </button>
      <button className="flex items-center gap-2 px-4 py-2  bg-[#0037C1] text-white rounded hover:bg-blue-700 ml-2 text-white">
        Continue
        <ArrowForwardIcon className="w-4 h-4" />
      </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;