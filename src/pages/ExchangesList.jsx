import React from "react";
import { useExchanges } from "../state/ExchangesContextProvider";
import Exchanges from "../components/Exchanges";
import LoadingSpinner from "../components/LoadingSpinner";

const ExchangeList = () => {
  const { status, exchanges } = useExchanges();

  switch (status) {
    case "LOADING":
      return <LoadingSpinner />;
    case "COMPLETE":
      return <Exchanges exchanges={exchanges} />;
    default:
      return "Loading...";
  }
};

export default ExchangeList;
