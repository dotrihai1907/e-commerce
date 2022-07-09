import "antd/dist/antd.css";
import styles from "./Checkout.module.scss";

import { Breadcrumb, Table, Radio, Modal } from "antd";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import TopBar from "../../../components/TopBar";

import { selectCartById, selectCartId } from "../../../redux/cart/selector";
import { selectAccessToken } from "../../../redux/auth/selector";
import { selectProfile } from "../../../redux/user/selector";

import { getProfile } from "../../../redux/user/action";
import { createOrder } from "../../../redux/orders/action";
import { deleteCart, getCartById } from "../../../redux/cart/action";

function Checkout() {
  const accessToken = useSelector(selectAccessToken);

  const dispatch = useDispatch();

  //-----------------profile--------------
  const profile = useSelector(selectProfile) ?? {};

  const [address, setAddress] = useState(
    "Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178"
  );

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleUpdateAddress = () => {
    Modal.success({
      title: "Update address successfully",
    });
    setVisible(false);
  };

  useEffect(() => {
    dispatch(getProfile(accessToken));
  }, [accessToken]);

  //------------cart----------------------

  const cartById = useSelector(selectCartById) ?? {};
  const cartId = useSelector(selectCartId);
  const items = cartById.items ?? [];
  const userId = cartById.cart.userId;

  const data = items.map((item) => ({
    key: item.id,
    image: item.itemCartInfo.images[0].url,
    product: {
      name: item.itemCartInfo.name,
      quantity: item.quantity,
    },
    total: item.quantity * item.price,
  }));

  const subtotal = data.reduce((result, data) => result + data.total, 0);
  const shipping = data.length * 10;

  const itemArr = items.map((item) => ({
    productId: item.itemCartInfo.id,
    quantity: item.quantity,
    price: item.price,
    total: item.quantity * item.price,
  }));

  // -------------order--------------------------------
  const [paymentMethod, setPaymentMethod] = useState();

  const onChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    const newOrder = {
      order: {
        paymentMethod,
        address,
        contact: profile.contact,
        totalPrice: subtotal + shipping,
        userId,
      },
      itemArr,
    };
    dispatch(createOrder(accessToken, newOrder));
    // dispatch(deleteCart(accessToken, cartId));
  };

  //---------------------------------------------
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
    <div>
      <TopBar />
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

              <p className={styles.address}>{address}</p>

              <div className={styles.phone}>
                <p className={styles.textPhone}>Phone Number</p>
                <p className={styles.number}>{profile.contact ?? " "}</p>
              </div>

              <div className={styles.email}>
                <p className={styles.textEmail}>Email Address</p>
                <p className={styles.detailEmail}>
                  {profile.email ?? "xx@gmail.com"}
                </p>
              </div>

              <div onClick={showModal} className={styles.edit}>
                Edit Address
              </div>

              <Modal
                className={styles.modal}
                title="Edit Address"
                visible={visible}
                onCancel={handleCancel}
                footer={[
                  <button onClick={handleCancel} className={styles.buttonModal}>
                    Cancel
                  </button>,
                ]}
              >
                <div className={styles.contentModal}>
                  <div className={styles.changeBox}>
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      type="text"
                      className={styles.inputChange}
                    />
                    <button
                      className={styles.buttonChange}
                      onClick={handleUpdateAddress}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </Modal>
            </div>

            <div className={styles.checkout}>
              <div className={styles.name}>Checkout</div>

              <div className={styles.infoCheckout}>
                <div className={styles.detailSubtotal1}>
                  <p className={styles.textSubtotal1}>Subtotal</p>
                  <p className={styles.priceSubtotal1}>${subtotal}</p>
                </div>

                <div className={styles.detailShipping}>
                  <p className={styles.textShipping}>Shipping</p>
                  <p className={styles.priceShipping}>${shipping}</p>
                </div>

                <hr className={styles.divider} />

                <div className={styles.detailSubtotal2}>
                  <p className={styles.textSubtotal2}>Subtotal</p>
                  <p className={styles.priceSubtotal2}>
                    ${subtotal + shipping}
                  </p>
                </div>
              </div>

              <div className={styles.payment}>
                <Radio.Group
                  onChange={onChange}
                  value={paymentMethod}
                  name="payment"
                  defaultValue={"Cash on delivery"}
                >
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

              <button onClick={handleCheckout} className={styles.button}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
