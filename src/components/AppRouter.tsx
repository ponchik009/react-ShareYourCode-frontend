import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/about/AboutPage";
import ErrorPage from "../pages/error/ErrorPage";
import CreateGroupPage from "../pages/groups/createGroupPage/CreateGroupPage";
import GroupsPage from "../pages/groups/groupsPage/GroupsPage";
import MainPage from "../pages/main/MainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/groups/create" element={<CreateGroupPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
