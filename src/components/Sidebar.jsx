import React, { useCallback } from "react";
import { Box } from "@mui/material";
import { useExchanges } from "../state/ExchangesContextProvider";
import { List, Avatar, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { exchanges } = useExchanges();
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    (exchange) => {
      navigate(`/exchange/${exchange.id}`, { replace: true });
    },
    [navigate]
  );
  return (
    <Box flex="1" p={4} sx={{ display: { xs: "none", sm: "block" } }}>
      <List sx={{ width: "100%", bgcolor: "background.paper", marginLeft: 5 }}>
        {exchanges?.map((exchange, index) => {
          return (
            <ListItem
              data-cy={`sidebar-list-item`}
              id={`exchange-sidebar-list-item-${index}`}
              sx={{
                "&:hover": {
                  boxShadow: "-1px 5px 5px 0px rgba(0,0,0,0.5)",
                },
              }}
              key={index}
              onClick={() => handleOnClick(exchange)}
            >
              <ListItemAvatar>
                <Avatar src={exchange.image} />
              </ListItemAvatar>
              <ListItemText primary={exchange.name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
