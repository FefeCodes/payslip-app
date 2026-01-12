import Search from "../Search";

export default function AuditLogTable() {
  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        <table>
          <tr>
            <th>Action</th>
            <th>User</th>
            <th>Status</th>
            <th>Timestamps</th>
          </tr>
          <tr>
            <td>Login</td>
            <td>Oluwaferanmi Aina</td>
            <td>Success</td>
            <td>2023-03-15</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
