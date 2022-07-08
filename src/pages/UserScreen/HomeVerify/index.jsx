import "antd/dist/antd.css";
import TopBar from "../../../components/TopBar";
import Verify from "../../../components/Verify";
import ContentHome from "../../../components/ContentHome";

function HomeVerify() {
  return (
    <div>
      <Verify />
      <TopBar />
      <ContentHome />
    </div>
  );
}

export default HomeVerify;
