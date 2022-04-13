import React from "react";
import { Box, Typography } from "@mui/material";
import StyledIconButton from "../components/UI/StyledIconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserBox = () => {
  return (
    <Box className="userBox">
      <StyledIconButton>
        {/* <AccountCircleIcon sx={{ fontSize: "112px" }} /> */}
        <img src="/img/hacker 2.svg" alt="кнопка входа в аккаунт" />
      </StyledIconButton>
      <Box style={{ display: "flex" }}>
        <Typography
          style={{
            fontSize: 16,
            color: "#DCDCAA",
            cursor: "pointer",
          }}
        >
          Sign in&nbsp;
        </Typography>
        |
        <Typography
          style={{
            fontSize: 16,
            color: "#DCDCAA",
            cursor: "pointer",
          }}
        >
          &nbsp;Sign up
        </Typography>
      </Box>
    </Box>
  );
};

export default UserBox;
