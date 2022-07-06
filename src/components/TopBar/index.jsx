import styles from "./TopBar.module.scss";
import "antd/dist/antd.css";

import Cart from "../../assets/vectors/Cart.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSearch, FiUser } from "react-icons/fi";
import { Input, Badge, Avatar } from "antd";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectAccessToken, selectAvatar } from "../../redux/auth/selector";

function TopBar() {
  const accessToken = useSelector(selectAccessToken);
  const avatar = useSelector(selectAvatar);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.topBar}>
      <div className={styles.top}>
        <p className="ml-[11.32%] mr-[14.2px]">About Us</p>
        <p className="mr-[14.2px]">Contacts</p>
        <p className="mr-[14.2px]">Store</p>
        <p>Track Orders</p>
      </div>

      <div className={styles.main}>
        <div className={styles.name}>Shop App</div>

        <div className={styles.searchBar}>
          <div className={styles.classify}>
            <HiOutlineMenuAlt1 className={styles.iconCategories} />
            <p className={styles.textCategories}>Categories</p>
          </div>

          <Input
            className={styles.input}
            placeholder="Search Items"
            bordered={false}
            suffix={<FiSearch />}
            size="large"
          />
        </div>

        <Badge
          className={styles.badge}
          count={
            <div className="bg-white text-[#8C7211] w-[27px] h-[25.24px] rounded-[50%] text-center leading-[25.24px] ">
              2
            </div>
          }
        >
          <img src={Cart} alt="Cart" className={styles.cart} />
        </Badge>

        {accessToken ? (
          <Avatar size={49} src={avatar} className={styles.avatar} />
        ) : (
          <FiUser className={styles.iconUser} onClick={handleLogin} />
        )}
      </div>
    </div>
  );
}

export default TopBar;
