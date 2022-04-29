import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ITred } from "../../../interfaces/entities";
import PackagesList from "./PackagesList/PackagesList";

const ViewTredPage = () => {
  const { tredId } = useParams();
  const [tred, setTred] = React.useState<ITred | null>(null);
  const navigate = useNavigate();

  const handleCreatePackage = () => {
    navigate(`/groups/${tred?.group.id}/treds/${tred?.id}/packages/create`);
  };

  React.useEffect(() => {
    // запрос на получение треда
  }, []);

  return (
    <div className="page">
      {tred && (
        <>
          <Typography>{`Tred with ID = ${tredId}\n${tred.name}`}</Typography>
          <Box sx={{ marginTop: "20px" }}>
            {/* <PackagesList
              packages={tred.packages}
              groupId={tred.groupId!}
              tredId={tred.id}
            /> */}
            <Button onClick={handleCreatePackage}>Создать посылку</Button>
          </Box>
        </>
      )}
    </div>
  );
};

export default ViewTredPage;
