import styles from "./IndexAdmin.module.scss";

import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BsClipboardData } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectAmountAdmins,
  selectAmountUsers,
} from "../../../redux/user/selector";
import { selectAccessToken } from "../../../redux/auth/selector";
import { selectAmountProducts } from "../../../redux/product/selector";
import { selectAmountOrdersByAdmin } from "../../../redux/orders/selector";

import { getAmountAdmins, getAmountUsers } from "../../../redux/user/action";
import { getAllProducts } from "../../../redux/product/action";
import { getAmountOrdersByAdmin } from "../../../redux/orders/action";

function IndexAdmin() {
  const accessToken = useSelector(selectAccessToken);
  const amountAdmins = useSelector(selectAmountAdmins) ?? 0;
  const amountUsers = useSelector(selectAmountUsers) ?? 0;
  const amountProducts = useSelector(selectAmountProducts) ?? 0;
  const amountOrdersByAdmin = useSelector(selectAmountOrdersByAdmin) ?? 0;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAmountAdmins(accessToken));
  }, []);

  useEffect(() => {
    dispatch(getAmountUsers(accessToken));
  }, []);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    dispatch(getAmountOrdersByAdmin(accessToken));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.icon}>
          <MdOutlineAdminPanelSettings />
        </div>
        <div className={styles.text}>
          <div className={styles.number}>{amountAdmins}</div>
          <div className={styles.info}>Administrators</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.icon}>
          <FiUsers />
        </div>
        <div className={styles.text}>
          <div className={styles.number}>{amountUsers}</div>
          <div className={styles.info}>Customers</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.icon}>
          <BsClipboardData />
        </div>
        <div className={styles.text}>
          <div className={styles.number}>{amountProducts}</div>
          <div className={styles.info}>Products</div>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.icon}>
          <FaOpencart />
        </div>
        <div className={styles.text}>
          <div className={styles.number}>{amountOrdersByAdmin}</div>
          <div className={styles.info}>Orders</div>
        </div>
      </div>
    </div>
  );
}

export default IndexAdmin;
