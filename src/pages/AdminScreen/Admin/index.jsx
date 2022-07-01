import "antd/dist/antd.css";
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
  return (
    <div className={styles.dashboard}>
      <div className={styles.navigation}>
        <div className={styles.logo}>
          <div className={styles.shopApp}>Shop App</div>
          <div className={styles.admin}>Admin</div>
        </div>

        <div className={styles.menu}>
          <div className={styles.application}>Application</div>
          <div className={styles.dashboard}>
            <MdDashboard className={styles.iconDashboard} />
            <p>Dashboard</p>
          </div>

          <div className={styles.product}>
            <div className={styles.subMenuProduct}>
              <FiDatabase className={styles.iconProduct} />
              <p>Product</p>
              <FiChevronDown className={styles.iconDownProduct} />
            </div>
            <div className={styles.itemMenuProduct}>
              <div>Product List</div>
              <div>Add Product</div>
            </div>
          </div>

          <div className={styles.user}>
            <div className={styles.subMenuUser}>
              <FiUser className={styles.iconUser} />
              <p>User</p>
              <FiChevronDown className={styles.iconDownUser} />
            </div>
            <div className={styles.itemMenuUser}>
              <div>User List</div>
              <div>Add User</div>
            </div>
          </div>

          <div className={styles.orders}>
            <FiShoppingCart className={styles.iconOrders} />
            <p>Orders</p>
          </div>

          <div className={styles.settings}>
            <FiSettings className={styles.iconSettings} />
            <p>Settings</p>
            <FiChevronLeft className={styles.iconLeftSettings} />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <RiMenu2Fill className={styles.toggleMenu} />

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
