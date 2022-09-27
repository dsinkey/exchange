import React from "react";
import { Box, Stack } from "@mui/material";
import ExchangeCard from "./Exchange";

const Exchanges = ({ exchanges }) => {
  return (
    <Box sx={{ backgroundColor: "red" }} flex={4} p={2}>
      <Stack spacing={2} justifyContent="center">
        {exchanges.map((exchange, index) => (
          <ExchangeCard key={index} exchange={exchange} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exchanges;
