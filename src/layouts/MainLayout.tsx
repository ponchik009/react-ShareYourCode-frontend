import React from "react";
import { Box, Container, Typography } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

import DrawerHeader from "../components/UI/DrawerHeader";
import StyledIconButton from "../components/UI/StyledIconButton";
import StyledDrawer from "../components/UI/StyledDrawer";

import "./MainLayout.css";

const MainLayout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const burgerRef = React.useRef(null);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledIconButton ref={burgerRef} sx={{ m: "56px" }}>
        <MenuIcon onClick={handleDrawerOpen} sx={{ fontSize: "56px" }} />
      </StyledIconButton>
      <StyledDrawer variant="persistent" anchor="left" open={open}>
        <DrawerHeader>
          <StyledIconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </StyledIconButton>
        </DrawerHeader>
        <Divider sx={{ bgcolor: "#fff" }} />
        <Box className="userBox">
          <StyledIconButton>
            <AccountCircleIcon sx={{ fontSize: "112px" }} />
          </StyledIconButton>
          <Typography
            style={{
              fontFamily: "Courier Prime",
              fontSize: 16,
              color: "#DCDCAA",
              cursor: "pointer",
            }}
          >
            Sign in | Sign up
          </Typography>
        </Box>
        <Divider sx={{ bgcolor: "#fff" }} />
        <List>
          {["Home", "Groups", "Create group"].map((text, index) => (
            <ListItem button key={text}>
              <Typography
                style={{
                  fontFamily: "Courier Prime",
                  fontSize: 20,
                  color: "#858585",
                }}
              >
                {index + 1}&nbsp;
              </Typography>
              <Typography style={{ fontFamily: "Courier Prime", fontSize: 20 }}>
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
      <Container sx={{ p: 2 }}>{children}</Container>
    </>
  );
};

export default MainLayout;
