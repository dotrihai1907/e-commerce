import styles from "./CartPopup.module.scss";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartById, selectCarts } from "../../redux/cart/selector";
import { selectAccessToken } from "../../redux/auth/selector";

import { getCartById, deleteItem } from "../../redux/cart/action";

function CartPopup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [flag, setFlag] = useState(false);

  const accessToken = useSelector(selectAccessToken);

  const carts = useSelector(selectCarts) ?? [];
  const idCart = carts[0]?.cart.id;

  const cartById = useSelector(selectCartById) ?? {};
  const items = cartById.items ?? [];

  useEffect(() => {
    dispatch(getCartById(accessToken, idCart));
  }, [accessToken, idCart, flag]);

  const handleDelete = (idItem) => {
    dispatch(deleteItem(accessToken, idItem));
    dispatch(getCartById(accessToken, idCart));
    setFlag(!flag);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className={styles.popup}>
          <div className={styles.product}>
            <img
              src={item.itemCartInfo.images[0].url}
              alt={item.itemCartInfo.name}
              className={styles.image}
            />
            <div className={styles.title}>
              <div className={styles.name}>{item.itemCartInfo.name}</div>
              <div className={styles.quantity}>
                {item.quantity} x ${item.price}
              </div>
            </div>
            <div
              className={styles.delete}
              onClick={() => handleDelete(item.id)}
            >
              x
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.cost}>
            <div className={styles.box}>
              <div className={styles.text}>Subtotal</div>
              <div className={styles.price}>${item.price}</div>
            </div>
            <div className={styles.box}>
              <div className={styles.text}>Shipping</div>
              <div className={styles.price}>$10</div>
            </div>
            <div className={styles.box}>
              <div className={styles.text}>Total</div>
              <div className={styles.price}>
                ${item.quantity * item.price + 10}
              </div>
            </div>
          </div>

          <div className={styles.navigation}>
            <button
              className={styles.view}
              onClick={() => navigate("/shopping-cart")}
            >
              View Cart
            </button>
            <button
              className={styles.checkout}
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CartPopup;
