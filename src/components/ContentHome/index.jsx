import "antd/dist/antd.css";
import styles from "./ContentHome.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Col, Rate } from "antd";
import { BsCartPlus } from "react-icons/bs";

import Category from "../Category";
import CarouselPhotos from "../CarouselPhotos";
import BenefitCoupon from "../BenefitCoupon";

import { selectProducts } from "../../redux/product/selector";

import { getAllProducts, getProduct } from "../../redux/product/action";

function ContentHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector(selectProducts) ?? [];

  const bestSellers = products.filter(
    (product) => Number(product.rating) === 5
  );

  const [numberShow, setNumberShow] = useState(4);

  const handleShowMore = () => {
    setNumberShow((prev) => prev + 8);
  };

  const productsShow = bestSellers?.slice(0, numberShow);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const handleGetProductDetail = (id) => {
    dispatch(getProduct(id));
    navigate("/product-detail");
  };

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

      <ul className={styles.list}>
        {productsShow.map((product) => (
          <li
            key={product.id}
            className={styles.card}
            onClick={() => handleGetProductDetail(product.id)}
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
  );
}

export default ContentHome;
