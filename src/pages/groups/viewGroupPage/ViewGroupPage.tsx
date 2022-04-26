import React from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import TredsList from "./TredsList/TredsList";
import UsersList from "./UsersList/UsersList";
import { IGroupItem } from "../../../interfaces/entities";
import InviteDialog from "../../../components/InviteDialog/InviteDialog";

const ViewGroupPage = () => {
  const { groupId } = useParams();
  const [group, setGroup] = React.useState<IGroupItem | null>(null);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleCreateTred = () => {
    navigate(`/groups/${groupId}/treds/create`);
  };

  const handleInviteDialogOpen = () => {
    setIsInviteDialogOpen(true);
  };

  const handleInviteDialogClose = () => {
    setIsInviteDialogOpen(false);
  };

  React.useEffect(() => {
    // запрос на получение группы
  }, []);

  return (
    <div className="page">
      {group && (
        <>
          <Typography>{`Group with ID = ${groupId}\n${group.name}`}</Typography>
          <Box sx={{ display: "flex", marginTop: "20px" }}>
            <Container sx={{ width: "1500px" }}>
              {/* <TredsList treds={group.treds} groupId={+groupId!} /> */}
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
              {/* <UsersList members={group.members} groupId={+groupId!} /> */}
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
