import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import ExchangeCard from "./ExchangeCard";

const Exchanges = ({ exchanges }) => {
  const [displayExchanges, setDisplayExchanges] = useState(exchanges);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page >= 0) {
      const returnData = exchanges.slice(page * 10, page * 10 + 10);

      setDisplayExchanges(returnData);
    }
  }, [exchanges, page]);

  return (
    <div>
      <Stack spacing={3} justifyContent="center">
        {displayExchanges.map((exchange, index) => (
          <ExchangeCard key={index} exchange={exchange} index={index} />
        ))}
      </Stack>
      <div>
        <button onClick={() => setPage(page - 1)}>down</button>
        <button onClick={() => setPage(page + 1)}>up</button>
      </div>
    </div>
  );
};

export default Exchanges;
