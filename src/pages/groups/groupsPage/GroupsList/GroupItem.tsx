import { Divider, ListItemButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IGroupItem } from "../../../../interfaces/entities";

interface IProps {
  group: IGroupItem;
  onClick: () => void;
}

const GroupItem: React.FC<IProps> = ({ group, onClick }) => {
  return (
    <>
      <ListItemButton onClick={onClick}>
        <Typography>{group.name}</Typography>
      </ListItemButton>
      <Divider />
    </>
  );
};

export default GroupItem;
