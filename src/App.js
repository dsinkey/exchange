import { Button } from '@mui/material';
import Settings from '@mui/icons-material/Settings';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import { Box, Stack } from '@mui/material';

const App = () => {
  return (
    <Box sx={{ backgroundColor: 'orange' }}>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
      </Stack>
    </Box>
  );
};

export default App;
