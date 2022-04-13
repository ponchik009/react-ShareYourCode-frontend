import React, { useEffect } from "react";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/main/MainPage";

function App() {
  return (
    <>
      <div className="App">
        <MainLayout>
          <MainPage />
        </MainLayout>
      </div>
    </>
  );
}

export default App;
