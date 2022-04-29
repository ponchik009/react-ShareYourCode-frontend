import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { IPackage } from "../../../interfaces/entities";
import CompileResultDialog from "../../../components/CompileResultDialog/CompileResultDialog";

const ViewPackagePage = () => {
  const [pack, setPack] = React.useState<IPackage>();

  const [review, setReview] = React.useState("");

  const [stdin, setStdin] = React.useState("");
  const [cmdInput, setCmdInput] = React.useState("");

  const [stdout, setStdout] = React.useState("");
  const [stderr, setStderr] = React.useState("");
  const [isDialogResultOpen, setIsDialogResultOpen] = React.useState(false);

  const navigate = useNavigate();
  const { groupId, packageId } = useParams();

  const handleDialogOpen = () => {
    setIsDialogResultOpen(true);
  };
  const handleDialogClose = () => {
    setIsDialogResultOpen(false);
  };
  const handleCompile = () => {
    // отправляем код на компиляцию
    // записываем результаты и открываем окно
    handleDialogOpen();
    setStdout("очень хороший результат");
    setStderr("упс... ошибочки\nerr1\nerr2");
  };
  const handleCreate = () => {
    // запрос на создание посылки
    // редиректим на страницу треда
    navigate(`/groups/${groupId}/treds/${pack?.tred.id}`);
  };

  React.useEffect(() => {
    // загрузка посылки
  }, []);

  return (
    <div className="page">
      {pack ? (
        <Box sx={{ overflowY: "scroll", height: "800px" }}>
          <Typography>{`Посылка с id = ${pack.id} авторства ${pack.user.name}`}</Typography>
          <TextField
            disabled
            value={pack.code}
            multiline
            fullWidth
            label="Исходный код"
          />
          <TextField
            disabled
            value={pack.language.name}
            fullWidth
            label="Язык"
            sx={{ marginTop: "10px" }}
          />
          <TextField
            label="Стандартный поток ввода"
            fullWidth
            multiline
            value={stdin}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setStdin(event.target.value);
            }}
            sx={{ marginTop: "10px" }}
          />
          <TextField
            label="Аргументы командной строки"
            fullWidth
            multiline
            value={cmdInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setCmdInput(event.target.value);
            }}
            sx={{ marginTop: "10px" }}
          />
          <Button onClick={handleCompile}>Скомпилировать</Button>
          <TextField
            label="Ваш отзыв"
            fullWidth
            multiline
            value={review}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setReview(event.target.value);
            }}
            sx={{ marginTop: "10px" }}
          />
          <Button onClick={handleCreate}>Сохранить</Button>
          <CompileResultDialog
            isOpen={isDialogResultOpen}
            onClose={handleDialogClose}
            stdout={stdout}
            stderr={stderr}
          />
        </Box>
      ) : (
        <Typography>Посылка не найдена</Typography>
      )}
    </div>
  );
};

export default ViewPackagePage;
