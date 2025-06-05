import React from 'react';
import SkipImage from './SkipImage';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SkipCard = ({ skip, isSelected, onSelect }) => {
  return (
    <div
      className={`relative rounded-xl border-2 p-4 transition-all duration-300 ${
        isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
      } shadow-md hover:shadow-lg cursor-pointer`}
      onClick={() => onSelect(skip.id)}
    >
      {isSelected && (
        <div className="absolute top-3 right-3 text-blue-600">
          <CheckIcon style={{ width: '1.25rem', height: '1.25rem' }} />
        </div>
      )}

      <SkipImage skip={skip} />

      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-900">{skip.size} Yard Skip</h3>
        <p className="text-sm text-gray-600 mt-1">{skip.hire_period_days} day hire period</p>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">£{skip.price_before_vat}</span>
          
          <button
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              isSelected
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            <span>{isSelected ? 'Selected' : 'Select'}</span>
            {!isSelected && <ArrowForwardIcon style={{ width: '1rem', height: '1rem' }} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;