import React from "react";
import { Button, DialogActions, DialogContent, TextField } from "@mui/material";

const RegisterForm = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [emailError, setEmailError] = React.useState(false);
  const [nameError, setNameError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const [emailErrorText, setEmailErrorText] = React.useState("");
  const [nameErrorText, setNameErrorText] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailError(false);
    setEmailErrorText("");
    setEmail(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameError(false);
    setNameErrorText("");
    setName(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordError(false);
    setPasswordErrorText("");
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordError(false);
    setPasswordErrorText("");
    setConfirmPassword(event.target.value);
  };

  const comparePasswords = () => password === confirmPassword;

  const validateEmail = () => {
    const parts = email.split("@");

    if (parts.length !== 2 || !parts[0].length || !parts[1].length)
      return false;
    const domens = parts[1].split(".");
    if (domens.length !== 2 || !domens[0].length || !domens[1].length)
      return false;

    return true;
  };

  const handleEmailError = (text: string) => {
    setEmailError(true);
    setEmailErrorText(text);
  };
  const handleNameError = (text: string) => {
    setNameError(true);
    setNameErrorText(text);
  };
  const handlePasswordError = (text: string) => {
    setPasswordError(true);
    setPasswordErrorText(text);
  };

  const validate = () => {
    if (!email.length) handleEmailError("Заполните поле!");
    else if (!validateEmail()) handleEmailError("Невалидный email!");
    if (!name.length) handleNameError("Заполните поле!");
    if (!password.length) handlePasswordError("Заполните поле!");
    else if (!comparePasswords()) handlePasswordError("Пароли не совпадают!");
  };

  const handleRegister = () => {
    validate();
    // запрос на регистрацию, изменение глобал стейта
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
          error={emailError}
          helperText={emailErrorText}
        />
        <TextField
          label="Имя"
          fullWidth
          value={name}
          onChange={handleNameChange}
          sx={{ marginTop: "20px" }}
          error={nameError}
          helperText={nameErrorText}
        />
        <TextField
          label="Пароль"
          fullWidth
          type="password"
          sx={{ marginTop: "20px" }}
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
          helperText={passwordErrorText}
        />
        <TextField
          label="Подтверждение пароля"
          fullWidth
          type="password"
          sx={{ marginTop: "20px" }}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={handleRegister}>
          Зарегистрироваться
        </Button>
      </DialogActions>
    </>
  );
};

export default RegisterForm;
