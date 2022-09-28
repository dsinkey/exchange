import React from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Typography,
} from "@mui/material";

const ExchangeDetailsNewsList = ({ exchangeDetails }) => {
  return (
    <>
      <Typography variant="h4">{`Recent ${exchangeDetails.name} News`}</Typography>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {exchangeDetails?.status_updates?.map((status_update, index) => {
          const description = status_update?.description?.split("➡️");
          return (
            <a
              target="_blank"
              rel="noreferrer"
              href={description[1] ? description[1].trim() : ""}
              key={index}
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
    </>
  );
};

export default ExchangeDetailsNewsList;
