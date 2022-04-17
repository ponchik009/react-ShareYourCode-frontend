import React from "react";
import { Box, Button, Divider } from "@mui/material";
import StyledIconButton from "../components/UI/StyledIconButton";

interface IProps {
  handleSignIn: () => void;
  handleSignUp: () => void;
}

const UserBox: React.FC<IProps> = ({ handleSignIn, handleSignUp }) => {
  return (
    <Box className="userBox">
      <StyledIconButton onClick={handleSignIn}>
        {/* <AccountCircleIcon sx={{ fontSize: "112px" }} /> */}
        <img src="/img/hacker 2.svg" alt="кнопка входа в аккаунт" />
      </StyledIconButton>
      <Box style={{ display: "flex" }}>
        <Button
          variant="text"
          style={{
            fontSize: 16,
            color: "#DCDCAA",
          }}
          onClick={handleSignIn}
        >
          Sign in&nbsp;
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button
          variant="text"
          style={{
            fontSize: 16,
            color: "#DCDCAA",
          }}
          onClick={handleSignUp}
        >
          &nbsp;Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default UserBox;
