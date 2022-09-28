import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Avatar, Card, CardHeader, CardContent, Typography } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ContentGrid from "../ContentGrid";
import ExchangeDetailsNewsList from "./ExchangeDetailsNewsList";
import { btcFormat } from "../../helpers";

const ExchangeDetails = () => {
  const [exchangeDetails, setExchangeDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => {
    navigate(`/`, { replace: true });
  }, [navigate]);
  const formateBTC = btcFormat();

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/exchanges/${id}`)
      .then((res) => {
        setExchangeDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const gridContents = [
    {
      content: `Trust Score Rank: ${exchangeDetails?.trust_score_rank}`,
      size: 6,
    },
    {
      content: `Trust Score: ${exchangeDetails?.trust_score}`,
      size: 6,
    },
    {
      content: `Trading Volume 24 Hour: ${formateBTC.format(
        exchangeDetails?.trade_volume_24h_btc
      )}`,
      size: 6,
    },
    {
      content: `Trading Volume 24 Hour Normalized: ${formateBTC.format(
        exchangeDetails?.trade_volume_24h_btc
      )}`,
      size: 6,
    },
    {
      content: `Country: ${
        exchangeDetails.country ? exchangeDetails.country : "N/A"
      }`,
      size: 6,
    },
    {
      content: `Centralized: ${exchangeDetails?.centralized?.toString()}`,
      size: 6,
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ArrowBack
          sx={{
            height: 50,
            width: 50,
            "&:hover": {
              color: "grey",
            },
          }}
          color={"black"}
          onClick={handleOnClick}
        />
        <Typography variant="h3" color={"black"}>
          Exchange List
        </Typography>
      </div>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ height: 100, width: 100 }} src={exchangeDetails.image} />
          }
          title={<Typography variant="h3">{exchangeDetails.name}</Typography>}
          subheader={
            exchangeDetails.year_established
              ? `Established in ${exchangeDetails.year_established}`
              : ""
          }
        />
        <CardContent>
          <ContentGrid gridContents={gridContents} />
          <Typography variant="body2" color="text.secondary">
            {exchangeDetails.description}
          </Typography>
          {exchangeDetails?.status_updates?.length ? (
            <ExchangeDetailsNewsList exchangeDetails={exchangeDetails} />
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
};

export default ExchangeDetails;
