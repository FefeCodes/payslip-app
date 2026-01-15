import { useEffect, useState } from "react";
import api from "../api";
import Footer from "../Footer";
import Search from "../Search";

export default function EmployeeTable() {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const response = await api.get("/employees");
      setEmployee(response.data.data || response.data);
      setLoading(false);
    } catch (err) {
      alert.error("Failed to fetch employees.", err);
      setError("Could not load employees. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div>
      <Search />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Ippis Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.length > 0 ? (
              employee.map((employee) => (
                <tr key={employee._id || employee.id}>
                  <td>
                    {employee.firstName} {employee.lastName}
                  </td>
                  <td>{employee.email}</td>
                  <td>{employee.ippisNumber}</td>
                  <td>
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No employees found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
