import { useEffect, useState } from "react";
import api from ".api";
import Search from "../Search";

export default function AuditLogTable() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      const response = await api.get("/audit-logs");
      setLogs(response.data.data || response.data);
      setLoading(false);
    } catch (err) {
      alert.error("Failed to fetch logs", err);
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Action</th>
              <th>User</th>
              <th>Description</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.length > 0 ? (
              logs.map((log) => (
                <tr key={log._id || log.id}>
                  <td>{log.action}</td>
                  <td>{log.user?.name || log.performedBy}</td>
                  <td>{log.details || log.description}</td>
                  <td>{new Date(log.createdAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No logs found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
