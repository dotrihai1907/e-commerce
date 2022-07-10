import "antd/dist/antd.css";
import styles from "./ProductCard.module.scss";

import { Rate } from "antd";
import { BsCartPlus } from "react-icons/bs";

import ProductPhoto from "../../assets/vectors/Product Photo.png";

function ProductCard() {
  return (
    <div className={styles.card}>
      <img src={ProductPhoto} alt="Product Card" className={styles.photoCard} />

      <div className={styles.productDescription}>
        <p className={styles.nameProduct}>Adidas Shoes</p>
        <p className={styles.idProduct}>ID: 123</p>

        <div className={styles.detail}>
          <div className={styles.rate}>
            <Rate disabled defaultValue={5} />
          </div>
          <div className={styles.sale}>50% Off</div>
        </div>

        <div className={styles.cart}>
          <div className={styles.price}>$ 120.00</div>
          <BsCartPlus className={styles.iconCart} />
        </div>

        <div className={styles.available}>Available</div>
      </div>
    </div>
  );
}

export default ProductCard;
