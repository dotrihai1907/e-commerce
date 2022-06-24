import "antd/dist/antd.css";
import styles from "./Admin.module.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FolderOpenOutlined,
  UserOutlined,
  UserAddOutlined,
  ReadOutlined,
  FolderOutlined,
  FolderAddOutlined,
} from "@ant-design/icons";
import { MdDashboard } from "react-icons/md";
import { FiDatabase, FiUser, FiShoppingCart, FiSettings } from "react-icons/fi";

import { Layout, Menu } from "antd";

import { useState } from "react";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

function Admin() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout className="w-[1440px] h-[100vh]">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={styles.sider}
        >
          <div className={styles.logo}>
            <div className="font-red_rose font-[700] w-[140px] h-[34px] mt-[24px] leading-[34px] text-[25px] uppercase ml-[10.13px]">
              Shop app
            </div>
            <div className="rounded-[5px] font-[700] text-[10px] uppercase bg-white ml-[10.87px] h-[18px] mt-[32px] leading-[18px] w-[53.7px] text-center">
              Admin
            </div>
          </div>

          <Menu mode="inline" className={styles.menuBackground}>
            <div className="uppercase ml-[10.13px] h-[58px] text-[#C4C4C4] font-[700] font-arial leading-[58px] not-italic text-[12px]">
              Application
            </div>
            <div className="flex ml-[10.13px] h-[55px] font-arial font-[700] text-[18px] leading-[55px] text-center text-white not-italic">
              <MdDashboard className=" w-[20.19px] h-[55px] pb-[3px] mr-[9.08px]" />
              <div>Dashboard</div>
            </div>
            <Menu.SubMenu
              key="1"
              icon={<FiDatabase className="w-[18.77px] h-[20px] mb-[3px]" />}
              title="Product"
              className={styles.subMenu}
            >
              <Menu.Item key="sub11" className={styles.subItem}>
                Product List
              </Menu.Item>
              <Menu.Item key="sub12" className={styles.subItem}>
                Add Product
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu
              key="2"
              icon={<FiUser className="w-[20.17px] h-[20px] mb-[8px]" />}
              title="User"
              className={styles.subMenu}
            >
              <Menu.Item key="sub21" className={styles.subItem}>
                User List
              </Menu.Item>
              <Menu.Item key="sub22" className={styles.subItem}>
                Add User
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item
              key="3"
              icon={
                <FiShoppingCart className="w-[19.93px] h-[20.83px] mb-[6px]" />
              }
              className={styles.menuItem}
            >
              Order
            </Menu.Item>
            <Menu.Item
              key="4"
              icon={
                <FiSettings className="w-[19.5px] h-[19.5px] mb-[3px] ml-[1px]" />
              }
              className={styles.menuItem}
            >
              Settings
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.site_layout}>
          <Header
            className={styles.site_layout_background}
            style={{
              padding: 0,
            }}
          >
            {collapsed ? (
              <MenuUnfoldOutlined
                className={styles.trigger}
                onClick={() => setCollapsed(!collapsed)}
              />
            ) : (
              <MenuFoldOutlined
                className={styles.trigger}
                onClick={() => setCollapsed(!collapsed)}
              />
            )}
          </Header>
          <Content
            className={styles.site_layout_background}
            style={{
              margin: "16px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Admin;
