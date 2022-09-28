import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ExchangeDetail = () => {
  const [exchangeDetails, setExchangeDetails] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => {
    navigate(`/`, { replace: true });
  }, [navigate]);

  const btcFormat = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BTC",
  });

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/exchanges/${id}`)
      .then((res) => {
        setExchangeDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

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
          <Grid container spacing={2} sx={{ marginBottom: 2 }}>
            <Grid item xs={6}>
              {`Trust Score Rank: ${exchangeDetails.trust_score_rank}`}
            </Grid>
            <Grid item xs={6}>
              {`Trust Score: ${exchangeDetails.trust_score}`}
            </Grid>
            <Grid item xs={6}>
              {`Trading Volume 24 Hour: ${btcFormat.format(
                exchangeDetails.trade_volume_24h_btc
              )}`}
            </Grid>
            <Grid item xs={6}>
              {`Trading Volume 24 Hour Normalized: ${btcFormat.format(
                exchangeDetails.trade_volume_24h_btc
              )}`}
            </Grid>
            <Grid item xs={6}>
              {`Country: ${
                exchangeDetails.country ? exchangeDetails.country : "N/A"
              }`}
            </Grid>
            <Grid item xs={6}>
              {`Trading Volume 24 Hour Normalized: ${btcFormat.format(
                exchangeDetails.trade_volume_24h_btc
              )}`}
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            {exchangeDetails.description}
          </Typography>
          <Typography variant="h4">{`Recent ${exchangeDetails.name} News`}</Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {exchangeDetails?.status_updates?.map((status_update, index) => {
              const description = status_update?.description?.split("➡️");
              console.log("description", description);
              return (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={description[1] ? description[1].trim() : ""}
                >
                  <ListItem key={index} disableGutters>
                    <ListItemAvatar>
                      <Avatar src={status_update.project.image.small} />
                    </ListItemAvatar>
                    <ListItemText primary={description[0]} />
                  </ListItem>
                </a>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExchangeDetail;
