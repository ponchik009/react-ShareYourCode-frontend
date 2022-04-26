import React from "react";
import { ListItemButton, Typography, Divider } from "@mui/material";
import { ITred, ITredItem } from "../../../../interfaces/entities";

interface IProps {
  tred: ITredItem;
  onClick: () => void;
}

const TredItem: React.FC<IProps> = ({ tred, onClick }) => {
  return (
    <>
      <ListItemButton onClick={onClick}>
        <Typography>{tred.name}</Typography>
      </ListItemButton>
      <Divider />
    </>
  );
};

export default TredItem;
