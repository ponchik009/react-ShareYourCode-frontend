import React from "react";
import "./GroupsPage.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import GroupsList from "./GroupsList/GroupsList";

const GroupsPage = () => {
  const [page, setPage] = React.useState(0);
  const [groups, setGroups] = React.useState<Array<string>>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue);
  };

  React.useEffect(() => {
    /*
      запрос на группы
    */
    setGroups(Array(100).fill(`Group ${page}`));
  }, []);

  React.useEffect(() => {
    /*
      запрос на группы
    */
    setGroups(Array(100).fill(`Group ${page}`));
    // setGroups([]);
  }, [page]);

  return (
    <div className="groups-page">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "cetner",
        }}
      >
        <Tabs
          value={page}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Публичные сообщества" />
          <Tab label="Мои сообщества" />
        </Tabs>
      </Box>
      <Container
        sx={{ overflowY: "scroll", height: "500px", marginTop: "20px" }}
      >
        <GroupsList groups={groups} />
      </Container>
    </div>
  );
};

export default GroupsPage;
