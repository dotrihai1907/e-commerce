import "antd/dist/antd.css";
import clsx from "clsx";
import styles from "./Admin.module.scss";

import { MdDashboard } from "react-icons/md";
import {
  FiDatabase,
  FiChevronDown,
  FiChevronUp,
  FiChevronLeft,
  FiUser,
  FiShoppingCart,
  FiSettings,
} from "react-icons/fi";
import { RiMenu2Fill, RiSearchLine } from "react-icons/ri";
import { FaBell } from "react-icons/fa";

import { Input, Badge, Avatar } from "antd";

import { useState } from "react";
import { Outlet } from "react-router-dom";

function Admin() {
  const [hiddenProduct, setHiddenProduct] = useState(true);
  const [hiddenUser, setHiddenUser] = useState(true);
  const [type, setType] = useState();
  const [hide, setHide] = useState(false);
  const [expand, setExpand] = useState(false);
  const DucDepTrai = true;

  const handleClickProduct = () => {
    setHiddenProduct((prev) => !prev);
  };

  const handleClickUser = () => {
    setHiddenUser((prev) => !prev);
  };

  const classNavigation = clsx(styles.navigation, {
    [styles.hide]: hide,
  });

  const classContainer = clsx(styles.container, {
    [styles.expand]: expand,
  });

  const handleClickToggleMenu = () => {
    setHide((prev) => !prev);
    setExpand((prev) => !prev);
  };

  return (
    <div className={styles.dashboard}>
      <div className={classNavigation}>
        <div className={styles.logo}>
          <div className={styles.shopApp}>Shop App</div>
          <div className={styles.admin}>Admin</div>
        </div>

        <div className={styles.menu}>
          <p className={styles.application}>Application</p>

          <ul className={styles.list}>
            <li
              className={styles.item}
              onClick={() => setType("Dashboard")}
              style={type === "Dashboard" ? { backgroundColor: "#FFD333" } : {}}
            >
              <MdDashboard className={styles.icon} />
              <p className={styles.text}>Dashboard</p>
            </li>

            <li>
              <div className={styles.item} onClick={handleClickProduct}>
                <FiDatabase className={styles.icon} />
                <p className={styles.text}>Product</p>
                {hiddenProduct ? (
                  <FiChevronDown className={styles.chevron} />
                ) : (
                  <FiChevronUp className={styles.chevron} />
                )}
              </div>
              {hiddenProduct && (
                <ul>
                  <li
                    className={styles.subitem}
                    onClick={() => setType("Product List")}
                    style={
                      type === "Product List"
                        ? { backgroundColor: "#FFD333" }
                        : {}
                    }
                  >
                    Product List
                  </li>
                  <li
                    className={styles.subitem}
                    onClick={() => setType("Add Product")}
                    style={
                      type === "Add Product"
                        ? { backgroundColor: "#FFD333" }
                        : {}
                    }
                  >
                    Add Product
                  </li>
                </ul>
              )}
            </li>

            <li>
              <div className={styles.item} onClick={handleClickUser}>
                <FiUser className={styles.icon} />
                <p className={styles.text}>User</p>
                {hiddenUser ? (
                  <FiChevronDown className={styles.chevron} />
                ) : (
                  <FiChevronUp className={styles.chevron} />
                )}
              </div>
              {hiddenUser && (
                <ul>
                  <li
                    className={styles.subitem}
                    onClick={() => setType("User List")}
                    style={
                      type === "User List" ? { backgroundColor: "#FFD333" } : {}
                    }
                  >
                    User List
                  </li>
                  <li
                    className={styles.subitem}
                    onClick={() => setType("Add User")}
                    style={
                      type === "Add User" ? { backgroundColor: "#FFD333" } : {}
                    }
                  >
                    Add User
                  </li>
                </ul>
              )}
            </li>

            <li
              className={styles.item}
              onClick={() => setType("Orders")}
              style={type === "Orders" ? { backgroundColor: "#FFD333" } : {}}
            >
              <FiShoppingCart className={styles.icon} />
              <p className={styles.text}>Orders</p>
            </li>

            <li
              className={styles.item}
              onClick={() => setType("Settings")}
              style={type === "Settings" ? { backgroundColor: "#FFD333" } : {}}
            >
              <FiSettings className={styles.icon} />
              <p className={styles.text}>Settings</p>
              <FiChevronLeft className={styles.chevron} />
            </li>
          </ul>
        </div>
      </div>

      <div className={classContainer}>
        <div className={styles.header}>
          <RiMenu2Fill
            className={styles.toggleMenu}
            onClick={handleClickToggleMenu}
          />

          <Input
            prefix={<RiSearchLine />}
            placeholder="Search"
            bordered={false}
            className={styles.search}
          />

          <Badge
            count={
              <div className="bg-[#FFD333] text-black w-[16.61px] h-[16.11px] rounded-[50%] text-center leading-[16.11px] mr-[2px] mt-[2px]">
                2
              </div>
            }
            color="#FFD333"
            className={styles.notify}
          >
            <FaBell className={styles.iconNotify} />
          </Badge>

          <div className={styles.admin}>
            <Avatar shape="square" className={styles.avatar} />
            <div className={styles.info}>
              <p className={styles.name}>Do Tri Hai</p>
              <p className={styles.role}>Admin</p>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
