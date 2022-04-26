import { Typography } from "@mui/material";
import React from "react";
import { IUserItem } from "../../../../interfaces/entities";

interface IUserSimpleProps {
  user: IUserItem;
}

const UserSimpleItem: React.FC<IUserSimpleProps> = ({ user }) => {
  return <Typography>{user.name}</Typography>;
};

export default UserSimpleItem;
