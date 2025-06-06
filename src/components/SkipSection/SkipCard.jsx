import React from 'react';
import SkipImage from './SkipImage';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ConstructionIcon from '@mui/icons-material/Construction';
import WarningIcon from '@mui/icons-material/Warning';

const SkipCard = ({ skip, isSelected, onSelect }) => {
  const getSelectedIcon = () => {
    if (skip.size >= 20) return <LocalShippingIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
    if (skip.allowed_on_road && skip.allows_heavy_waste)
      return <ConstructionIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
    if (skip.allowed_on_road) return <CheckIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
    if (!skip.allowed_on_road && !skip.allows_heavy_waste)
      return <WarningIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
    return <CheckIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
  };

  const getCardBaseColor = () => {
    if (isSelected) return 'bg-teal-600 text-white border-2 border-teal-700';
    if (skip.size >= 20) return 'bg-red-100 text-red-800';
    if (skip.allowed_on_road && skip.allows_heavy_waste) return 'bg-green-100 text-green-800';
    if (skip.allowed_on_road) return 'bg-blue-100 text-blue-800';
    return 'bg-yellow-100 text-yellow-900';
  };

  return (
    <div className="p-4 sm:p-6 w-full max-w-md">
      <div
        className={`flex flex-col h-full rounded-xl p-6 sm:p-8 transition-all duration-500 ease-in-out cursor-pointer
          shadow-[0_4px_5px_3px_rgba(100, 130, 180, 0.15)]
          hover:scale-[1.02] hover:shadow-[0_4px_4px_5px_rgba(120, 150, 200, 0.2)]
          opacity-90 ${getCardBaseColor()}
        `}
        onClick={() => onSelect(skip.id)}
      >
        {/* Header */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-teal-600 text-white">
            {getSelectedIcon()}
          </div>
          <h2 className={`text-lg sm:text-xl font-semibold truncate`}>
            {skip.size} Yard Skip
          </h2>
        </div>

        {/* Image */}
        <SkipImage skip={skip} className="my-4 sm:my-6 w-full h-auto object-contain rounded-lg" />

        {/* Description */}
        <p className="leading-relaxed text-base sm:text-lg mb-6">
          {skip.hire_period_days} day hire period
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center">
          <span className={`text-2xl sm:text-3xl font-bold ${isSelected ? 'text-white' : ''}`}>
            £{skip.price_before_vat}
          </span>
          <button
            className={`inline-flex items-center text-base sm:text-lg font-semibold rounded-lg px-4 py-2 transition duration-300 ease-in-out transform
              ${
                isSelected
                  ? 'text-white bg-teal-700 cursor-default shadow-md'
                  : 'text-white bg-teal-600 hover:bg-teal-700 hover:shadow-xl hover:scale-105'
              }
            `}
            disabled={isSelected}
          >
            {isSelected ? 'Selected' : 'Select'}
            {!isSelected && <ArrowForwardIcon className="ml-2 sm:ml-3 w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;