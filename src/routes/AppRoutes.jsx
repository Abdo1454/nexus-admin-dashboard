import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import CreateAccount from "../pages/auth/CreateAccount";

function AppRoutes() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<Home />} />

    
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
    

      {/* 404 */}
      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
}

export default AppRoutes;