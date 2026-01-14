import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function SideBar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <div>
        <img src="" alt="logo" />
      </div>
      <div>
        <NavLink to="/dashboard">
          <img src="" alt="Dashboard" />
          <p>Dashboard</p>
        </NavLink>

        <NavLink to="/employees">
          <img src="" alt="Employees" />
          <p>Employees</p>
        </NavLink>

        <NavLink to="/payslips">
          <img src="" alt="" />
          <p>Payslips</p>
        </NavLink>

        <NavLink to="/audit-logs">
          <img src="" alt="" />
          <p>Audit Logs</p>
        </NavLink>

        <NavLink to="/settings">
          <img src="" alt="" />
          <p>Settings</p>
        </NavLink>
      </div>

      <div>
        <div>
          <img src="" alt="" />
          <p>Light Mode</p>
        </div>

        <div>
          <img src="" alt="" />
          <p>Profile</p>
        </div>

        <div onClick={handleLogout}>
          <img src="" alt="" />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  );
}
