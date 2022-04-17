import { Box, Button, Switch, TextField, Typography } from "@mui/material";
import React, { ChangeEventHandler } from "react";

import "../../Page.scss";

const CreateGroupPage = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isPublic, setIsPublic] = React.useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  const handleIsPublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPublic(event.target.checked);
  };

  const handleCreateClick = () => {
    // отправка запроса на создание
    // редирект на страницу группы
  };

  return (
    <div className="page">
      <Typography>Создание сообщества</Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <TextField
          label="Название"
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          label="Описание"
          rows={8}
          multiline
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
          sx={{ marginTop: "10px" }}
        />
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography sx={{ marginTop: "10px" }}>Публичное: </Typography>
          <Switch value={isPublic} onChange={handleIsPublicChange} />
        </Box>
      </Box>
      <Button variant="contained" onClick={handleCreateClick}>
        Создать
      </Button>
    </div>
  );
};

export default CreateGroupPage;
