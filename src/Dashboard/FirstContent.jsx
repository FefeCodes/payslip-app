import DashboardCard from "./DashboardCard";

export default function FirstContent({ stats }) {
  return (
    <div>
      <DashboardCard
        title="Total Employees"
        count={stats?.totalEmployees || 0}
      />
      <DashboardCard title="Total Payslips" count={stats?.totalPayslips || 0} />
      <DashboardCard title="Pending Payslips" count={stats?.totalPayslips} />
    </div>
  );
}
