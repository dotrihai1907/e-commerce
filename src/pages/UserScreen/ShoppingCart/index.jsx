import "antd/dist/antd.css";
import styles from "./ShoppingCart.module.scss";

import { Breadcrumb, Table } from "antd";

import { NavLink } from "react-router-dom";
import { useState } from "react";

import TopBar from "../../../components/TopBar";

function ShoppingCart() {
  const [quantity, setQuantity] = useState(1);

  const data = [
    {
      key: 0,
      image: "http://chupanhnoithat.vn/upload/images/asdawdw.jpg",
      product: "Adidas Shoes",
      price: 120.0,
      quantity: quantity,
      total: 120.0,
    },
  ];

  const columns = [
    {
      title: () => <p className={styles.titleTable}>Image</p>,
      dataIndex: "image",
      render: (image) => <img src={image} className={styles.image} />,
    },
    {
      title: () => <p className={styles.titleTable}>Product</p>,
      dataIndex: "product",
      render: (product) => <p className={styles.product}>{product}</p>,
    },
    {
      title: () => <p className={styles.titleTable}>Price</p>,
      dataIndex: "price",
      render: (price) => <p className={styles.price}>${price}</p>,
    },
    {
      title: () => <p className={styles.titleTable}>Quantity</p>,
      dataIndex: "quantity",
      render: (quantity) => (
        <div className={styles.box}>
          <div
            className={styles.modify}
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            -
          </div>
          <div className={styles.quantity}>{quantity}</div>
          <div
            className={styles.modify}
            onClick={() => setQuantity((next) => next + 1)}
          >
            +
          </div>
        </div>
      ),
    },
    {
      title: () => <p className={styles.titleTable}>Total</p>,
      dataIndex: "total",
      render: (total) => <p className={styles.total}>${total}</p>,
    },
  ];

  return (
    <div>
      <TopBar />
      <div className={styles.container}>
        <Breadcrumb separator=">" className={styles.navTab}>
          <Breadcrumb.Item>
            <NavLink to="/" className={styles.home}>
              Home
            </NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item className={styles.shoppingCart}>
            Shopping Cart
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className={styles.title}>Shopping Cart</div>

        <Table
          className={styles.table}
          dataSource={data}
          columns={columns}
          bordered={false}
          pagination={false}
        />

        <div className={styles.checkout}>
          <div className={styles.coupon}>
            <input placeholder="Coupon Code" className={styles.couponInput} />
            <button className={styles.couponButton}>Apply Coupon</button>
          </div>

          <div className={styles.cartTotals}>
            <div className={styles.fristCart}>Cart Totals</div>

            <div className={styles.mainCart}></div>

            <button className={styles.finalcart}>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
