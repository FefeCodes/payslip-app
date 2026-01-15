import { useEffect, useState } from "react";
import api from "../api";
import { useAuth } from "../context/AuthContext";
import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import Footer from "../Footer";
import SideBar from "../SideBar";

export default function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalEmployees: 0,
    totalPayslips: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetching aggregate data.
        // If your API has a specific /dashboard endpoint, use that.
        // Otherwise, we fetch individual lists to count.
        const [empRes, payRes, logRes] = await Promise.all([
          api.get("/employees"),
          api.get("/payslips"),
          api.get("/audit-logs?limit=5"),
        ]);

        const employees = empRes.data.data || empRes.data;
        const payslips = payRes.data.data || payRes.data;
        const logs = logRes.data.data || logRes.data;

        setStats({
          totalEmployees: employees.length,
          totalPayslips: payslips.length,
          recentActivity: logs.slice(0, 3),
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div>
      <SideBar />
      <div>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, {user?.firstName || user?.lastName}</p>
        </div>
        <FirstContent stats={stats} />
        <SecondContent activities={stats.recentActivity} />
        <Footer />
      </div>
    </div>
  );
}
