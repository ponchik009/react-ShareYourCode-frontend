import { Dialog, DialogTitle, Typography } from "@mui/material";
import React from "react";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const InviteDialog: React.FC<IProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <Typography>Приглашение в сообщество</Typography>
      </DialogTitle>
    </Dialog>
  );
};

export default InviteDialog;
