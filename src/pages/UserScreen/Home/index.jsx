import { Outlet } from "react-router-dom";
import TopBar from "../../../components/TopBar";

function Home() {
  return (
    <div>
      <TopBar />
      <Outlet />
    </div>
  );
}

export default Home;
