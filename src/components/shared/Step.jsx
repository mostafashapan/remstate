// shared/Step.js
import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';

const Step = ({ icon, label, active = false, disabled = false, tooltip = '', onClick }) => {
  return (
    <Tooltip title={tooltip || (disabled ? `${label} (coming soon)` : label)} arrow placement="top">
      <button
        className={`flex flex-col items-center group min-w-[60px] sm:min-w-[80px] md:min-w-[100px] focus:outline-none`}
        onClick={onClick}
        disabled={disabled}
        aria-current={active ? 'step' : undefined}
        aria-disabled={disabled}
      >
        <div 
          className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-1 transition-all duration-300 ${
            active
              ? 'bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg'
              : disabled
                ? 'bg-gray-100 border border-gray-200'
                : 'bg-white border border-gray-300 group-hover:border-blue-400 group-focus:ring-2 group-focus:ring-blue-300'
          }`}
        >
          <div className={`transition-all duration-300 ${
            active ? 'text-white scale-110' : 
            disabled ? 'text-gray-300' : 
            'text-gray-600 group-hover:text-blue-500'
          }`}>
            {React.cloneElement(icon, { 
              className: 'w-5 h-5 sm:w-6 sm:h-6',
              'aria-hidden': true 
            })}
          </div>
          {active && (
            <span className="sr-only">Current: </span>
          )}
          {active && (
            <div 
              className="absolute -bottom-1 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full border-2 border-white"
              aria-hidden="true"
            />
          )}
        </div>
        {/* Label tile under icon */}
        <div className={`w-full px-1 py-1 rounded-md text-center transition-colors duration-300 ${
          active 
            ? 'bg-blue-50 text-blue-600 font-semibold' 
            : disabled 
              ? 'text-gray-400' 
              : 'text-gray-700 group-hover:text-gray-900'
        }`}>
          <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
            {label}
          </span>
        </div>
      </button>
    </Tooltip>
  );
};

Step.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
};

export default Step;