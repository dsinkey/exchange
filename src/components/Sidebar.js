import React from 'react';
import { Box } from '@mui/material';

const Feed = () => {
  return (
    <Box
      flex="1"
      sx={{ backgroundColor: 'green', display: { xs: 'none', sm: 'block' } }}
    >
      Sidebar
    </Box>
  );
};

export default Feed;
