import React from "react";
import { Stack } from "@mui/material";
import ExchangeCard from "./Exchange";

const Exchanges = ({ exchanges }) => {
  return (
    <Stack spacing={3} justifyContent="center">
      {exchanges.map((exchange, index) => (
        <ExchangeCard key={index} exchange={exchange} />
      ))}
    </Stack>
  );
};

export default Exchanges;
