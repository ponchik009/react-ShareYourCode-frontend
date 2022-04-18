import { Divider, ListItemButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  group: string;
}

const GroupItem: React.FC<IProps> = ({ group }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/groups/${1}`);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <Typography>{group}</Typography>
      </ListItemButton>
      <Divider />
    </>
  );
};

export default GroupItem;
