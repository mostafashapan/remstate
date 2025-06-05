// Divider.jsx - Animated gradient divider
import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ active = false }) => {
  return (
    <div className={`flex-1 h-0.5 mx-2 mt-6 transition-all duration-500 ${
      active ? 
        'bg-gradient-to-r from-blue-500/80 via-cyan-400/80 to-blue-500/80' : 
        'bg-gray-700'
    }`} />
  );
};

Divider.propTypes = {
  active: PropTypes.bool,
};

export default Divider;