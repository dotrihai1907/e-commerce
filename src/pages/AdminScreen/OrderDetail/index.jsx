import styles from "./OrderDetail.module.scss";
import "antd/dist/antd.css";

import { MdCalendarToday, MdEditCalendar } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BsTruck } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";

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
        <Breadcrumb.Item className={styles.orderId}>Order #789</Breadcrumb.Item>
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

        <Divider className={styles.divider} />

        <div className={styles.orderInfo}>
          <div className={styles.customer}>
            <div className={styles.circleCustomer}>
              <FiUser className={styles.iconCustomer} />
            </div>

            <div className={styles.textCustomer}>
              <p className={styles.nameCustomer}>Customer</p>
              <div className={styles.detailCustomer}>
                <p className={styles.lineSpace}>Name: Taylor Swift</p>
                <p className={styles.lineSpace}>Email: taylorswift@gmail.com</p>
                <p className={styles.lineSpace}>Phone: 0394892679</p>
              </div>
            </div>
          </div>

          <div className={styles.shipping}>
            <div className={styles.circleShipping}>
              <BsTruck className={styles.iconShipping} />
            </div>

            <div className={styles.textShipping}>
              <p className={styles.nameShipping}>Order Info</p>
              <div className={styles.detailShipping}>
                <p className={styles.lineSpace}>Status: Processing</p>
                <p className={styles.lineSpace}>Pay method: Online</p>
                <p className={styles.lineSpace}>Paided: Yes</p>
              </div>
            </div>
          </div>

          <div className={styles.address}>
            <div className={styles.circleAddress}>
              <HiOutlineLocationMarker className={styles.iconAddress} />
            </div>

            <div className={styles.textAddress}>
              <p className={styles.nameAddress}>Deliver to</p>
              <div className={styles.detailAddress}>
                <p className={styles.lineSpace}>Address: Ha Noi</p>
                <p className={styles.lineSpace}>Contact: 0948057744</p>
                <p className={styles.lineSpace}>Shipper: GHTK</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.items}></div>
      </div>
    </div>
  );
}

export default OrderDetail;
