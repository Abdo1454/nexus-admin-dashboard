import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import MobileOverlay from "../components/layout/MobileOverlay";
import Navbar from "../components/layout/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="min-vh-100 bg-light">
        <Navbar />
      {/* Sidebar */}
      <Sidebar />

      {/* Mobile Overlay */}
      <MobileOverlay />

      {/* Main Content Area */}
      <div className="d-flex flex-column min-vh-100">
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-grow-1 p-3 p-md-4">
          <div className="container-fluid">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;