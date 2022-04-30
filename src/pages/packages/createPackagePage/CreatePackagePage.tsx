import React, { ChangeEvent } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  Box,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useNavigate, useParams } from "react-router-dom";
import { ILanguage, IPackageCreate } from "../../../interfaces/entities";
import CompileResultDialog from "../../../components/CompileResultDialog/CompileResultDialog";
import { api } from "../../../api";
import Snack from "../../../components/Snack/Snack";

const CreatePackagePage = () => {
  const [code, setCode] = React.useState("");
  const [languageIndex, setLanguageIndex] = React.useState("");
  const [languages, setLanguages] = React.useState<Array<ILanguage>>([]);
  const [stdin, setStdin] = React.useState("");
  const [cmdInput, setCmdInput] = React.useState("");

  const [stdout, setStdout] = React.useState("");
  const [stderr, setStderr] = React.useState("");
  const [isDialogResultOpen, setIsDialogResultOpen] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

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

  const { groupId, tredId } = useParams();
  const navigate = useNavigate();

  const handleCreate = () => {
    setIsLoading(true);
    // запрос на создание посылки
    api.pack
      .create({
        code,
        language: languages[+languageIndex],
        tredId: +tredId!,
      } as IPackageCreate)
      .then((pack) => {
        // редиректим на страницу треда
        navigate(`/groups/${groupId}/treds/${tredId}`);
      })
      .catch((err) => setError(err.response.data.message))
      .finally(() => setIsLoading(false));
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguageIndex(event.target.value);
  };

  React.useEffect(() => {
    // запрос, получаем доступные языки
    setLanguages([
      {
        id: 1,
        name: "python",
      },
      {
        id: 2,
        name: "javascript",
      },
    ]);
    setLanguageIndex("0");
  }, []);

  return (
    <div className="page">
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Typography>{`Создание посылки в треде id = ${tredId}`}</Typography>
          <Box sx={{ overflowY: "scroll", height: "700px" }}>
            <Box
              sx={{
                overflowY: "scroll",
                height: "500px",
                border: "1px solid red",
              }}
            >
              <CodeEditor
                value={code}
                language="js"
                placeholder="Ваш код здесь"
                onChange={(evn: ChangeEvent<HTMLTextAreaElement>) =>
                  setCode(evn.target.value)
                }
                padding={15}
                style={{
                  fontSize: 14,
                  backgroundColor: "#f5f5f5",
                  fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                  color: "#000",
                }}
              />
            </Box>
            <Box sx={{ padding: "20px" }}>
              <FormControl fullWidth>
                <InputLabel>Язык</InputLabel>
                <Select
                  value={languageIndex}
                  label="Язык"
                  onChange={handleLanguageChange}
                >
                  {languages.length &&
                    languages.map((language, index) => (
                      <MenuItem value={index} key={language.id}>
                        {language.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
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
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Button onClick={handleCompile}>Скомпилировать</Button>
                <Button onClick={handleCreate}>Сохранить</Button>
              </Box>
            </Box>
          </Box>
          <CompileResultDialog
            isOpen={isDialogResultOpen}
            onClose={handleDialogClose}
            stdout={stdout}
            stderr={stderr}
          />
        </>
      )}
      <Snack
        isOpen={error.length > 0}
        onClose={() => setError("")}
        text={error}
      />
    </div>
  );
};

export default CreatePackagePage;
