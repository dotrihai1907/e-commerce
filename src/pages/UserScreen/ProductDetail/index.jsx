import { Breadcrumb } from "antd";
import React from "react";
import InfoProductDetail from "../../../components/InfoProductDetail/InfoProductDetail";
import Related from "../../../components/Related/Related";
import ReviewProduct from "../../../components/ReviewProduct/ReviewProduct";
import TopBar from "../../../components/TopBar";
import style_css from "./ProductDetail.module.css";
import style_less from "./ProductDetail.module.less";

import { selectProduct } from "../../../redux/product/selector";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProductsByCategory } from "../../../redux/product/action";

export default function ProductDetail() {
  const product = useSelector(selectProduct) ?? {};
  const category = product.product?.category;
  const name = product.product?.name;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = () => {
    dispatch(getProductsByCategory(category));
    navigate("/products-by-category");
  };

  return (
    <div>
      <TopBar />
      <div className={style_css.container}>
        <div className={style_css.wrapper_breadcrumb}>
          <Breadcrumb separator=">" className={style_less.style_productDetail}>
            <Breadcrumb.Item>
              <a href="/logged" className={style_css.breadcrumb}>
                Home
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a onClick={handleChange} className={style_css.breadcrumb}>
                {category}
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className={style_css.breadcrumb}>
              {name}
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={style_css.wrapper_content}>
          {/* ------------------------------ info product */}
          <InfoProductDetail />
          {/* ------------------------------ review product */}
          <ReviewProduct />
          {/* ------------------------------ related product */}
          <Related />
        </div>
      </div>
    </div>
  );
}
