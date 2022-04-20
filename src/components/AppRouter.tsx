import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../pages/about/AboutPage";
import ErrorPage from "../pages/error/ErrorPage";
import CreateGroupPage from "../pages/groups/createGroupPage/CreateGroupPage";
import GroupsPage from "../pages/groups/groupsPage/GroupsPage";
import ViewGroupPage from "../pages/groups/viewGroupPage/ViewGroupPage";
import MainPage from "../pages/main/MainPage";
import CreatePackagePage from "../pages/packages/createPackagePage/CreatePackagePage";
import ViewPackagePage from "../pages/packages/viewPackagePage/ViewPackagePage";
import CreateTredPage from "../pages/treds/createTredPage/CreateTredPage";
import ViewTredPage from "../pages/treds/viewTredPage/ViewTredPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<MainPage />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/groups/create" element={<CreateGroupPage />} />
      <Route path="/groups/:groupId" element={<ViewGroupPage />} />
      <Route path="/groups/:groupId/treds/:tredId" element={<ViewTredPage />} />
      <Route
        path="/groups/:groupId/treds/create"
        element={<CreateTredPage />}
      />
      <Route
        path="/groups/:groupId/treds/:tredId/packages/create"
        element={<CreatePackagePage />}
      />
      <Route
        path="/groups/:groupId/treds/:tredId/packages/:packageId"
        element={<ViewPackagePage />}
      />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
