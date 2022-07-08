import "antd/dist/antd.css";
import styles from "./OrderHistory.module.scss";
import { Table } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectAccessToken } from "../../redux/auth/selector";
import { selectOrders } from "../../redux/orders/selector";

import { getOrders } from "../../redux/orders/action";

function OrderHistory() {
  const accessToken = useSelector(selectAccessToken);
  const orders = useSelector(selectOrders) ?? [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders(accessToken));
  }, [accessToken]);

  const data = orders.map((item) => ({
    key: item.id,
    order: item.id,
    date: item.createdAt.slice(0, 10).split("-").reverse().join("/"),
    status: item.status,
    total: item.totalPrice,
  }));

  const columns = [
    {
      title: () => <p className={styles.titleColumn}>Order</p>,
      dataIndex: "order",
      key: "order",
      render: (order) => <div className={styles.textColumn}>#{order}</div>,
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
      render: (total) => <div className={styles.textColumn}>${total}</div>,
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
