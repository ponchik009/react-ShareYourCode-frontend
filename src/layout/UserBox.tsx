import React from "react";
import { Box, Button, Divider } from "@mui/material";
import StyledIconButton from "../components/UI/StyledIconButton";

const UserBox = () => {
  return (
    <Box className="userBox">
      <StyledIconButton>
        {/* <AccountCircleIcon sx={{ fontSize: "112px" }} /> */}
        <img src="/img/hacker 2.svg" alt="кнопка входа в аккаунт" />
      </StyledIconButton>
      <Box style={{ display: "flex" }}>
        <Button
          variant="text"
          style={{
            fontSize: 16,
            color: "#DCDCAA",
            cursor: "pointer",
          }}
        >
          Sign in&nbsp;
        </Button>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Button
          variant="text"
          style={{
            fontSize: 16,
            color: "#DCDCAA",
            cursor: "pointer",
          }}
        >
          &nbsp;Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default UserBox;
