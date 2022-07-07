import styles from "./UserDetail.module.scss";
import "antd/dist/antd.css";

import { Breadcrumb } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TopBar from "../../../components/TopBar";

import { logout } from "../../../redux/auth/action";

import {
  selectRefreshToken,
  selectDeviceId,
} from "../../../redux/auth/selector";

const tabs = ["My Profile", "Order History", "Logout"];

function UserDetail() {
  const [type, setType] = useState();

  const refreshToken = useSelector(selectRefreshToken);
  const deviceId = useSelector(selectDeviceId);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (tab) => {
    setType(tab);
    if (tab === "My Profile") {
      navigate("/user-detail/my-profile");
    } else if (tab === "Order History") {
      navigate("/user-detail/order-history");
    } else {
      dispatch(logout(refreshToken, deviceId));
    }
  };

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
                  onClick={() => handleClick(tab)}
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
    </div>
  );
}

export default UserDetail;
