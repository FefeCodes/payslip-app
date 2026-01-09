import Footer from "../Footer";
import SideBar from "../SideBar";
import TopContentCompt from "../TopContentCompt";

export default function PaySlips() {
  return (
    <div>
      <SideBar />
      <div>
        <TopContentCompt />
        <PaySlipsTable />
        <Footer />
      </div>
    </div>
  );
}
