import * as React from "react";
import Grid from "@mui/material/Grid";
import DateCard from "./DateCard";

function DateGrid() {
  return (
    <Grid container spacing={1} columns={14}>
      {Array.from(Array(30)).map((_, index) => (
        <Grid item xs={2} key={index}>
          <DateCard Date={index + 1} />
        </Grid>
      ))}
    </Grid>
  );
}

export default DateGrid;
