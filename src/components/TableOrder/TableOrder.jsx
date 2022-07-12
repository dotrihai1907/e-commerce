import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { FiEdit } from "react-icons/fi";
import style_css from "./TableOrder.module.css";
import style_less from "./TableOrder.module.less";

import Search from "../Search/Search";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectQueryOrdersByAdmin,
  selectAmountOrdersByAdmin,
} from "../../redux/orders/selector";
import { selectAccessToken } from "../../redux/auth/selector";

import {
  getQueryOrdersByAdmin,
  getAmountOrdersByAdmin,
  getIdOrder,
} from "../../redux/orders/action";

export default function TableOrder() {
  const queryOrders = useSelector(selectQueryOrdersByAdmin) ?? [];
  const amountOrders = useSelector(selectAmountOrdersByAdmin);
  const accessToken = useSelector(selectAccessToken);

  const [size, setSize] = useState(5);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //------------update------------------------
  const handleUpdate = (idUpdate) => {
    dispatch(getIdOrder(idUpdate));
    navigate("/admin/order-detail");
  };

  //------------------------------------------

  useEffect(() => {
    dispatch(getAmountOrdersByAdmin(accessToken));
  }, []);

  useEffect(() => {
    dispatch(getQueryOrdersByAdmin(accessToken, size, page));
  }, [size, page]);

  //----------table----------------------
  const data = queryOrders.map((order, index) => ({
    key: order.id,
    id: index + 1,
    userId: order.userId,
    amount: order.totalPrice,
    address: order.address,
    contact: order.contact ?? "09480577xx",
    date: order.createdAt.slice(0, 10).split("-").reverse().join("/"),
    paided: order.isPaided,
    status: order.status,
    idOrder: order.id,
  }));

  const columns = [
    {
      title: () => <div className={style_css.title}>ID</div>,
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      render: (id) => {
        return <p className={style_css.id}>{id}</p>;
      },
    },
    {
      title: () => <div className={style_css.title}>User ID</div>,
      dataIndex: "userId",
      sorter: (a, b) => a.userId - b.userId,
      render: (userId) => <div className={style_css.userId}>{userId}</div>,
    },
    {
      title: () => <div className={style_css.title}>Amount</div>,
      dataIndex: "amount",
      sorter: (a, b) => a.amount - b.amount,
      render: (amount) => <div className={style_css.amount}>${amount}</div>,
    },
    {
      title: () => <div className={style_css.title}>Address</div>,
      dataIndex: "address",
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
      render: (address) => <div className={style_css.address}>{address}</div>,
    },
    {
      title: () => <div className={style_css.title}>Contact</div>,
      dataIndex: "contact",
      sorter: (a, b) => a.contact - b.contact,
      render: (contact) => <div className={style_css.contact}>{contact}</div>,
    },
    {
      title: () => <div className={style_css.title}>Date</div>,
      dataIndex: "date",
      sorter: (a, b) => a.date - b.date,
      render: (date) => <div className={style_css.date}>{date}</div>,
    },
    {
      title: () => <div className={style_css.title}>Paided</div>,
      dataIndex: "paided",
      sorter: (a, b) => a.paided - b.paided,
      render: (paided) => (
        <div>
          {paided ? (
            <div className={style_css.yes}>Yes</div>
          ) : (
            <div className={style_css.no}>No</div>
          )}
        </div>
      ),
    },
    {
      title: () => <div className={style_css.title}>Status</div>,
      dataIndex: "status",
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend", "ascend"],
      render: (status) => <div className={style_css.status}>{status}</div>,
    },
    {
      dataIndex: "idOrder",
      render: (idOrder) => (
        <div className="flex">
          <button onClick={() => handleUpdate(idOrder)}>
            <FiEdit
              style={{
                color: "#387B18",
                width: 24,
                height: 24,
              }}
            />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <Search placeholder={"Search Product"} />
      <div style={{ width: "100%", position: "relative" }}>
        <Table
          style={{ width: "100%", backgroundColor: "#fff", height: "100%" }}
          columns={columns}
          dataSource={data}
          className={style_less.style_table}
          pagination={{
            pageSize: Number(size),
            total: Number(amountOrders),
            onChange: (e) => setPage(e),
          }}
        />
        <div className="absolute bottom-[20px] right-[31px]">
          <span className={style_css.itemPerPage}>Items per page</span>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className={style_css.numberItem}
          />
        </div>
      </div>
    </div>
  );
}
