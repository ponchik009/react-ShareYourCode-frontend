import React from "react";
import { Typography, Divider, ListItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GradeIcon from "@mui/icons-material/Grade";
import { IUser } from "../../../../interfaces/entities";
import StyledIconButton from "../../../../components/UI/StyledIconButton";

interface IProps {
  user: IUser;
  onDelegateAdmin: () => void;
  onKickOut: () => void;
}

const UserItem: React.FC<IProps> = ({ user, onDelegateAdmin, onKickOut }) => {
  return (
    <>
      <ListItem>
        <Typography sx={{ overflowX: "hidden", width: "200px" }}>
          {user.name}
        </Typography>
        <StyledIconButton onClick={onDelegateAdmin}>
          <GradeIcon />
        </StyledIconButton>
        <StyledIconButton onClick={onKickOut}>
          <CloseIcon />
        </StyledIconButton>
      </ListItem>
      <Divider />
    </>
  );
};

export default UserItem;
