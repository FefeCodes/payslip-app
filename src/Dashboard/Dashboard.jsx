import FirstContent from "./FirstContent";
import SecondContent from "./SecondContent";
import Footer from "../Footer";
import SideBar from "../SideBar";

export default function Dashboard() {
  return (
    <div>
      <SideBar />
      <div>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back, {user.name}</p>
        </div>
        <FirstContent />
        <SecondContent />
        <Footer />
      </div>
    </div>
  );
}
