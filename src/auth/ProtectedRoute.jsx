import React from "react";
import { Navigate } from "react-router-dom";
import { UseAuth } from "./UseAuth.jsx";
import { Outlet } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { authenticatedSession } = UseAuth();
  console.log("ProtectedRoute: authenticatedSession:", authenticatedSession);

  if (!authenticatedSession) {
    return <Navigate to="/login" replace />;
  }     

  return <Outlet />;
}

export default ProtectedRoute;