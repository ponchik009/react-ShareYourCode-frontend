import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";

const NavigationList = () => {
  return (
    <List>
      {["Home", "Groups", "Create group"].map((text, index) => (
        <ListItem button key={text}>
          <Typography
            style={{
              fontFamily: "Courier Prime",
              fontSize: 20,
              color: "#858585",
            }}
          >
            {index + 1}&nbsp;
          </Typography>
          <Typography style={{ fontFamily: "Courier Prime", fontSize: 20 }}>
            {text}
          </Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default NavigationList;
