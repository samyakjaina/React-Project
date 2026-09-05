import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "./UseAuth.jsx";

function ProtectedRoute() {
  const { authenticatedSession, isLoading } = UseAuth();

  if (isLoading) {
    return <p>Checking authentication...</p>;
  }

  if (!authenticatedSession) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;