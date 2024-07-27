import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AuthContext from "../../Pages/context/Authentication";
import useLogin from "../../Pages/hooks/api/useLogin";

const LoginRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useLogin(user?.email);
  const location = useLocation();

  if (user || isAdmin) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  if (loading || !isAdminLoading) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default LoginRoute;
