import React from "react";
import { Button, List, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TredItem from "./TredItem";
import { ITred } from "../../../../interfaces/entities";

interface IProps {
  treds: ITred[];
  groupId: number;
}

const TredsList: React.FC<IProps> = ({ treds, groupId }) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/groups/${groupId}/treds/${id}`);
  };

  return (
    <List sx={{ overflowY: "scroll", height: "600px", width: "100%" }}>
      {treds.length > 0 ? (
        treds.map((tred: ITred) => (
          <TredItem tred={tred} onClick={() => handleClick(tred.id)} />
        ))
      ) : (
        <>
          <Typography>В этой группе пока нет тредов</Typography>
          <Button variant="text">Создать тред</Button>
        </>
      )}
    </List>
  );
};

export default TredsList;
