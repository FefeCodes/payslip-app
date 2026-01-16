import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function SideBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors ${
      isActive ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"
    }`;

  return (
    <div className="w-64 h-screen border-r border-gray-200 p-5 flex flex-col bg-white">
      <div className="mb-8">
        {/* Placeholder for Logo */}
        <div className="h-8 w-32 bg-gray-200 rounded"></div>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <NavLink to="/dashboard" className={linkClass}>
          {/* Dashboard Icon Placeholder */}
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <p>Dashboard</p>
        </NavLink>

        <NavLink to="/employees" className={linkClass}>
          {/* Employees Icon Placeholder */}
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <p>Employees</p>
        </NavLink>

        <NavLink to="/payslips" className={linkClass}>
          {/* Payslips Icon Placeholder */}
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <p>Payslips</p>
        </NavLink>

        <NavLink to="/audit-logs" className={linkClass}>
          {/* Audit Logs Icon Placeholder */}
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <p>Audit Logs</p>
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          {/* Settings Icon Placeholder */}
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <p>Settings</p>
        </NavLink>
      </div>

      <div className="mt-auto flex flex-col gap-2 border-t pt-4">
        <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-lg text-gray-700">
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <p>Light Mode</p>
        </div>
        <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100 rounded-lg text-gray-700">
          <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
          <p>Profile</p>
        </div>
        <div
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 cursor-pointer hover:bg-red-50 text-red-600 rounded-lg"
        >
          <div className="w-5 h-5 bg-red-200 rounded-full"></div>
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
}
