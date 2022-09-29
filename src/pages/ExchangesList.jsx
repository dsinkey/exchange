import React from "react";
import { useExchanges } from "../state/ExchangesContextProvider";
import Exchanges from "../components/Exchanges";

const ExchangeList = () => {
  const { status, exchanges } = useExchanges();

  switch (status) {
    case "LOADING":
      return "LOADING";
    case "COMPLETE":
      return <Exchanges exchanges={exchanges} />;
    default:
      return "Loading...";
  }
};

export default ExchangeList;
