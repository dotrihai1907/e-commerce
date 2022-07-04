import "antd/dist/antd.css";
import styles from "./MyProfile.module.scss";

import { Avatar, Table } from "antd";

function MyProfile() {
  const data = [
    {
      order: "#123",
      date: "09/03/2022",
      status: "Processing",
      total: 120,
    },
    {
      order: "#123",
      date: "09/03/2022",
      status: "Processing",
      total: 120,
    },
    {
      order: "#123",
      date: "09/03/2022",
      status: "Processing",
      total: 120,
    },
    {
      order: "#123",
      date: "09/03/2022",
      status: "Processing",
      total: 120,
    },
    {
      order: "#123",
      date: "09/03/2022",
      status: "Processing",
      total: 120,
    },
  ];

  const columns = [
    {
      title: () => <p className={styles.titleColumns}>Order</p>,
      dataIndex: "order",
      key: "order",
      render: (order) => <p className={styles.textColumns}>{order}</p>,
    },
    {
      title: () => <p className={styles.titleColumns}>Date</p>,
      dataIndex: "date",
      key: "date",
      render: (date) => <p className={styles.textColumns}>{date}</p>,
    },
    {
      title: () => <p className={styles.titleColumns}>Status</p>,
      dataIndex: "status",
      key: "status",
      render: (status) => <p className={styles.textColumns}>{status}</p>,
    },
    {
      title: () => <p className={styles.titleColumns}>Total</p>,
      dataIndex: "total",
      key: "total",
      render: (total) => <p className={styles.textColumns}>${total}</p>,
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.userInfo}>
        <Avatar size={128} className={styles.avatar} />

        <div className={styles.detail}>
          <div className={styles.name}>Ami</div>

          <div className={styles.text}>
            <p className={styles.first}>Email:</p>
            <p>ami@mail.com</p>
          </div>

          <div className={styles.text}>
            <p className={styles.first}>Address:</p>
            <p>test 115302, Hanoi</p>
          </div>

          <div className={styles.text}>
            <p className={styles.first}>Phone:</p>
            <p>+38 972 588-42-36</p>
          </div>

          <button className={styles.button}>Edit Profile</button>
        </div>
      </div>

      <Table
        className={styles.table}
        dataSource={data}
        columns={columns}
        pagination={{
          position: ["bottomCenter"],
          pageSize: "4",
        }}
        bordered={false}
        title={() => <div className={styles.titleTable}>Recent Orders</div>}
      />
    </div>
  );
}

export default MyProfile;
