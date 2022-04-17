import { ListItem, Typography } from "@mui/material";
import React from "react";

interface IProps {
  group: string;
}

const GroupItem: React.FC<IProps> = ({ group }) => {
  return (
    <ListItem>
      <Typography>{group}</Typography>
    </ListItem>
  );
};

export default GroupItem;
