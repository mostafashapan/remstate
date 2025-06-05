import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const SkipImage = ({ skip }) => {
  return (
    <Box className="relative">
      <img 
        src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`} 
        alt={`${skip.size} Yard Skip`} 
        className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
      />
      
      <Chip
        label={`${skip.size} Yards`}
        sx={{
          position: 'absolute',
          top: 12,
          right: 8,
          zIndex: 20,
          backgroundColor: '#0037C1',
          color: 'white',
          fontWeight: 'medium',
          boxShadow: 1
        }}
        size="small"
      />
      
      {!skip.allowed_on_road && (
        <Box 
          sx={{
            position: 'absolute',
            bottom: 12,
            left: 8,
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(4px)',
            borderRadius: '8px',
            px: '12px',
            py: '6px'
          }}
        >
          <WarningAmberIcon sx={{ 
            color: '#eab308', 
            fontSize: '16px',
            flexShrink: 0
          }} />
          <Typography 
            variant="caption" 
            sx={{ 
              color: '#eab308', 
              fontWeight: 500,
              fontSize: '0.75rem',
              lineHeight: '1rem'
            }}
          >
            Not Allowed On The Road
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SkipImage;