import {
  Button,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

interface ILogInProps {
  signIn: (email: string, password: string) => Promise<string | undefined>;
  onClose: () => void;
}

const LoginForm: React.FC<ILogInProps> = ({ signIn, onClose }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    // запрос на логин, изменение глобал стейта
    const authError = await signIn(email, password);
    if (authError) {
      setError(authError);
    } else {
      setError("");
      onClose();
    }
  };

  return (
    <>
      <DialogContent sx={{ padding: "20px" }}>
        {error && <Typography>{error}</Typography>}
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          sx={{ marginTop: "20px" }}
        />
        <TextField
          label="Пароль"
          fullWidth
          type="password"
          sx={{ marginTop: "20px" }}
          value={password}
          onChange={handlePasswordChange}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleLogin}>
          Войти
        </Button>
      </DialogActions>
    </>
  );
};

export default LoginForm;
