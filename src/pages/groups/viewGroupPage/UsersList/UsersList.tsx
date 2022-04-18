import React from "react";
import { IUser } from "../../../../interfaces/entities";
import { Button, List, Typography } from "@mui/material";
import UserItem from "./UserItem";

interface IProps {
  members: IUser[];
}

const UsersList: React.FC<IProps> = ({ members }) => {
  // проверка на админа
  const Item = UserItem;

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
    <List
      sx={{
        overflowY: "scroll",
        height: "600px",
      }}
    >
      {members.length > 0 ? (
        members.map((user: IUser) => (
          <Item
            user={user}
            onDelegateAdmin={() => handleDelegateAdmin(user.id)}
            onKickOut={() => handleKickOut(user.id)}
          />
        ))
      ) : (
        <>
          <Typography>В этой группе пока нет тредов</Typography>
          <Button variant="text">Создать тред</Button>
        </>
      )}
    </List>
  );
};

export default UsersList;
