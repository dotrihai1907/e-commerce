import "antd/dist/antd.css";
import styles from "./Home.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Col, notification, Button } from "antd";
import TopBar from "../../../components/TopBar";
import Category from "../../../components/Category";
import CarouselPhotos from "../../../components/CarouselPhotos";
import BenefitCoupon from "../../../components/BenefitCoupon";
import ProductCard from "../../../components/ProductCard";

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
      <div className={styles.content}>
        <div className={styles.introduction}>
          <Col span={6}>
            <Category />
          </Col>
          <Col span={18}>
            <CarouselPhotos />
          </Col>
        </div>

        <div className={styles.benefit}>
          <BenefitCoupon />
          <BenefitCoupon />
          <BenefitCoupon />
          <BenefitCoupon />
        </div>

        <div className={styles.banner}>
          <p className={styles.textBanner}>Bestsellers</p>
          <button className={styles.buttonBanner}>Show more...</button>
        </div>

        <div className={styles.productCard}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
