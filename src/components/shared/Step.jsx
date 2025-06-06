import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';

const Step = ({ icon, label, active = false, disabled = false, tooltip = '', onClick }) => {
  return (
    <Tooltip title={tooltip || (disabled ? `${label} (coming soon)` : label)} arrow placement="top">
      <button
        className="flex flex-col items-center group min-w-[80px] sm:min-w-[100px] focus:outline-none"
        onClick={onClick}
        disabled={disabled}
        aria-current={active ? 'step' : undefined}
        aria-disabled={disabled}
      >
        <div 
          className={`relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full mb-2 transition-all duration-300
            ${active
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
              className: 'w-7 h-7 md:w-8 md:h-8',
              'aria-hidden': true 
            })}
          </div>
          {active && (
            <span className="sr-only">Current: </span>
          )}
          {active && (
            <div 
              className="absolute -bottom-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"
              aria-hidden="true"
            />
          )}
        </div>
        <span className={`text-sm md:text-base font-medium text-center transition-colors duration-300 ${
          active ? 'text-blue-600 font-semibold' : 
          disabled ? 'text-gray-400' : 
          'text-gray-700 group-hover:text-gray-900'
        }`}>
          {label}
        </span>
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