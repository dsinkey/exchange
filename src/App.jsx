import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Box, Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ExchangeList from "./components/Exchanges";
import ExchangeDetail from "./components/ExchangeDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Box flex={4} p={2}>
          <Routes>
            <Route path={"/"} element={<ExchangeList />} />
            <Route path={"/exchange/:id"} element={<ExchangeDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Stack>
    </Box>
  );
};

export default App;
