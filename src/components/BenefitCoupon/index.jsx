import "antd/dist/antd.css";
import styles from "./BenefitCoupon.module.scss";
import Benefit from "../../assets/vectors/Benefit.png";

function BenefitCoupon() {
  return (
    <div className={styles.benefit}>
      <img src={Benefit} className={styles.icon} />
      <div className={styles.text}>
        <p className={styles.name}>Free Shipping</p>
        <p className={styles.description}>For orders from %50</p>
      </div>
    </div>
  );
}

export default BenefitCoupon;
