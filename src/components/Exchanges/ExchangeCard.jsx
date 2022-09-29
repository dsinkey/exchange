import React, { useCallback } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ContentGrid from "../ContentGrid";
import { useNavigate } from "react-router-dom";
import { btcFormat } from "../../helpers";

const ExchangeCard = ({ exchange }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (exchange) => {
      navigate(`/exchange/${exchange.id}`, { replace: true });
    },
    [navigate]
  );

  const formateBTC = btcFormat();

  const gridContents = [
    {
      content: `Trust Score Rank: ${exchange?.trust_score_rank}`,
      size: 6,
    },
    {
      content: `Trust Score: ${exchange?.trust_score}`,
      size: 6,
    },
    {
      content: `Trading Volume 24 Hour: ${formateBTC.format(
        exchange?.trade_volume_24h_btc
      )}`,
      size: 6,
    },
    {
      content: `Trading Volume 24 Hour Normalized: ${formateBTC.format(
        exchange?.trade_volume_24h_btc
      )}`,
      size: 6,
    },
    {
      content: `Country: ${exchange.country ? exchange.country : "N/A"}`,
      size: 6,
    },
    {
      content: `Has Trading Incentive: ${exchange?.has_trading_incentive?.toString()}`,
      size: 6,
    },
  ];

  return (
    <Card
      sx={{
        "&:hover": {
          boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
        },
      }}
      onClick={() => handleOnClick(exchange)}
    >
      <CardHeader
        avatar={<Avatar src={exchange.image} />}
        title={exchange.name}
        subheader={`Established in ${exchange.year_established}`}
      />
      <CardContent>
        <ContentGrid gridContents={gridContents} />
        <Typography variant="body2" color="text.secondary">
          {exchange.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExchangeCard;
