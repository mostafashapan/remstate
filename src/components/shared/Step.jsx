import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ icon, label, active = false, disabled = false }) => {
  const baseClasses = "flex items-center whitespace-nowrap transition-colors";
  const disabledClasses = "text-white/60 cursor-not-allowed opacity-50";
  const activeClasses = "text-primary-blue hover:text-primary-blue";
  
  const iconBaseClasses = "w-6 h-6";
  const iconActiveClasses = "text-primary-blue";
  const iconDisabledClasses = "text-white/60";
  const iconInactiveClasses = "text-white";

  return (
    <button
      disabled={disabled}
      className={`
        ${baseClasses}
        ${disabled ? disabledClasses : activeClasses}
      `}
    >
      <div className={`
        ${iconBaseClasses}
        ${active ? iconActiveClasses : disabled ? iconDisabledClasses : iconInactiveClasses}
      `}>
        {icon}
      </div>
      <span className={`ml-2 ${disabled ? 'text-white/60' : 'text-white'}`}>
        {label}
      </span>
    </button>
  );
};

Step.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Step;