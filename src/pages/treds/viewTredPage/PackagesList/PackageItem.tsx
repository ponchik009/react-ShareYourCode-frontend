import React from "react";
import { ListItemButton, Typography, Divider } from "@mui/material";
import { IPackage } from "../../../../interfaces/entities";

interface IProps {
  pack: IPackage;
  onClick: () => void;
}

const PackageItem: React.FC<IProps> = ({ pack, onClick }) => {
  return (
    <>
      <ListItemButton onClick={onClick}>
        <Typography>{pack.date}</Typography>
      </ListItemButton>
      <Divider />
    </>
  );
};

export default PackageItem;
