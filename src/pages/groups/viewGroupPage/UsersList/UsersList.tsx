import React from "react";
import { IUser, IUserItem } from "../../../../interfaces/entities";
import { Box, Button, List, Typography } from "@mui/material";
import UserItem from "./UserItem";
import UserSimpleItem from "./UserSimpleItem";

interface IProps {
  members: IUserItem[];
  groupId: number;
  isAdmin: boolean;
  kickOut: (user: IUserItem) => void;
  delegateAdmin: (user: IUserItem) => void;
}

const UsersList: React.FC<IProps> = ({
  members,
  isAdmin,
  kickOut,
  delegateAdmin,
}) => {
  const handleDelegateAdmin = (user: IUserItem) => {
    const answer = window.confirm(
      "Вы точно хотите передать админские права этому челу?"
    );
    // типа передаем или нет
    if (answer) delegateAdmin(user);
  };

  const handleKickOut = (user: IUserItem) => {
    const answer = window.confirm("Вы точно хотите кикнуть этого чела?");
    // типа передаем или нет
    if (answer) kickOut(user);
  };

  return (
    <Box
      sx={{
        overflowY: "scroll",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography>Участники сообщества</Typography>
      <List>
        {members.map((user) =>
          isAdmin ? (
            <UserItem
              user={user}
              onDelegateAdmin={() => handleDelegateAdmin(user)}
              onKickOut={() => handleKickOut(user)}
              key={user.id}
            />
          ) : (
            <UserSimpleItem user={user} key={user.id} />
          )
        )}
      </List>
    </Box>
  );
};

export default UsersList;
