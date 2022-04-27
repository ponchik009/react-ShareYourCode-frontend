import React from "react";
import { Typography, Box, Container, Button } from "@mui/material";
import InviteDialog from "../../../components/InviteDialog/InviteDialog";
import { IGroup } from "../../../interfaces/entities";
import TredsList from "./TredsList/TredsList";
import UsersList from "./UsersList/UsersList";

interface IGroupInfoProps {
  handleCreateTred: () => void;
  isAdmin: boolean;
  group: IGroup;
}

const GroupInside: React.FC<IGroupInfoProps> = ({
  handleCreateTred,
  isAdmin,
  group,
}) => {
  const [isInviteDialogOpen, setIsInviteDialogOpen] = React.useState(false);

  const handleInviteDialogOpen = () => {
    setIsInviteDialogOpen(true);
  };
  const handleInviteDialogClose = () => {
    setIsInviteDialogOpen(false);
  };

  return (
    <>
      <Typography>{group.name}</Typography>
      <Box sx={{ display: "flex", marginTop: "20px" }}>
        <Container sx={{ width: "1500px" }}>
          <TredsList treds={group.treds} groupId={group.id} />
          {isAdmin && <Button onClick={handleCreateTred}>Создать тред</Button>}
        </Container>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "end",
          }}
        >
          <UsersList
            members={group.members}
            groupId={group.id}
            isAdmin={isAdmin}
          />
          {isAdmin && (
            <Button onClick={handleInviteDialogOpen}>
              Приласить в сообщество
            </Button>
          )}
        </Container>
      </Box>
      <InviteDialog
        isOpen={isInviteDialogOpen}
        onClose={handleInviteDialogClose}
        group={group}
      />{" "}
    </>
  );
};

export default GroupInside;
