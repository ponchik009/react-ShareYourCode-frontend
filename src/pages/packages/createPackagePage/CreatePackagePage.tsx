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
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useParams } from "react-router-dom";
import { ILanguage } from "../../../interfaces/entities";

const CreatePackagePage = () => {
  const [code, setCode] = React.useState("");
  const [languageId, setLanguageId] = React.useState("");

  const [languages, setLanguages] = React.useState<Array<ILanguage>>([]);

  const { tredId } = useParams();

  const handleChange = (event: SelectChangeEvent) => {
    setLanguageId(event.target.value);
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
  }, []);

  return (
    <div className="page">
      <Typography>{`Создание посылки в треде id = ${tredId}`}</Typography>
      <Box sx={{ overflowY: "scroll", height: "700px" }}>
        <Box
          sx={{ overflowY: "scroll", height: "500px", border: "1px solid red" }}
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
            <Select value={languageId} label="Язык" onChange={handleChange}>
              {languages.length &&
                languages.map((language) => (
                  <MenuItem value={language.id} key={language.id}>
                    {language.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <TextField
            label="Стандартный поток ввода"
            fullWidth
            multiline
            // value={maxPackages}
            // onChange={handlePackagesChange}
            sx={{ marginTop: "10px" }}
          />
          <TextField
            label="Аргументы командной строки"
            fullWidth
            multiline
            // value={maxPackages}
            // onChange={handlePackagesChange}
            sx={{ marginTop: "10px" }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Button>Скомпилировать</Button>
            <Button>Сохранить</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CreatePackagePage;
