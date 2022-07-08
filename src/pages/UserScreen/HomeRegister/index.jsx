import "antd/dist/antd.css";
import TopBar from "../../../components/TopBar";
import Register from "../../../components/Register";
import ContentHome from "../../../components/ContentHome";

function HomeRegister() {
  return (
    <div className="relative">
      <Register />
      <TopBar />
      <ContentHome />
    </div>
  );
}

export default HomeRegister;
