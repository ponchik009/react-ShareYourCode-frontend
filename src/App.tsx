import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </div>
  );
}

export default App;
