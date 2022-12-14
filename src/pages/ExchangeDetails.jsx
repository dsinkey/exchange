import React, { useEffect, useState, useCallback } from "react";
import { ArrowBack } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import ContentGrid from "../components/ContentGrid";
import SocialMediaIcons from "../components/SocialMediaIcons";
import ExchangeDetailsNewsList from "../components/ExchangeDetails/ExchangeDetailsNewsList";
import { btcFormat } from "../helpers";

const ExchangeDetails = () => {
  const [exchangeDetails, setExchangeDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => {
    navigate(`/`, { replace: true });
  }, [navigate]);
  const formateBTC = btcFormat();
  const { facebook_url, reddit_url, telegram_url, twitter_handle } = exchangeDetails;

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
    <div id="exchange-details-card">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleOnClick} size="large">
          <ArrowBack sx={{ height: 40, width: 40 }} />
        </IconButton>
        <Typography variant="h4" color={"black"}>
          Back to Exchange List
        </Typography>
      </div>
      <Card>
        <CardHeader
          id="exchange-details-card-header"
          avatar={
            <Avatar sx={{ height: 100, width: 100 }} src={exchangeDetails.image} />
          }
          title={<Typography variant="h3">{exchangeDetails.name}</Typography>}
          subheader={
            exchangeDetails.year_established
              ? `Established in ${exchangeDetails.year_established}`
              : ""
          }
          action={
            <SocialMediaIcons
              facebook_url={facebook_url}
              reddit_url={reddit_url}
              telegram_url={telegram_url}
              twitter_handle={twitter_handle}
            />
          }
        />
        <CardContent id="exchange-details-card-content">
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
