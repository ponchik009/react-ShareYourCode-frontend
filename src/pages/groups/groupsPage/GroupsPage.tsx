import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import GroupsList from "./GroupsList/GroupsList";

import "../../Page.scss";
import { IGroup } from "../../../interfaces/entities";

const GroupsPage = () => {
  const [tab, setTab] = React.useState(0);
  const [groups, setGroups] = React.useState<IGroup[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  React.useEffect(() => {
    /*
      запрос на группы
    */
    setGroups(Array(20).fill({ name: `Group ${tab}` }));
  }, []);

  React.useEffect(() => {
    /*
      запрос на группы
    */
    setGroups(Array(20).fill({ name: `Group ${tab}` }));
    // setGroups([]);
  }, [tab]);

  return (
    <div className="page">
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs value={tab} onChange={handleChange} aria-label="basic tabs">
          <Tab label="Публичные сообщества" />
          <Tab label="Мои сообщества" />
        </Tabs>
      </Box>
      <Container
        sx={{ overflowY: "scroll", height: "600px", marginTop: "20px" }}
      >
        <GroupsList groups={groups} />
      </Container>
    </div>
  );
};

export default GroupsPage;
