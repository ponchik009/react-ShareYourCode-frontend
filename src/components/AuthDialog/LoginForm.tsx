import { Button, DialogActions, DialogContent, TextField } from "@mui/material";
import React from "react";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // запрос на логин, изменение глобал стейта
  };

  return (
    <>
      <DialogContent sx={{ padding: "20px" }}>
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
