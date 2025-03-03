import React from 'react';
import { Box, Typography } from '@mui/material';

function Header() {
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        Rotom Pokédex
      </Typography>
    </Box>
  );
}

export default Header;