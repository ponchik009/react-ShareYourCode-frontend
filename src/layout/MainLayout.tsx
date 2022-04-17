import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Divider from "@mui/material/Divider";

import DrawerHeader from "../components/UI/DrawerHeader";
import StyledIconButton from "../components/UI/StyledIconButton";
import StyledDrawer from "../components/UI/StyledDrawer";

import "./MainLayout.scss";
import UserBox from "./UserBox";
import NavigationList from "./NavigationList";
import AuthDialog from "../components/AuthDialog/AuthDialog";

type M = MouseEvent & {
  path: Node[];
};

const MainLayout: React.FC = ({ children }) => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [isLoginDialog, setIsLoginDialog] = React.useState(true);

  const handleDrawerOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleSignIn = () => {
    handleDialogOpen();
    setIsLoginDialog(true);
  };
  const handleSignUp = () => {
    handleDialogOpen();
    setIsLoginDialog(false);
  };

  React.useEffect(() => {
    // document.body.onclick = (e: MouseEvent) => {
    //   console.log(e.composedPath());
    // };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <StyledIconButton
        sx={{
          marginLeft: "64px",
          position: "absolute",
          width: "56px",
          height: "56px",
          left: "53px",
          top: "39px",
        }}
      >
        <MenuIcon onClick={handleDrawerOpenDrawer} sx={{ fontSize: "56px" }} />
      </StyledIconButton>
      <StyledDrawer
        variant="persistent"
        anchor="left"
        open={openDrawer}
        className="drawer"
      >
        <DrawerHeader>
          <StyledIconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </StyledIconButton>
        </DrawerHeader>
        <Divider sx={{ bgcolor: "#fff" }} />
        <UserBox handleSignIn={handleSignIn} handleSignUp={handleSignUp} />
        <Divider sx={{ bgcolor: "#fff" }} />
        <NavigationList />
        <Divider sx={{ bgcolor: "#fff" }} />
      </StyledDrawer>
      <AuthDialog
        isOpen={openDialog}
        onClose={handleDialogClose}
        isLogin={isLoginDialog}
      />
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default MainLayout;
