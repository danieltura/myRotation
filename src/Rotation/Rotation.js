import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import DateGrid from "./DateGrid";
import DateCard from "./DateCard";

function Rotation() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "purple",
        height: "100vh",
        margin: "auto",
        padding: "2%",
      }}
    >
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent="space-between">
            <Grid item xs={2}>
              <DateCard Date="Prev" />
            </Grid>
            <Grid item xs={2}>
              <DateCard Date="Now" />
            </Grid>
            <Grid item xs={2}>
              <DateCard Date="Next" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <DateGrid />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Rotation;
