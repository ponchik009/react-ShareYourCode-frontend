import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./components/AppRouter";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import MainLayout from "./layout/MainLayout";
import { logIn } from "./store/action/auth";

function App() {
  const dispatch = useDispatch();
  const { user, isAuth } = useAppSelector((state) => state.auth);

  React.useEffect(() => {
    logIn("user@mail.ru", "qwerty")(dispatch);
  }, []);

  return (
    <div className="App">
      <MainLayout>
        <AppRouter />
      </MainLayout>
      {user && <div>123</div>}
    </div>
  );
}

export default App;
