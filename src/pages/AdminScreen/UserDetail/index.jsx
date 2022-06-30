import "antd/dist/antd.css";
import styles from "./UserDetail.module.scss";

import { BiCheck } from "react-icons/bi";

import { Breadcrumb, Avatar } from "antd";
import { NavLink } from "react-router-dom";

function UserDetail() {
  return (
    <div className={styles.userDetail}>
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to="/admin/user-list" className={styles.userList}>
            User
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item className={styles.userId}>User #654</Breadcrumb.Item>
      </Breadcrumb>

      <div className={styles.title}>
        <p className={styles.name}>User Detail #654</p>
        <p className={styles.id}>User ID: #654</p>
      </div>

      <div className={styles.detail}>
        <Avatar
          size={238}
          src="https://sre.vn/wp-content/uploads/2020/12/lady-gaga-lan-san-dien-anh-trong-bo-phim-hanh-dong-moi-lady.jpg"
          className={styles.avatar}
        />
        <div className={styles.name}>Lady Gaga</div>
        <div className={styles.email}>ladygaga@gmail.com</div>
        <div className={styles.phone}>0987171626</div>
        <hr className={styles.divider} />

        <div className={styles.content}>
          <div className={styles.role}>
            <p className={styles.textRole}>Role:</p>
            <p className={styles.valueRole}>Admin</p>
          </div>

          <div className={styles.status}>
            <p className={styles.textStatus}>Status:</p>
            <p className={styles.valueStatus}>Active</p>
          </div>

          <div className={styles.verifyEmail}>
            <p className={styles.textVerifyEmail}>Verify Email:</p>
            <BiCheck className={styles.iconVerifyEmail} />
          </div>

          <div className={styles.verifyContact}>
            <p className={styles.textVerifyContact}>Verify Contact:</p>
            <BiCheck className={styles.iconVerifyContact} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
