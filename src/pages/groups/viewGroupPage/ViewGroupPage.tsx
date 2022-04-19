import React from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import TredsList from "./TredsList/TredsList";
import UsersList from "./UsersList/UsersList";
import { IGroup } from "../../../interfaces/entities";
import InviteDialog from "../../../components/InviteDialog/InviteDialog";

const ViewGroupPage = () => {
  const { id } = useParams();
  const [group, setGroup] = React.useState<IGroup | null>(null);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleCreateTred = () => {
    navigate(`/groups/${id}/treds/create`);
  };

  const handleInviteDialogOpen = () => {
    setIsInviteDialogOpen(true);
  };

  const handleInviteDialogClose = () => {
    setIsInviteDialogOpen(false);
  };

  React.useEffect(() => {
    // запрос на получение группы
    setGroup({
      id: 1,
      name: "Отряд сосистеров!!!",
      description: "Крутая ваще группа!!",
      treds: Array(20).fill({ id: 1, name: "Тред" }),
      members: Array(20).fill({
        id: 1,
        name: "Пользователь",
      }),
    });
  }, []);

  return (
    <div className="page">
      {group && (
        <>
          <Typography>{`Group with ID = ${id}\n${group.name}`}</Typography>
          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <Container sx={{ width: "1500px" }}>
              <TredsList treds={group.treds} groupId={+id!} />
              <Button onClick={handleCreateTred}>Создать тред</Button>
            </Container>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "end",
              }}
            >
              <UsersList members={group.members} groupId={+id!} />
              <Button onClick={handleInviteDialogOpen}>
                Приласить в сообщество
              </Button>
            </Container>
          </Box>
          <InviteDialog
            isOpen={isInviteDialogOpen}
            onClose={handleInviteDialogClose}
            id={group.id}
          />
        </>
      )}
    </div>
  );
};

export default ViewGroupPage;
