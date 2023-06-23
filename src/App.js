import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function App() {
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
              <Item>Prev</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Prev</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>Next</Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} columns={14}>
            {Array.from(Array(30)).map((_, index) => (
              <Grid item xs={2} key={index}>
                <Item>{index + 1}</Item>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
