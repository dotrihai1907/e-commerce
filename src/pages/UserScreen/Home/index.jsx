import "antd/dist/antd.css";
import styles from "./Home.module.scss";

import { Outlet } from "react-router-dom";
import { Row, Col } from "antd";

import TopBar from "../../../components/TopBar";
import Category from "../../../components/Category";
import CarouselPhotos from "../../../components/CarouselPhotos";
import BenefitCoupon from "../../../components/BenefitCoupon";
import ProductCard from "../../../components/ProductCard";

function Home() {
  return (
    <div>
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
