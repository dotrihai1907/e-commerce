import TopBar from "../../../components/TopBar";
import { Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <TopBar />
      <Outlet />
    </div>
  );
}

export default Navigation;
