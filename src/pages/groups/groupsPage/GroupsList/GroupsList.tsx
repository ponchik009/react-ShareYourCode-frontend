import React from "react";
import { List, Typography } from "@mui/material";
import GroupItem from "./GroupItem";

interface IProps {
  groups: string[];
}

const GroupsList: React.FC<IProps> = ({ groups }) => {
  return (
    <List>
      {groups.length > 0 ? (
        groups.map((group: string) => <GroupItem group={group} />)
      ) : (
        <Typography>Групп не найдено!</Typography>
      )}
    </List>
  );
};

export default GroupsList;
