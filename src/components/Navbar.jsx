import React from "react";
import { AppBar, Toolbar, styled, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Feed = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "blue" }}>
      <StyledToolbar>
        <Typography>Nav</Typography>
      </StyledToolbar>
    </AppBar>
  );
};

export default Feed;
