import "antd/dist/antd.css";
import styles from "./UserDetail.module.scss";

import { BiCheck, BiErrorCircle } from "react-icons/bi";

import { Breadcrumb, Avatar } from "antd";
import { NavLink } from "react-router-dom";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectIdUser, selectUser } from "../../../redux/user/selector";
import { selectAccessToken } from "../../../redux/auth/selector";

import { getUser } from "../../../redux/user/action";

function UserDetail() {
  const idUser = useSelector(selectIdUser);
  const accessToken = useSelector(selectAccessToken);
  const user = useSelector(selectUser) ?? {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(accessToken, idUser));
  }, [idUser, accessToken]);

  return (
    <div className={styles.userDetail}>
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>
          <NavLink to="/admin" className={styles.userList}>
            Dashboard
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to="/admin/user-list" className={styles.userList}>
            User
          </NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item className={styles.userId}>
          User #{idUser}
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className={styles.title}>
        <p className={styles.name}>User Detail #{idUser}</p>
        <p className={styles.id}>User ID: #{idUser}</p>
      </div>

      <div className={styles.detail}>
        <Avatar
          size={238}
          src={user?.avatar ?? "https://joeschmoe.io/api/v1/random"}
          className={styles.avatar}
        />
        <div className={styles.name}>{user.username}</div>
        <div className={styles.email}>{user.email}</div>
        <div className={styles.phone}>{user.contact}</div>
        <hr className={styles.divider} />

        <div className={styles.content}>
          <div className={styles.role}>
            <p className={styles.textRole}>Role:</p>
            <p className={styles.valueRole}>
              {user.role === "admin" ? "Admin" : "User"}
            </p>
          </div>

          <div className={styles.status}>
            <p className={styles.textStatus}>Status:</p>
            <p className={styles.valueStatus}>
              {user.isActive ? "Active" : "Disabled"}
            </p>
          </div>

          <div className={styles.verifyEmail}>
            <p className={styles.textVerifyEmail}>Verify Email:</p>
            {user.isEmailVerified ? (
              <BiCheck className={styles.iconVerifyEmail} />
            ) : (
              <BiErrorCircle className={styles.iconErrorEmail} />
            )}
          </div>

          <div className={styles.verifyContact}>
            <p className={styles.textVerifyContact}>Verify Contact:</p>
            {user.isContactVerified ? (
              <BiCheck className={styles.iconVerifyContact} />
            ) : (
              <BiErrorCircle className={styles.iconErrorContact} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetail;
