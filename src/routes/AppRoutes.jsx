import { Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

// Pages
// import Dashboard from "../pages/Dashboard/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      {/* Protected Dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              {/* <Dashboard /> */}
            </DashboardLayout>
          }
        />
      </Route>

      {/* Default Route */}
      <Route
        path="/"
        element={<Navigate to="/dashboard" replace />}
      />

      {/* 404 */}
      <Route
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
    </Routes>
  );
}

export default AppRoutes;