import React from "react";

import { Box, Container, Typography } from "@mui/material";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
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
    </div>
  );
};

export default MainPage;
