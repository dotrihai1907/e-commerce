import styles from "./OrderDetail.module.scss";
import "antd/dist/antd.css";

import { MdCalendarToday, MdEditCalendar } from "react-icons/md";

import { Breadcrumb, Divider, Select } from "antd";

import { NavLink } from "react-router-dom";

function OrderDetail() {
  const { Option } = Select;
  return (
    <div className={styles.orderDetail}>
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to="/admin/order-list" className={styles.orderList}>
            Order
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item class={styles.orderId}>Order #789</Breadcrumb.Item>
      </Breadcrumb>

      <div className={styles.title}>
        <p className={styles.name}>Order Detail #789</p>
        <p className={styles.id}>Order ID: #789</p>
      </div>

      <div className={styles.detail}>
        <div className={styles.updateOrder}>
          <div className={styles.date}>
            <div className={styles.created}>
              <MdCalendarToday className={styles.iconCreated} />
              <p className={styles.textCreated}>Created at: 19/07/2022</p>
            </div>
            <div className={styles.updated}>
              <MdEditCalendar className={styles.iconUpdated} />
              <p className={styles.textUpdated}>Updated at: 19/07/2022</p>
            </div>
            <div className={styles.idOrder}>Order ID: 789</div>
          </div>

          <div className={styles.status}>
            <p>Status</p>
            <Select
              size="large"
              defaultValue="Processing"
              className={styles.selectStatus}
            >
              <Option value="Processing">Processing</Option>
              <Option value="Shipping">Shipping</Option>
            </Select>
          </div>

          <div className={styles.paided}>
            <p>Paided</p>
            <Select
              size="large"
              defaultValue="Yes"
              className={styles.selectPaided}
            >
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </div>

          <button className={styles.button}>Update order</button>
        </div>

        <Divider />

        <div className={styles.items}></div>
      </div>
    </div>
  );
}

export default OrderDetail;
