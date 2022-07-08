import "antd/dist/antd.css";
import TopBar from "../../../components/TopBar";
import Login from "../../../components/Login";
import ContentHome from "../../../components/ContentHome";

function HomeLogin() {
  return (
    <div className="relative">
      <Login />
      <TopBar />
      <ContentHome />
    </div>
  );
}

export default HomeLogin;
