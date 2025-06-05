import React, { useState } from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const SkipImage = ({ skip }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200">
      <img
        src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
        alt={`${skip.size} Yard Skip`}
        className={`w-full h-full object-cover transition-transform duration-300 ${
          hover ? 'scale-105' : 'scale-100'
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />

      {/* Size badge */}
      <div className="absolute top-3 right-3 px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
        {skip.size} YD
      </div>

      {/* Warning message */}
      {!skip.allowed_on_road && (
        <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-lg">
          <WarningAmberIcon style={{ width: '1rem', height: '1rem' }} />
          <span>Not Allowed On The Road</span>
        </div>
      )}
    </div>
  );
};

export default SkipImage;