import React from "react";
import { Switch, Typography, Box, TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const CreateTredPage = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [maxPackages, setMaxPackages] = React.useState(10);
  const [closeDate, setCloseDate] = React.useState(
    new Date(Date.now() + 1000 * 3600 * 24 * 3).toISOString().split("T")[0]
  );
  const [isPublic, setIsPublic] = React.useState(false);

  const navigate = useNavigate();
  const { groupId } = useParams();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };
  const handlePackagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPackages(+event.target.value);
  };
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);

    setCloseDate(event.target.value);
  };
  const handleIsPublicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPublic(event.target.checked);
  };

  const handleCreateClick = () => {
    // отправка запроса на создание треда
    // редирект на страницу треда
    navigate(`/groups/${groupId}/treds/1`);
  };

  return (
    <div className="page">
      <Typography>{`Создание треда в группе с id = ${groupId}`}</Typography>
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
        <TextField
          label="Число пакетов"
          type="number"
          fullWidth
          value={maxPackages}
          onChange={handlePackagesChange}
          sx={{ marginTop: "10px" }}
        />
        <Typography sx={{ marginTop: "10px" }}>Дата закрытия треда:</Typography>
        <TextField type="date" value={closeDate} onChange={handleDateChange} />
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography sx={{ marginTop: "10px" }}>Публичный: </Typography>
          <Switch value={isPublic} onChange={handleIsPublicChange} />
        </Box>
      </Box>
      <Button variant="contained" onClick={handleCreateClick}>
        Создать
      </Button>
    </div>
  );
};

export default CreateTredPage;
