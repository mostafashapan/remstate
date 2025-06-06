import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ active = false }) => {
  return (
    <div 
      className={`flex-1 h-0.5 mx-2 transition-colors duration-300 ${
        active ? 'bg-blue-500' : 'bg-gray-200'
      }`}
      aria-hidden="true"
    />
  );
};

Divider.propTypes = {
  active: PropTypes.bool,
};

export default Divider;