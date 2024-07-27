import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AuthContext from "../../Pages/context/Authentication";
import useLogin from "../../Pages/hooks/TokenAPI/useLogin";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useLogin(user?.email);
  const location = useLocation();

  if (loading) {
    return <p>Loading ..</p>;
  }

  if (user || isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
