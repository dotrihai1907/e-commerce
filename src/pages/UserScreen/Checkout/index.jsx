import "antd/dist/antd.css";
import styles from "./Checkout.module.scss";

import { Breadcrumb, Table, Radio } from "antd";
import { NavLink } from "react-router-dom";

function Checkout() {
  const data = [
    {
      image:
        "https://cdn.tgdd.vn/Files/2022/02/07/1414328/16_1200x675-800-resize.jpg",
      product: {
        name: "Samsung S22 Ultra",
        quantity: 1,
      },
      total: 1200,
    },
  ];

  const columns = [
    {
      title: () => <p className={styles.titleImage}>Image</p>,
      dataIndex: "image",
      key: "image",
      width: "15%",
      render: (image) => (
        <img src={image} alt="Image" className={styles.textImage} />
      ),
    },
    {
      title: () => <p className={styles.titleProduct}>Product</p>,
      dataIndex: "product",
      key: "product",
      render: (product) => (
        <div className={styles.textProduct}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.quantity}>Qty: {product.quantity}</p>
        </div>
      ),
    },
    {
      title: () => <p className={styles.titleTotal}>Total</p>,
      dataIndex: "total",
      key: "total",
      width: "15%",
      render: (total) => <p className={styles.textTotal}>${total}</p>,
    },
  ];
  return (
    <div className={styles.container}>
      <Breadcrumb separator=">" className={styles.navTab}>
        <Breadcrumb.Item>
          <NavLink to="/" className={styles.back}>
            Home
          </NavLink>
        </Breadcrumb.Item>

        <Breadcrumb.Item>
          <NavLink to="/shopping-cart" className={styles.back}>
            Shopping Cart
          </NavLink>
        </Breadcrumb.Item>

        <Breadcrumb.Item className={styles.current}>Checkout</Breadcrumb.Item>
      </Breadcrumb>

      <div className={styles.title}>Checkout</div>

      <div className={styles.content}>
        <div className={styles.productInfo}>
          <Table
            className={styles.table}
            dataSource={data}
            columns={columns}
            pagination={false}
            bordered={false}
          />
        </div>

        <div className={styles.otherInfo}>
          <div className={styles.shipping}>
            <p className={styles.name}>Shipping Information</p>

            <p className={styles.address}>
              Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178
            </p>

            <div className={styles.phone}>
              <p className={styles.textPhone}>Phone Number</p>
              <p className={styles.number}>38 972 588-42-36</p>
            </div>

            <div className={styles.email}>
              <p className={styles.textEmail}>Email Address</p>
              <p className={styles.detailEmail}>stroyka@example.com</p>
            </div>

            <div className={styles.edit}>Edit Address</div>
          </div>

          <div className={styles.checkout}>
            <div className={styles.name}>Checkout</div>

            <div className={styles.infoCheckout}>
              <div className={styles.detailSubtotal1}>
                <p className={styles.textSubtotal1}>Subtotal</p>
                <p className={styles.priceSubtotal1}>$120.00</p>
              </div>

              <div className={styles.detailShipping}>
                <p className={styles.textShipping}>Shipping</p>
                <p className={styles.priceShipping}>$20.00</p>
              </div>

              <hr className={styles.divider} />

              <div className={styles.detailSubtotal2}>
                <p className={styles.textSubtotal2}>Subtotal</p>
                <p className={styles.priceSubtotal2}>$140.00</p>
              </div>
            </div>

            <div className={styles.payment}>
              <Radio.Group name="payment" defaultValue={"Cash on delivery"}>
                <div className={styles.box}>
                  <Radio value="Cash on delivery" className={styles.radio}>
                    <p className={styles.textRadio}>Cash on delivery</p>
                  </Radio>
                </div>

                <div className={styles.box}>
                  <Radio value="Check payments" className={styles.radio}>
                    <p className={styles.textRadio}>Check payments</p>
                  </Radio>
                </div>

                <div className={styles.box}>
                  <Radio value="PayPal" className={styles.radio}>
                    <p className={styles.textRadio}> PayPal</p>
                  </Radio>
                </div>

                <div className={styles.box}>
                  <Radio value="Master Card" className={styles.radio}>
                    <p className={styles.textRadio}>Master Card</p>
                  </Radio>
                </div>
              </Radio.Group>
            </div>

            <button className={styles.button}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
