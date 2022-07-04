import styles from "./UserDetail.module.scss";
import "antd/dist/antd.css";

import { Breadcrumb } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";

const tabs = ["My Profile", "Order History", "Logout"];

function UserDetail() {
  const [type, setType] = useState();
  return (
    <div class={styles.container}>
      <Breadcrumb separator=">" className={styles.navTab}>
        <Breadcrumb.Item>
          <NavLink to="/" className={styles.home}>
            Home
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item className={styles.myAccount}>
          My Account
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className={styles.title}>My Account</div>

      <div className={styles.content}>
        <div className={styles.leftNavbar}>
          <div className={styles.navigation}>Navigation</div>
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab}
                className={styles.text}
                onClick={() => setType(tab)}
                style={type === tab ? { color: "#ffd333" } : {}}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.detail}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
