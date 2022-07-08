import styles from "./ProductsByCategory.module.scss";
import "antd/dist/antd.css";

import { Breadcrumb } from "antd";
import { Rate } from "antd";
import { BsCartPlus } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TopBar from "../../../components/TopBar";

import {
  selectProductsByCategory,
  selectCategory,
} from "../../../redux/product/selector";

import { getProduct } from "../../../redux/product/action";

function ProductsByCategory() {
  const category = useSelector(selectCategory);
  const productsByCategory = useSelector(selectProductsByCategory) ?? [];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(getProduct(id));
    navigate("/product-detail");
  };

  return (
    <div>
      <TopBar />
      <div className={styles.container}>
        <Breadcrumb separator=">" className={styles.navTab}>
          <Breadcrumb.Item>
            <NavLink to="/logged" className={styles.back}>
              Home
            </NavLink>
          </Breadcrumb.Item>

          <Breadcrumb.Item className={styles.current}>
            {category}
          </Breadcrumb.Item>
        </Breadcrumb>

        <ul className={styles.list}>
          {productsByCategory.map((product) => (
            <li
              key={product.id}
              className={styles.card}
              onClick={() => handleClick(product.id)}
            >
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
                  {product.countInStock > 0 ? "Available" : "Sold Out"}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsByCategory;
