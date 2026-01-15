import { useEffect, useState } from "react";
import api from "../api";
import Search from "../Search";

export default function PaySlipsTable() {
  const [payslips, setPayslips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchPayslips();
  }, []);

  const fetchPayslips = async () => {
    try {
      const response = await api.get("/payslips");
      setPayslips(response.data.data || response.data);
      setLoading(false);
    } catch (err) {
      alert.error("Failed to fetch payslips.", err);
      setError("Could not load payslips. Please try again later.");
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Processing":
        return "text-yellow-500";
      case "Processed":
        return "text-blue-500";
      case "Completed":
        return "text-green-500";
      case "Failed":
        return "text-red-500";
      default:
        return "";
    }
  };

  const filteredPayslips =
    filter === "All" ? payslips : payslips.filter((p) => p.status === filter);

  return (
    <div>
      <div>
        <Search />
        <div>
          {["All", "Processing", "Processed", "Completed", "Failed"].map(
            (status) => (
              <button key={status} onClick={() => setFilter(status)}>
                {status}
              </button>
            )
          )}
        </div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Pay Month</th>
              <th>Files</th>
              <th>Status</th>
              <th>Email Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayslips.length > 0 ? (
              filteredPayslips.map((payslip) => (
                <tr key={payslip - _id || payslip.id}>
                  <td>{payslip.fileName || "Payslip"}</td>
                  <td>{payslip.month}</td>
                  <td>{payslip.files}</td>
                  <td>{payslip.status}</td>
                  <td>{payslip.emailStatus}</td>
                  <td>{new Date(payslip.createdAt).toLocaleDateString()}</td>
                  <td>
                    <img src="" alt="" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
