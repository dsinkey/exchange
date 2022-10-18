import React, { useState, useEffect } from "react";
import { Stack, Button } from "@mui/material";
import ExchangeCard from "./ExchangeCard";

const Exchanges = ({ exchanges }) => {
  const [displayExchanges, setDisplayExchanges] = useState(exchanges);
  const [page, setPage] = useState(0);

  const onPageDownClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onPageUpClick = () => {
    if (page < exchanges.length / 10 - 1) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (page >= 0 && page < exchanges.length / 10) {
      const returnData = exchanges.slice(page * 10, page * 10 + 10);

      setDisplayExchanges(returnData);
    }
  }, [exchanges, page]);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Button onClick={onPageDownClick}>down</Button>
        <Button onClick={onPageUpClick}>up</Button>
        <div>{`Page ${page + 1}`}</div>
      </div>
      <Stack spacing={3} justifyContent="center">
        {displayExchanges.map((exchange, index) => (
          <ExchangeCard key={index} exchange={exchange} index={index} />
        ))}
      </Stack>
    </div>
  );
};

export default Exchanges;
