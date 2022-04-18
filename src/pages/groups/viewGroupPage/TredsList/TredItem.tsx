import React from "react";
import { ListItemButton, Typography, Divider } from "@mui/material";
import { ITred } from "../../../../interfaces/entities";

interface IProps {
  tred: ITred;
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
