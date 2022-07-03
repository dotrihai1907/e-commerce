import "antd/dist/antd.css";
import styles from "./Home.module.scss";

import { Col } from "antd";

import Category from "../../../components/Category";
import CarouselPhotos from "../../../components/CarouselPhotos";
import BenefitCoupon from "../../../components/BenefitCoupon";
import ProductCard from "../../../components/ProductCard";

function Home() {
  return (
    <div>
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
