import React from "react";
import { AppBar, Toolbar, styled, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const NavBar = () => {
  return (
    <AppBar
      id="exchange-list-navbar"
      position="sticky"
      sx={{ backgroundColor: "#00ff00" }}
    >
      <StyledToolbar>
        <Typography sx={{ color: "white", fontSize: 24 }}>StakeFish</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
