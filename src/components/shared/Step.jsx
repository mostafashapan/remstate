import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';

const Step = ({ icon, label, active = false, disabled = false, tooltip = '', onClick }) => {
  return (
    <Tooltip
      title={tooltip || (disabled ? `${label} (coming soon)` : label)}
      arrow
      placement="top"
    >
      <button
        className="flex flex-col items-center group min-w-[60px] sm:min-w-[80px] md:min-w-[100px] focus:outline-none"
        onClick={onClick}
        disabled={disabled}
        aria-current={active ? 'step' : undefined}
        aria-disabled={disabled}
      >
        {/* Icon with 3D effect */}
        <div
          className={`relative flex items-center justify-center w-12 h-12 rounded-full mb-1 transition-all duration-300  transform-gpu ${
            active
              ? 'bg-gradient-to-br from-blue-600 to-blue-500 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.3),_2px_4px_6px_rgba(0,0,0,0.3)] scale-[1.05]'
              : disabled
                ? 'bg-gray-100 border border-gray-200 shadow-inner'
                : 'bg-white border border-gray-300 shadow-md hover:shadow-xl group-hover:border-blue-400 group-focus:ring-2 group-focus:ring-blue-300'
          }`}
        >
          {React.cloneElement(icon, {
            className: `w-6 h-6 transition-colors duration-300 ${
              active
                ? 'text-white'
                : disabled
                  ? 'text-gray-300'
                  : 'text-gray-600 group-hover:text-blue-500'
            }`,
            'aria-hidden': true,
          })}

          {active && (
            <div
              className="absolute -bottom-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Label with full background coverage */}
        <div
          className={`inline-block px-2 py-1 rounded-md transition-colors duration-300 ${
            active
              ? 'bg-blue-50 text-blue-600 font-semibold'
              : disabled
                ? 'text-gray-400'
                : 'text-gray-700 group-hover:text-gray-900'
          }`}
        >
          <span className="text-xs sm:text-sm font-medium text-center block">
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
