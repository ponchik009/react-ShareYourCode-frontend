import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import TredsList from "./TredsList/TredsList";
import UsersList from "./UsersList/UsersList";

const ViewGroupPage = () => {
  const { id } = useParams();
  const [group, setGroup] = React.useState({
    name: "",
    description: "",
    treds: [{ name: "" }],
    members: [{ name: "" }],
  });

  React.useEffect(() => {
    // запрос на получение группы
    setGroup({
      name: "Отряд сосистеров!!!",
      description: "Крутая ваще группа!!",
      treds: [{ name: "Тред 1" }, { name: "Тред 2" }],
      members: [{ name: "Пользователь 1" }, { name: "Пользователь 2" }],
    });
  }, []);

  return (
    <div className="page">
      <Typography>{`Group with ID = ${id}\n${group.name}`}</Typography>
      <Box sx={{ display: "flex", marginTop: "20px" }}>
        <Container
          sx={{ overflowY: "scroll", height: "600px", width: "2500px" }}
        >
          <TredsList />
        </Container>
        <Container sx={{ overflowY: "scroll", height: "600px" }}>
          <UsersList />
        </Container>
      </Box>
    </div>
  );
};

export default ViewGroupPage;
