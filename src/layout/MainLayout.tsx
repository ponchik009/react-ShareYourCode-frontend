import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Divider from "@mui/material/Divider";

import DrawerHeader from "../components/UI/DrawerHeader";
import StyledIconButton from "../components/UI/StyledIconButton";
import StyledDrawer from "../components/UI/StyledDrawer";

import "./MainLayout.scss";
import UnauthorizedBox from "./UnauthorizedBox";
import NavigationList from "./NavigationList";
import AuthDialog from "../components/AuthDialog/AuthDialog";
import { useDispatch } from "react-redux";
import { getUser, logIn, logOut } from "../store/action/auth";
import UserBox from "./UserBox";

import { api } from "../api/index";

interface ILayoutProps {
  isAuth: boolean;
}

const MainLayout: React.FC<ILayoutProps> = ({ children, isAuth }) => {
  const dispatch = useDispatch();

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [isLoginDialog, setIsLoginDialog] = React.useState(true);

  // открытие шторки
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  // открытие модалки логина
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  // переключение табов модалки
  const handleSignIn = () => {
    handleDialogOpen();
    setIsLoginDialog(true);
  };
  const handleSignUp = () => {
    handleDialogOpen();
    setIsLoginDialog(false);
  };

  // авторизация и выход с аккаута
  const signIn = (email: string, password: string) => {
    return logIn(email, password)(dispatch).then((error) => error);
  };
  const signOut = () => {
    logOut()(dispatch);
  };
  const signUp = async (
    email: string,
    password: string,
    name: string
  ): Promise<string | undefined> => {
    try {
      await api.auth.register(email, password, name);
      logIn(email, password)(dispatch).then((error) => error);
    } catch (err) {
      return "Ошибка авторизации! Возможно, ваша почта уже зарегистрирована!";
    }
  };

  React.useEffect(() => {
    getUser()(dispatch);
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
        <MenuIcon onClick={handleDrawerOpen} sx={{ fontSize: "56px" }} />
      </StyledIconButton>
      <StyledDrawer
        variant="persistent"
        anchor="left"
        open={openDrawer}
        className="drawer"
        onClose={handleDrawerClose}
      >
        <DrawerHeader>
          <StyledIconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </StyledIconButton>
        </DrawerHeader>
        <Divider sx={{ bgcolor: "#fff" }} />
        {isAuth ? (
          <UserBox signOut={signOut} />
        ) : (
          <UnauthorizedBox
            handleSignIn={handleSignIn}
            handleSignUp={handleSignUp}
          />
        )}
        <Divider sx={{ bgcolor: "#fff" }} />
        <NavigationList />
        <Divider sx={{ bgcolor: "#fff" }} />
      </StyledDrawer>
      <AuthDialog
        isOpen={openDialog}
        onClose={handleDialogClose}
        isLogin={isLoginDialog}
        signIn={signIn}
        signUp={signUp}
      />
      <div className="wrapper">{children}</div>
    </div>
  );
};

export default MainLayout;
