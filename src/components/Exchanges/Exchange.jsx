import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import { CurrencyExchangeOutlined } from "@mui/icons-material";

const ExchangeCard = ({ exchange }) => {
  console.log("exchange", exchange);

  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BTC",
  });
  return (
    <Card>
      <CardHeader
        avatar={<Avatar alt="Remy Sharp" src={exchange.image} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={exchange.name}
        subheader={`Established in ${exchange.year_established}`}
      />
      <CardContent>
        <Grid container spacing={2} sx={{ marginBottom: 2 }}>
          <Grid item xs={6}>
            {`Trust Score Rank: ${exchange.trust_score_rank}`}
          </Grid>
          <Grid item xs={6}>
            {`Trust Score: ${exchange.trust_score}`}
          </Grid>
          <Grid item xs={6}>
            {`Trading Volume 24 Hour: ${dollarUS.format(
              exchange.trade_volume_24h_btc
            )}`}
          </Grid>
          <Grid item xs={6}>
            {`Trading Volume 24 Hour Normalized: ${dollarUS.format(
              exchange.trade_volume_24h_btc
            )}`}
          </Grid>
          <Grid item xs={6}>
            {`Country: ${exchange.country ? exchange.country : "N/A"}`}
          </Grid>
          <Grid item xs={6}>
            {`Trading Volume 24 Hour Normalized: ${dollarUS.format(
              exchange.trade_volume_24h_btc
            )}`}
          </Grid>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          {exchange.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExchangeCard;
