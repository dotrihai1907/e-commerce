import styles from "./ProductsBySearch.module.scss";
import "antd/dist/antd.css";

import { Rate } from "antd";
import { BsCartPlus } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";

import { useSelector } from "react-redux";

import TopBar from "../../../components/TopBar";

import {
  selectKeyword,
  selectProductsBySearch,
} from "../../../redux/product/selector";

function ProductsBySearch() {
  const keyword = useSelector(selectKeyword);
  const productsBySearch = useSelector(selectProductsBySearch) ?? [];

  return (
    <div>
      <TopBar />
      <div className={styles.container}>
        <div className={styles.note}>
          <FcIdea className={styles.iconNote} />
          <p>
            Search results for keyword{" "}
            <span className="text-[#aa8604]">'{keyword}'</span>
          </p>
        </div>

        <ul className={styles.list}>
          {productsBySearch.map((product) => (
            <li key={product.id} className={styles.card}>
              <img
                src={product.images[0].url}
                alt={product.name}
                className={styles.photoCard}
              />

              <div className={styles.productDescription}>
                <p className={styles.nameProduct}>{product.name}</p>
                <p className={styles.idProduct}>ID: {product.id}</p>

                <div className={styles.detail}>
                  <div className={styles.rate}>
                    <Rate disabled defaultValue={Number(product.rating)} />
                  </div>
                  <div className={styles.sale}>50% Off</div>
                </div>

                <div className={styles.cart}>
                  <div className={styles.price}>$ {product.price}</div>
                  <BsCartPlus className={styles.iconCart} />
                </div>

                <div className={styles.available}>
                  {product.countInStock > 0 ? "Available" : "Sold out"}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsBySearch;
