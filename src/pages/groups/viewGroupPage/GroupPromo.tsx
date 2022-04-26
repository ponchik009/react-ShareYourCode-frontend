import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { IGroup } from "../../../interfaces/entities";

interface IGroupPromoProps {
  handleEnter: () => void;
  group: IGroup;
}

const GroupPromo: React.FC<IGroupPromoProps> = ({ handleEnter, group }) => {
  return (
    <>
      <Box>
        <Typography>{group.name}</Typography>
        <Typography>{group.description}</Typography>
        <Button onClick={handleEnter}>Вступить</Button>
      </Box>
    </>
  );
};

export default GroupPromo;
