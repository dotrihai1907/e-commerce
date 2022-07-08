import "antd/dist/antd.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { notification, Button } from "antd";
import TopBar from "../../../components/TopBar";
import ContentHome from "../../../components/ContentHome";

import {
  selectIsEmailVerified,
  selectDeviceId,
  selectAccessToken,
} from "../../../redux/auth/selector";

import { sendVerificationEmail } from "../../../redux/auth/action";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEmailVerified = useSelector(selectIsEmailVerified);
  const deviceId = useSelector(selectDeviceId);
  const accessToken = useSelector(selectAccessToken);

  const key = `open${Date.now()}`;

  const handleChange = () => {
    dispatch(sendVerificationEmail(accessToken, deviceId));
    navigate("/verify");
    notification.close(key);
  };

  const btn = (
    <Button
      onClick={handleChange}
      className="bg-[#FFD333] font-roboto rounded-[5px] border-transparent hover:bg-white hover:text-[#ffd333] hover:border-[#ffd333]"
    >
      Verify
    </Button>
  );

  return (
    <div>
      {accessToken &&
        !isEmailVerified &&
        notification.open({
          message: "Email Verification",
          description:
            "Your email account is not authenticated. Please click the button below.",
          btn,
          key,
        })}
      <TopBar />
      <ContentHome />
    </div>
  );
}

export default Home;
