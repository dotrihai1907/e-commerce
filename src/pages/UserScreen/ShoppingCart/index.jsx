import "antd/dist/antd.css";
import styles from "./ShoppingCart.module.scss";

import { Breadcrumb, Table } from "antd";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TopBar from "../../../components/TopBar";

import { selectCartById } from "../../../redux/cart/selector";
import { selectAccessToken } from "../../../redux/auth/selector";

import {
  getCartById,
  updateItem,
  deleteItem,
} from "../../../redux/cart/action";

function ShoppingCart() {
  const accessToken = useSelector(selectAccessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartById = useSelector(selectCartById) ?? {};
  const idCart = cartById.cart?.id;
  const items = cartById.items ?? [];

  const data = items.map((item) => ({
    key: item.id,
    image: item.itemCartInfo.images[0].url,
    product: item.itemCartInfo.name,
    price: item.price,
    quantity: item.quantity,
    total: item.quantity * item.price,
  }));

  const subtotal = data.reduce((result, data) => result + data.total, 0);
  const shipping = data.length * 10;

  const handleIncreaseQuantity = (quantity, data) => {
    quantity += 1;
    const idItem = data.key;
    dispatch(updateItem(accessToken, idItem, quantity));
    dispatch(getCartById(accessToken, idCart));
  };

  const handleDecreaseQuantity = (quantity, data) => {
    const idItem = data.key;
    if (quantity > 1) {
      quantity -= 1;
      dispatch(updateItem(accessToken, idItem, quantity));
      dispatch(getCartById(accessToken, idCart));
    } else {
      dispatch(deleteItem(accessToken, idItem));
      dispatch(getCartById(accessToken, idCart));
    }
  };

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
      render: (quantity, data) => (
        <div className={styles.box}>
          <div
            className={styles.modify}
            onClick={() => handleDecreaseQuantity(quantity, data)}
          >
            -
          </div>
          <div className={styles.quantity}>{quantity}</div>
          <div
            className={styles.modify}
            onClick={() => handleIncreaseQuantity(quantity, data)}
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
            <div className={styles.firstCart}>Cart Totals</div>

            <div className={styles.mainCart}>
              <div className={styles.subtotal}>
                <p className={styles.textSubtotal}>Subtotal</p>
                <p className={styles.numSubtotal}>${subtotal}</p>
              </div>

              <div className={styles.shipping}>
                <p className={styles.textShipping}>Shipping</p>
                <p className={styles.numShipping}>${shipping}</p>
              </div>

              <div className={styles.total}>
                <p className={styles.textTotal}>Total</p>
                <p className={styles.numTotal}>${subtotal + shipping}</p>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className={styles.finalcart}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
