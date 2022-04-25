import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IRouteProps {
  isAuth: boolean;
  redirectPath: string;
}

const ProtectedRoute: React.FC<IRouteProps> = ({
  isAuth,
  children,
  redirectPath,
}) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export default ProtectedRoute;
