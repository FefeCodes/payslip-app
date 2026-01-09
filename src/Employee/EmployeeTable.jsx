import Footer from "../Footer";
import Search from "../Search";

export default function EmployeeTable() {
  return (
    <div>
      <Search />
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Ippis Number</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>Ippis01</td>
            <td>
              <img src="" alt="" />
              <img src="" alt="" />
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>Ippis01</td>
            <td>
              <img src="" alt="" />
              <img src="" alt="" />
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>Ippis01</td>
            <td>
              <img src="" alt="" />
              <img src="" alt="" />
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>johndoe@gmail.com</td>
            <td>Ippis01</td>
            <td>
              <img src="" alt="" />
              <img src="" alt="" />
            </td>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
}
