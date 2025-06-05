import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ active = false }) => {
  const baseClasses = "w-16 h-px";
  const activeClasses = "bg-primary-blue";
  const inactiveClasses = "bg-gray-800"; // #2A2A2A equivalent

  return (
    <div className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`} />
  );
};

Divider.propTypes = {
  active: PropTypes.bool,
};

export default Divider;