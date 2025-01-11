import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navabar";

const MainLayout = () => {
  const role = "admin";
  return (
    <div className="flex h-screen">
      <Sidebar role={role} />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
