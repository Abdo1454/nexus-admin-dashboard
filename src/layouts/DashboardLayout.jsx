import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
// import Topbar from "../components/layout/Topbar";
import MobileOverlay from "../components/layout/MobileOverlay";

function DashboardLayout() {
  return (
    <div>

      {/* Sidebar */}
      <Sidebar />

      {/* Mobile Overlay */}
      <MobileOverlay />

      {/* Main Content */}
      <div className="d-flex flex-column flex-grow-1 min-vh-100">

        {/* Topbar */}
        {/* <Topbar /> */}

        {/* Page Content */}
        <main className="flex-grow-1 p-3 p-md-4">
          <div className="container-fluid">
            <Outlet />
          </div>
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;