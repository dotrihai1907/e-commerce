import "antd/dist/antd.css";
import styles from "./ContentHome.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Col, notification, Button } from "antd";
import Category from "../Category";
import CarouselPhotos from "../CarouselPhotos";
import BenefitCoupon from "../BenefitCoupon";
import ProductCard from "../ProductCard";

import { selectProducts } from "../../redux/product/selector";

import { getAllProducts } from "../../redux/product/action";

function ContentHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectProducts) ?? [];

  const bestSellers = products.filter(
    (product) => Number(product.rating) === 5
  );

  const [numberShow, setNumberShow] = useState(4);

  const productsShow = bestSellers?.slice(0, numberShow);

  const handleShowMore = () => {
    setNumberShow((prev) => prev + 8);
  };

  const key = `open${Date.now()}`;

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

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
        <button onClick={handleShowMore} className={styles.buttonBanner}>
          Show more...
        </button>
      </div>

      <div className={styles.productCard}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ContentHome;
