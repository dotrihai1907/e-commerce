import styles from "./TopBar.module.scss";
import "antd/dist/antd.css";

import Cart from "../../assets/vectors/Cart.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSearch, FiUser } from "react-icons/fi";
import { Input, Badge, Avatar, Popover } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  selectAccessToken,
  selectAvatar,
  selectRefreshToken,
  selectDeviceId,
} from "../../redux/auth/selector";
import { selectCartById, selectCartId } from "../../redux/cart/selector";

import { getProductsBySearch } from "../../redux/product/action";
import { logout } from "../../redux/auth/action";
import { getCartById } from "../../redux/cart/action";
import CartPopup from "../CartPopup";

function TopBar() {
  const [keyword, setKeyword] = useState();

  const accessToken = useSelector(selectAccessToken);
  const avatar = useSelector(selectAvatar);
  const refreshToken = useSelector(selectRefreshToken);
  const deviceId = useSelector(selectDeviceId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartById = useSelector(selectCartById) ?? {};
  const items = cartById.items ?? [];

  const idCart = useSelector(selectCartId);

  useEffect(() => {
    dispatch(getCartById(accessToken, idCart));
  }, [accessToken, idCart]);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSearch = () => {
    dispatch(getProductsBySearch(keyword));
    navigate("/products-by-search");
  };

  const handleLogout = () => {
    dispatch(logout(refreshToken, deviceId));
  };

  const avatarPopup = () => (
    <div className={styles.textPopover}>
      <p
        className={styles.text}
        onClick={() => navigate("/user-detail/my-profile")}
      >
        My Profile
      </p>
      <p
        className={styles.text}
        onClick={() => navigate("/user-detail/order-history")}
      >
        Order History
      </p>
      <p className={styles.text} onClick={handleLogout}>
        Logout
      </p>
    </div>
  );

  const emptyPopup = () => (
    <div className={styles.emptyPopup}>Your shopping cart is empty!</div>
  );

  return (
    <div className={styles.topBar}>
      <div className={styles.top}>
        <p className="ml-[11.32%] mr-[14.2px]">About Us</p>
        <p className="mr-[14.2px]">Contacts</p>
        <p className="mr-[14.2px]">Store</p>
        <p>Track Orders</p>
      </div>

      <div className={styles.main}>
        <div className={styles.name} onClick={() => navigate("/logged")}>
          Shop App
        </div>

        <div className={styles.searchBar}>
          <div className={styles.classify} onClick={() => navigate("/logged")}>
            <HiOutlineMenuAlt1 className={styles.iconCategories} />
            <p className={styles.textCategories}>Categories</p>
          </div>

          <Input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={styles.input}
            placeholder="Search Items"
            bordered={false}
            suffix={
              <FiSearch
                onClick={handleSearch}
                className="cursor-pointer hover:text-[#aa8604]"
              />
            }
            size="large"
          />
        </div>

        <Popover
          placement="bottomRight"
          trigger="click"
          content={items.length >= 1 ? <CartPopup /> : emptyPopup}
        >
          <Badge
            className={styles.badge}
            count={
              items.length >= 1 ? (
                <div className="bg-white text-[#8C7211] w-[27px] h-[25.24px] rounded-[50%] text-center leading-[25.24px] ">
                  {items.length}
                </div>
              ) : (
                0
              )
            }
          >
            <img src={Cart} alt="Cart" className={styles.cart} />
          </Badge>
        </Popover>

        {accessToken ? (
          <Popover
            placement="bottomRight"
            trigger="click"
            content={avatarPopup}
          >
            <Avatar size={49} src={avatar} className={styles.avatar} />
          </Popover>
        ) : (
          <FiUser className={styles.iconUser} onClick={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default TopBar;
