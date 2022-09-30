import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularColor() {
  return (
    <Stack spacing={2} sx={{ alignItems: "center", height: "100%" }}>
      <CircularProgress color="secondary" />
    </Stack>
  );
}
