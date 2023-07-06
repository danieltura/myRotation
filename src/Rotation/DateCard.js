import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
}));

function DateCard(props) {
  return (
    <Item style={{ backgroundColor: props.color ? props.color : "white" }}>
      {props.Date}
    </Item>
  );
}

export default DateCard;
