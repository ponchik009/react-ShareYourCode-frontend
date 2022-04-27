import React from "react";
import { IUser, IUserItem } from "../../../../interfaces/entities";
import { Box, Button, List, Typography } from "@mui/material";
import UserItem from "./UserItem";
import UserSimpleItem from "./UserSimpleItem";

interface IProps {
  members: IUserItem[];
  groupId: number;
  isAdmin: boolean;
}

const UsersList: React.FC<IProps> = ({ members, isAdmin }) => {
  const handleDelegateAdmin = (id: number) => {
    const answer = window.confirm(
      "Вы точно хотите передать админские права этому челу?"
    );
    // типа передаем или нет
    if (answer) alert(`delegate admin to user id ${id}`);
  };

  const handleKickOut = (id: number) => {
    const answer = window.confirm("Вы точно хотите кикнуть этого чела?");
    // типа передаем или нет
    if (answer) alert(`kick user id ${id}`);
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
              onDelegateAdmin={() => handleDelegateAdmin(user.id)}
              onKickOut={() => handleKickOut(user.id)}
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
