import React from "react";
import { Grid } from "@mui/material";

const ContentGrid = ({ gridContents }) => {
  return (
    <Grid container spacing={2} sx={{ marginBottom: 2 }}>
      {gridContents.map((gridContent, index) => {
        return (
          <Grid item xs={gridContent.size} key={index}>
            {gridContent.content}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ContentGrid;
