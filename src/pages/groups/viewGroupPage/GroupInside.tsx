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
  handleInvite: (email: string) => Promise<string>;
  handleGenerateLink: () => Promise<string>;
}

const GroupInside: React.FC<IGroupInfoProps> = ({
  handleCreateTred,
  handleInvite,
  isAdmin,
  group,
  handleGenerateLink,
}) => {
  const [isInviteDialogOpen, setIsInviteDialogOpen] = React.useState(false);
  const [inviteError, setInviteError] = React.useState("");
  const [inviteLinkError, setInviteLinkError] = React.useState("");

  const handleInviteDialogOpen = () => {
    setIsInviteDialogOpen(true);
  };
  const handleInviteDialogClose = () => {
    setInviteError("");
    setIsInviteDialogOpen(false);
  };

  const invite = (email: string) => {
    handleInvite(email).then((error) => {
      if (!error) {
        handleInviteDialogClose();
        setInviteError("");
      } else {
        setInviteError(error);
      }
    });
  };

  const generate = () => {
    handleGenerateLink().then((error) => {
      setInviteLinkError(error || "");
    });
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
        invite={invite}
        generate={generate}
        inviteLink={group.inviteLink || ""}
        inviteLinkError={inviteLinkError}
        inviteError={inviteError}
      />{" "}
    </>
  );
};

export default GroupInside;
