import React from "react";
import { Container } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Divider from "@mui/material/Divider";

import DrawerHeader from "../components/UI/DrawerHeader";
import StyledIconButton from "../components/UI/StyledIconButton";
import StyledDrawer from "../components/UI/StyledDrawer";

import "./MainLayout.scss";
import UserBox from "./UserBox";
import NavigationList from "./NavigationList";

const MainLayout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledIconButton sx={{ m: "56px" }}>
        <MenuIcon onClick={handleDrawerOpen} sx={{ fontSize: "56px" }} />
      </StyledIconButton>
      <StyledDrawer variant="persistent" anchor="left" open={open}>
        <DrawerHeader>
          <StyledIconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </StyledIconButton>
        </DrawerHeader>
        <Divider sx={{ bgcolor: "#fff" }} />
        <UserBox />
        <Divider sx={{ bgcolor: "#fff" }} />
        <NavigationList />
        <Divider sx={{ bgcolor: "#fff" }} />
      </StyledDrawer>
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
