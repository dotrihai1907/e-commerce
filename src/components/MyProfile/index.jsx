import "antd/dist/antd.css";
import styles from "./MyProfile.module.scss";
import style_less from "./MyProfile.module.less";
import { Avatar, Table, Modal, Divider } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { selectAccessToken } from "../../redux/auth/selector";
import { selectProfile } from "../../redux/user/selector";
import { selectOrders } from "../../redux/orders/selector";

import {
  getProfile,
  changeEmail,
  changeUsername,
  changePassword,
  changeContact,
  changeAvatar,
} from "../../redux/user/action";
import { getOrders } from "../../redux/orders/action";

function MyProfile() {
  const accessToken = useSelector(selectAccessToken);
  const profile = useSelector(selectProfile) ?? {};
  const orders = useSelector(selectOrders) ?? [];

  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [contact, setContact] = useState();
  const [avatar, setAvatar] = useState();

  const handleUpdateEmail = () => {
    dispatch(changeEmail(accessToken, email));
  };

  const handleUpdateUsername = () => {
    dispatch(changeUsername(accessToken, username));
  };

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      Modal.error({
        title: "The two passwords that you entered do not match!",
      });
    } else {
      dispatch(changePassword(accessToken, oldPassword, newPassword));
    }
  };

  const handleUpdateContact = () => {
    dispatch(changeContact(accessToken, contact));
  };

  const handleUpdateAvatar = () => {
    dispatch(changeAvatar(accessToken, avatar));
  };

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    dispatch(getProfile(accessToken));
  }, [accessToken]);

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
        <Avatar
          src={profile.avatar ?? "https://joeschmoe.io/api/v1/random"}
          size={128}
          className={styles.avatar}
        />

        <div className={styles.detail}>
          <div className={styles.name}>{profile.username ?? "Username"}</div>

          <div className={styles.text}>
            <p className={styles.first}>Email:</p>
            <p>{profile.email ?? "xx@gmail.com"}</p>
          </div>

          <div className={styles.text}>
            <p className={styles.first}>Address:</p>
            <p>{profile.address ?? "Milky Way Galaxy"}</p>
          </div>

          <div className={styles.text}>
            <p className={styles.first}>Phone:</p>
            <p>{profile.contact ?? " "}</p>
          </div>

          <button className={styles.buttonEditProfile} onClick={showModal}>
            Edit Profile
          </button>

          <Modal
            className={styles.modal}
            title="Edit Profile"
            visible={visible}
            onCancel={handleCancel}
            footer={[
              <button onClick={handleCancel} className={styles.buttonModal}>
                Cancel
              </button>,
            ]}
          >
            <div className={styles.contentModal}>
              <Divider style={{ margin: "5px" }} orientation="left">
                Email
              </Divider>

              <div className={styles.changeBox}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email@mail.com"
                  type="email"
                  className={styles.inputChange}
                />
                <button
                  className={styles.buttonChange}
                  onClick={handleUpdateEmail}
                >
                  Update
                </button>
              </div>

              <Divider style={{ margin: "5px" }} orientation="left">
                Username
              </Divider>

              <div className={styles.changeBox}>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  type="text"
                  className={styles.inputChange}
                />
                <button
                  className={styles.buttonChange}
                  onClick={handleUpdateUsername}
                >
                  Update
                </button>
              </div>

              <Divider style={{ margin: "5px" }} orientation="left">
                Password
              </Divider>

              <div className={styles.changeBox}>
                <div className="flex flex-col">
                  <input
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Old Password"
                    type="text"
                    className={styles.inputChange}
                  />
                  <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    type="text"
                    className={styles.inputChange}
                  />
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    type="text"
                    className={styles.inputChange}
                  />
                </div>
                <button
                  className={styles.buttonChange}
                  onClick={handleUpdatePassword}
                >
                  Update
                </button>
              </div>

              <Divider style={{ margin: "5px" }} orientation="left">
                Contact
              </Divider>

              <div className={styles.changeBox}>
                <input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Contact"
                  type="text"
                  className={styles.inputChange}
                />
                <button
                  className={styles.buttonChange}
                  onClick={handleUpdateContact}
                >
                  Update
                </button>
              </div>

              <Divider style={{ margin: "5px" }} orientation="left">
                Avatar
              </Divider>

              <div className={styles.changeBox}>
                <input
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  placeholder="Avatar"
                  type="text"
                  className={styles.inputChange}
                />
                <button
                  className={styles.buttonChange}
                  onClick={handleUpdateAvatar}
                >
                  Update
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>

      <div className={style_less.style_table}>
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
    </div>
  );
}

export default MyProfile;
