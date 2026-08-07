import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  // Temporary authentication state
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;