import React from 'react';
import { Box } from '@mui/material';

const Feed = ({ exchanges })=> {
  return (
    <Box sx={{backgroundColor: 'red'}} flex={8}>
      {exchanges.map(exchange => {
        return <div>{exchange.name}</div>
      })}
    </Box>
  )
}

export default Feed;