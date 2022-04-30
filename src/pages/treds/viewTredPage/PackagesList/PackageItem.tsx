import React from "react";
import { ListItemButton, Typography, Divider } from "@mui/material";
import { IPackageItem } from "../../../../interfaces/entities";

interface IProps {
  pack: IPackageItem;
  onClick: () => void;
  index: number;
}

const PackageItem: React.FC<IProps> = ({ pack, onClick, index }) => {
  return (
    <>
      <ListItemButton
        onClick={onClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>{`${index}. ---- ${
          String(pack.date).split("T")[0]
        }`}</Typography>
        <Typography>{`\nАвтор ---- ${pack.user.name}`}</Typography>
      </ListItemButton>
      <Divider />
    </>
  );
};

export default PackageItem;
