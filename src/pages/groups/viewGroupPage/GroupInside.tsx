import React from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import InviteDialog from "../../../components/InviteDialog/InviteDialog";
import { IGroup, IUserItem } from "../../../interfaces/entities";
import TredsList from "./TredsList/TredsList";
import UsersList from "./UsersList/UsersList";
import Snack from "../../../components/Snack/Snack";

interface IGroupInfoProps {
  handleCreateTred: () => void;
  isAdmin: boolean;
  group: IGroup;
  handleInvite: (email: string) => Promise<string>;
  handleGenerateLink: () => Promise<string>;
  handleLeave: () => Promise<string>;
  handleKickOut: (user: IUserItem) => Promise<string>;
  handleDelegateAdmin: (user: IUserItem) => Promise<string>;
}

const GroupInside: React.FC<IGroupInfoProps> = ({
  handleCreateTred,
  handleInvite,
  isAdmin,
  group,
  handleGenerateLink,
  handleLeave,
  handleKickOut,
  handleDelegateAdmin,
}) => {
  const [isInviteDialogOpen, setIsInviteDialogOpen] = React.useState(false);
  const [inviteError, setInviteError] = React.useState("");
  const [inviteLinkError, setInviteLinkError] = React.useState("");

  const [error, setError] = React.useState("");

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

  const leave = () => {
    handleLeave().then((error) => setError(error.length ? error : ""));
  };
  const kickOut = (user: IUserItem) => {
    handleKickOut(user).then((error) => setError(error.length ? error : ""));
  };
  const delegateAdmin = (user: IUserItem) => {
    handleDelegateAdmin(user).then((error) =>
      setError(error.length ? error : "")
    );
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
            kickOut={kickOut}
            delegateAdmin={delegateAdmin}
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
      <Snack
        isOpen={error.length > 0}
        onClose={() => setError("")}
        text={error}
      />
    </>
  );
};

export default GroupInside;
