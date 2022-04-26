import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import GroupsList from "./GroupsList/GroupsList";
import CircularProgress from "@mui/material/CircularProgress";

import "../../Page.scss";
import { IGroupItem } from "../../../interfaces/entities";
import { GroupTypes } from "../../../api/group";
import { api } from "../../../api";

const GroupsPage = () => {
  const [tab, setTab] = React.useState<GroupTypes>(GroupTypes.PUBLIC);
  const [groups, setGroups] = React.useState<IGroupItem[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setTab(newValue);
  };

  React.useEffect(() => {
    /*
      запрос на группы
    */
    setIsLoading(true);
    api.group.getGroups(tab).then((groups) => {
      setGroups(groups);
      setIsLoading(false);
    });
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
          <Tab label="Публичные сообщества" value={GroupTypes.PUBLIC} />
          <Tab label="Мои сообщества" value={GroupTypes.MY} />
        </Tabs>
      </Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Container
          sx={{ overflowY: "scroll", height: "600px", marginTop: "20px" }}
        >
          <GroupsList groups={groups} />
        </Container>
      )}
    </div>
  );
};

export default GroupsPage;
