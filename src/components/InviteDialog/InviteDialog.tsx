import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { IGroup } from "../../interfaces/entities";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  group: IGroup;
}

const InviteDialog: React.FC<IProps> = ({ isOpen, onClose, group }) => {
  console.log(group);

  const [email, setEmail] = React.useState("");
  const [link, setLink] = React.useState(group.inviteLink || "");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleInvite = () => {
    // берем email и отправляем инвайт
  };
  const handleGenerate = () => {
    // отправляем запрос на генерацию ссылки
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>
        <Typography>Приглашение в сообщество</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography>Приглашение по email</Typography>
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />
        <Button onClick={handleInvite}>Добавить</Button>
        <Typography>Генерация ссылки</Typography>
        <TextField label="Link" fullWidth value={link} disabled />
        <Button onClick={handleGenerate}>Сгенерировать</Button>
      </DialogContent>
    </Dialog>
  );
};

export default InviteDialog;
