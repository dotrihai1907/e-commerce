import { Breadcrumb } from "antd";
import React from "react";
import InfoProductDetail from "../../../components/InfoProductDetail/InfoProductDetail";
import Related from "../../../components/Related/Related";
import ReviewProduct from "../../../components/ReviewProduct/ReviewProduct";
import TopBar from "../../../components/TopBar";
import style_css from "./ProductDetail.module.css";
import style_less from "./ProductDetail.module.less";
export default function ProductDetail() {
  return (
    <div>
      <TopBar />
      <div className={style_css.container}>
        <div className={style_css.wrapper_breadcrumb}>
          <Breadcrumb separator=">" className={style_less.style_productDetail}>
            <Breadcrumb.Item className={style_css.breadcrumb}>
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="" className={style_css.breadcrumb}>
                Shoes
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="" className={style_css.breadcrumb}>
                Adidas Shoes
              </a>
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
