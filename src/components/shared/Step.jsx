import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';

const Step = ({ icon, label, active = false, disabled = false, tooltip = '' }) => {
  return (
    <Tooltip title={tooltip} arrow placement="top">
      <div className="flex flex-col items-center group">
        <div className={`relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full mb-1 transition-all duration-300
          ${active
            ? 'bg-gradient-to-br from-blue-600 to-blue-500 shadow-md'
            : disabled
              ? 'bg-gray-100 border border-gray-200'
              : 'bg-white border border-gray-200 group-hover:border-blue-300'
          }`}
        >
          <div className={`transition-all duration-300 ${
            active ? 'text-white scale-105' : 
            disabled ? 'text-gray-400' : 
            'text-gray-600 group-hover:text-blue-500'
          }`}>
            {React.cloneElement(icon, { className: 'w-5 h-5 md:w-6 md:h-6' })}
          </div>
          {active && (
            <div className="absolute -bottom-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-white" />
          )}
        </div>
        <span className={`text-xs md:text-sm font-medium transition-colors duration-300 ${
          active ? 'text-blue-600 font-semibold' : 
          disabled ? 'text-gray-400' : 
          'text-gray-600 group-hover:text-gray-800'
        }`}>
          {label}
        </span>
      </div>
    </Tooltip>
  );
};

Step.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  tooltip: PropTypes.string,
};

export default Step;