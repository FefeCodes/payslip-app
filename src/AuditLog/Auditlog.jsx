import Footer from "../Footer";
import SideBar from "../SideBar";
import TopContentCompt from "./TopContentCompt";

export default function AuditLog() {
  return (
    <div>
      <SideBar />
      <div>
        <TopContentCompt />
        <AuditLogTable />
        <Footer />
      </div>
    </div>
  );
}
