import React from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import TredsList from "./TredsList/TredsList";
import UsersList from "./UsersList/UsersList";
import { IGroup } from "../../../interfaces/entities";
import InviteDialog from "../../../components/InviteDialog/InviteDialog";
import { api } from "../../../api";

const ViewGroupPage = () => {
  const { groupId } = useParams();
  const [group, setGroup] = React.useState<IGroup | null>(null);
  const [isInviteDialogOpen, setIsInviteDialogOpen] = React.useState(false);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

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
    setIsLoading(true);
    api.group.getGroup(+groupId!).then((data) => {
      if (typeof data === "string") {
        setError(data);
      } else {
        setGroup(data);
        setError("");
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="page">
      {isLoading ? (
        <CircularProgress />
      ) : group ? (
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
      ) : (
        <Typography>{error}</Typography>
      )}
    </div>
  );
};

export default ViewGroupPage;
