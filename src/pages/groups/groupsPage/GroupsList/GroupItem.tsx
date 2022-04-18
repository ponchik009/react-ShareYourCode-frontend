import { Divider, ListItemButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IGroup } from "../../../../interfaces/entities";

interface IProps {
  group: IGroup;
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
