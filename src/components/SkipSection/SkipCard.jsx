import React from 'react';
import SkipImage from './SkipImage';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SkipCard = ({ skip, isSelected, onSelect }) => {
  return (
    <div 
      className={`group relative rounded-lg border-2 p-4 md:p-6 transition-all
        ${isSelected ? 'border-blue-700 bg-blue-700/10' : 'border-gray-800 hover:border-blue-700/50'}
        bg-gray-900 text-white cursor-pointer`}
      onClick={() => onSelect(skip.id)}
    >
      {isSelected && (
        <div className="absolute top-3 right-3 md:top-4 md:right-4 text-blue-700">
          <CheckIcon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      )}
      
      <SkipImage skip={skip} />
      
      <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{skip.size} Yard Skip</h3>
      <p className="text-sm text-gray-400 mb-4 md:mb-6">{skip.hire_period_days} day hire period</p>
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-xl md:text-2xl font-bold text-blue-700">£{skip.price_before_vat}</span>
        </div>
      </div>
      
      <button 
        className={`w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
          ${isSelected ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-gray-800 text-white hover:bg-gray-700 hover:border-blue-700'}`}
      >
        <span>{isSelected ? 'Selected' : 'Select This Skip'}</span>
        {!isSelected && <ArrowForwardIcon className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default SkipCard;
