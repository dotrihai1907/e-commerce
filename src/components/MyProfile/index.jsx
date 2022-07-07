import "antd/dist/antd.css";
import styles from "./MyProfile.module.scss";

import { Avatar, Table } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { selectAccessToken } from "../../redux/auth/selector";
import { selectProfile } from "../../redux/user/selector";
import { selectOrders } from "../../redux/orders/selector";

import { getProfile } from "../../redux/user/action";
import { getOrders } from "../../redux/orders/action";

function MyProfile() {
  const accessToken = useSelector(selectAccessToken);
  const orders = useSelector(selectOrders);
  const profile = useSelector(selectProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(accessToken));
  }, [accessToken]);

  useEffect(() => {
    dispatch(getOrders(accessToken));
  }, [accessToken]);

  const data = orders.map((item) => ({
    key: item.id,
    order: item.id,
    date: item.createdAt.slice(0, 10),
    status: item.status,
    total: item.totalPrice,
  }));

  const columns = [
    {
      title: () => <p className={styles.titleColumns}>Order</p>,
      dataIndex: "order",
      key: "order",
      render: (order) => <p className={styles.textColumns}>#{order}</p>,
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
        <Avatar src={profile.avatar} size={128} className={styles.avatar} />

        <div className={styles.detail}>
          <div className={styles.name}>{profile.username}</div>

          <div className={styles.text}>
            <p className={styles.first}>Email:</p>
            <p>{profile.email}</p>
          </div>

          <div className={styles.text}>
            <p className={styles.first}>Address:</p>
            <p>{profile.address ?? "Milky Way Galaxy"}</p>
          </div>

          <div className={styles.text}>
            <p className={styles.first}>Phone:</p>
            <p>{profile.contact ?? " "}</p>
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
