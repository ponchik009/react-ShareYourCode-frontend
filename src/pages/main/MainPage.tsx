import { Box, Typography } from "@mui/material";
import React from "react";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{ fontSize: 48, color: "#EBEBCE", fontWeight: "bold" }}
        >
          Share Your Code
        </Typography>
        <Typography style={{ fontSize: 32, color: "#EBEBCE" }}>
          Платформа для программистов
        </Typography>
        <Typography style={{ fontSize: 32, color: "#EBEBCE" }}>
          Делитесь кодом и оценивайте его!
        </Typography>
      </Box>
      <img src="/img/logo.svg" alt="логотип" className="logo" />
    </>
  );
};

export default MainPage;
