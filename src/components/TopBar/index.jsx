import styles from "./TopBar.module.scss";
import "antd/dist/antd.css";

import Cart from "../../assets/vectors/Cart.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSearch, FiUser } from "react-icons/fi";

import { Input, Badge, Avatar } from "antd";

function TopBar() {
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

        {false && <FiUser className={styles.iconUser} />}

        <Avatar size={49} className={styles.avatar} />
      </div>
    </div>
  );
}

export default TopBar;
