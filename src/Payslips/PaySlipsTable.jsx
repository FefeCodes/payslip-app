import Search from "../Search";

export default function PaySlipsTable() {
  return (
    <div>
      <div>
        <Search />
        <div>
          <button>All</button>
          <button>Processing</button>
          <button>Processed</button>
          <button>Completed</button>
          <button>Failed</button>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <th>File Name</th>
            <th>Pay Month</th>
            <th>Files</th>
            <th>Status</th>
            <th>Email Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>FCCAM</td>
            <td>03</td>
            <td>2/12</td>
            <td>Processed</td>
            <td>Completed</td>
            <td>2023-03-15</td>
            <td>
              <button>img</button>
            </td>
          </tr>
          <tr>
            <td>FCCAM</td>
            <td>03</td>
            <td>2/12</td>
            <td>Processed</td>
            <td>Completed</td>
            <td>2023-03-15</td>
            <td>
              <button>img</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
