import { Divider, ListItemButton, Typography } from "@mui/material";
import React from "react";

interface IProps {
  group: string;
}

const GroupItem: React.FC<IProps> = ({ group }) => {
  return (
    <>
      <ListItemButton>
        <Typography>{group}</Typography>
      </ListItemButton>
      <Divider />
    </>
  );
};

export default GroupItem;
