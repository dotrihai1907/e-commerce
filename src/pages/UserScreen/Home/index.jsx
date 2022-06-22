import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      Home page
      <Outlet />
    </div>
  );
}

export default Home;
