import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ active = false }) => {
  return (
    <div
      className={`flex-1 mx-2 h-1 rounded-full transition-all duration-300
        ${active
          ? 'bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 shadow-md'
          : 'bg-gray-300 shadow-inner'}
      `}
      aria-hidden="true"
    />
  );
};

Divider.propTypes = {
  active: PropTypes.bool,
};

export default Divider;
