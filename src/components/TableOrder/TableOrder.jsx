import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import style_css from "./TableOrder.module.css";
import style_less from "./TableOrder.module.less";
import { FaRegStar, FaStar } from "react-icons/fa";
const data = [
  {
    id: "1",
    ProductName: "John Brown",
    brand: 98,
    category: 60,
    english: 70,
  },
  {
    key: "2",
    ProductName: "Jim Green",
    brand: 98,
    category: 66,
    english: 89,
  },
  {
    key: "3",
    ProductName: "Joe Black",
    brand: 98,
    category: 90,
    english: 70,
  },
  {
    key: "4",
    ProductName: "Jim Red",
    brand: 88,
    category: 99,
    english: 89,
  },
  {
    key: "5",
    ProductName: "Jim Red",
    brand: 88,
    category: 99,
    english: 89,
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
    render: () => {
      return <p id="id">1</p>;
    },
  },
  {
    title: "User ID",
    dataIndex: "user_id",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
    render: () => {
      return <p>102</p>;
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
    render: () => {
      return <p>$1562</p>;
    },
  },
  {
    title: "Address",
    dataIndex: "address",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => {
      return <p>Ha Noi</p>;
    },
  },
  {
    title: "Contact",
    dataIndex: "contact",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => {
      return <p>0917253512</p>;
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => {
      return <p>09/03/2022</p>;
    },
  },
  {
    title: "Paided",
    dataIndex: "paided",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => {
      return <span className={style_css.paidedComplete}>Yes</span>;
    },
  },
  {
    title: "Status",
    dataIndex: "stauts",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => {
      return <span>Shipping</span>;
    },
  },
  {
    dataIndex: "action",
    render: () => {
      return (
        <div className="flex">
          <button>
            <FiEdit
              style={{
                color: "#387B18",
                width: 24,
                height: 24,
                marginRight: 12,
              }}
            />
          </button>
          <button>
            <RiDeleteBinLine
              style={{
                color: "#F02020",
                width: 24,
                height: 24,
              }}
            />
          </button>
        </div>
      );
    },
  },
];

// const onChange = (pagination, filters, sorter, extra) => {
//   console.log("params", pagination, filters, sorter, extra);
// };
export default function TableOrder() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Table
        style={{ width: "100%", backgroundColor: "#fff", height: "100%" }}
        columns={columns}
        dataSource={data}
        // onChange={onChange}
        className={style_less.style_table}
        pagination={{
          pageSize: 5,
          total: 25,
        }}
      />
      <div style={{ position: "absolute", zIndex: 9, bottom: 45, right: 91 }}>
        <span className={style_css.itemPerPage}>Items per page</span>

        <input type="number" value={5} className={style_css.numberItem} />
      </div>
    </div>
  );
}
