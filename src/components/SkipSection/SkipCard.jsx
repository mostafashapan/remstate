import React from 'react';
import SkipImage from './SkipImage';
import CheckIcon from '@mui/icons-material/Check';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ConstructionIcon from '@mui/icons-material/Construction';
import WarningIcon from '@mui/icons-material/Warning';


const SkipCard = ({ skip, isSelected, onSelect }) => {
  // Function to determine which icon to show when selected
  const getSelectedIcon = () => {
    if (skip.size >= 20) {
      return <LocalShippingIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
    }
    if (skip.allowed_on_road && skip.allows_heavy_waste) {
      return <ConstructionIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
    }
    if (skip.allowed_on_road) {
      return <CheckIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
    }
    if (!skip.allowed_on_road && !skip.allows_heavy_waste) {
      return <WarningIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
    }
    return <CheckIcon style={{ width: '1.5rem', height: '1.5rem' }} />;
  };

  return (
    <div className="p-3 sm:p-5 max-w-full sm:max-w-md w-full">
      <div
        className={`flex rounded-xl h-full p-6 sm:p-10 flex-col transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg
          ${isSelected ? 'bg-teal-500 border-2 border-blue-700' : 'bg-gray-50 hover:bg-teal-50'}
        `}
        onClick={() => onSelect(skip.id)}
      >
        {isSelected ? (
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white flex-shrink-0">
              {getSelectedIcon()}
            </div>
            <h2 className="text-white text-lg sm:text-xl font-semibold truncate">
              {skip.size} Yard Skip
            </h2>
          </div>
        ) : (
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 inline-flex items-center justify-center rounded-full bg-indigo-600 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 sm:w-6 sm:h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg sm:text-xl font-semibold truncate">
              {skip.size} Yard Skip
            </h2>
          </div>
        )}

        <div className="flex flex-col justify-between flex-grow">
          <SkipImage skip={skip} className="my-4 sm:my-6 w-full h-auto object-contain" />

          <p className="leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
            {skip.hire_period_days} day hire period
          </p>

          <div className="flex justify-between items-center">
            <span className={`text-2xl sm:text-3xl font-bold ${isSelected ? 'text-white' : 'text-blue-700'}`}>
              £{skip.price_before_vat}
            </span>
            <button
  className={`inline-flex items-center mt-3 sm:mt-4 text-base sm:text-lg font-semibold rounded-lg px-4 py-2 transition duration-300 ease-in-out transform ${
    isSelected
      ? 'text-white bg-blue-600 cursor-default shadow-md'
      : 'text-black bg-white hover:text-blue-700 hover:shadow-xl hover:scale-105'
  }`}
  disabled={isSelected}
>
  {isSelected ? 'Selected' : 'Select'}
  {!isSelected && <ArrowForwardIcon className="w-5 h-5 ml-2 sm:ml-3" />}
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipCard;