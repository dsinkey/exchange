export const btcFormat = () =>
  Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BTC",
  });
