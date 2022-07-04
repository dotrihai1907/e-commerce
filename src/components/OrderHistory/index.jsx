import "antd/dist/antd.css";
import styles from "./OrderHistory.module.scss";
import { Table } from "antd";

function OrderHistory() {
  const data = [
    {
      order: "#123",
      date: "09/03/2022",
      status: "Processing",
      total: 120.0,
    },
    {
      order: "#124",
      date: "09/03/2022",
      status: "Pending",
      total: 120.0,
    },
    {
      order: "#125",
      date: "09/03/2022",
      status: "Completed",
      total: 120.0,
    },
    {
      order: "#126",
      date: "09/03/2022",
      status: "Processing",
      total: 120.0,
    },
    {
      order: "#127",
      date: "09/03/2022",
      status: "Processing",
      total: 120.0,
    },
    {
      order: "#128",
      date: "09/03/2022",
      status: "Processing",
      total: 120.0,
    },
  ];

  const columns = [
    {
      title: () => <p className={styles.titleColumn}>Order</p>,
      dataIndex: "order",
      key: "order",
      render: (order) => <div className={styles.textColumn}>{order}</div>,
    },
    {
      title: () => <p className={styles.titleColumn}>Date</p>,
      dataIndex: "date",
      key: "date",
      render: (date) => <div className={styles.textColumn}>{date}</div>,
    },
    {
      title: () => <p className={styles.titleColumn}>Status</p>,
      dataIndex: "status",
      key: "status",
      render: (status) => <div className={styles.textColumn}>{status}</div>,
    },
    {
      title: () => <p className={styles.titleColumn}>Total</p>,
      dataIndex: "total",
      key: "total",
      render: (total) => <div className={styles.textColumn}>{total}</div>,
    },
  ];
  return (
    <Table
      className={styles.table}
      dataSource={data}
      columns={columns}
      pagination={{
        position: ["bottomCenter"],
        pageSize: "5",
      }}
      bordered={false}
      title={() => <div className={styles.titleTable}>Order History</div>}
    />
  );
}

export default OrderHistory;
