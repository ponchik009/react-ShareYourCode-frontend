import React from "react";
import { List, Typography } from "@mui/material";
import GroupItem from "./GroupItem";
import { useNavigate } from "react-router-dom";
import { IGroup } from "../../../../interfaces/entities";

interface IProps {
  groups: IGroup[];
}

const GroupsList: React.FC<IProps> = ({ groups }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/groups/${1}`);
  };

  return (
    <List>
      {groups.length > 0 ? (
        groups.map((group: IGroup) => (
          <GroupItem group={group} onClick={handleClick} />
        ))
      ) : (
        <Typography>Групп не найдено!</Typography>
      )}
    </List>
  );
};

export default GroupsList;
