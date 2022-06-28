import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./TableProduct.module.less";
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
      return (
        <p key={Math.random()} id="id">
          1
        </p>
      );
    },
  },
  {
    title: "Product",
    dataIndex: "ProductName",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
    render: () => {
      return (
        <div key={Math.random()} className="flex product">
          <img
            src="https://cdn.elly.vn/uploads/2021/04/21222457/tong-quan-thuong-hieu-giay-adidas.6.jpg"
            alt="shoes"
            className="w-[60px], h-[60px] pr-3"
          />
          <div className="flex flex-col items-start">
            <span className="text-xl leading-[23px] font-normal text-[#000] font-sans">
              Adidas shoes
            </span>
            <span className="font-normal text-[18px] text-[#929395]">
              ID: 123
            </span>
          </div>
        </div>
      );
    },
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
    render: () => {
      return <p key={Math.random()}>Adidas</p>;
    },
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => {
      return <p key={Math.random()}>Sport shoes</p>;
    },
  },
  {
    title: "Stock",
    dataIndex: "stock",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => {
      return <p key={Math.random()}>9 items</p>;
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => {
      return <p key={Math.random()}>$275</p>;
    },
  },
  {
    title: "Rating",
    dataIndex: "rating",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
    render: () => {
      return (
        <div className="flex h-[17px]" key={Math.random()}>
          <FaStar style={{ color: "#FFD333", width: 16, height: 15 }} />
          <FaStar style={{ color: "#FFD333", width: 16, height: 15 }} />
          <FaStar style={{ color: "#FFD333", width: 16, height: 15 }} />
          <FaRegStar style={{ color: "#FFD333", width: 16, height: 15 }} />
          <FaRegStar style={{ color: "#FFD333", width: 16, height: 15 }} />
        </div>
      );
    },
  },
  {
    dataIndex: "action",
    render: () => {
      return (
        <div className="flex" key={Math.random()}>
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

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
export default function TableProductList() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Table
        style={{ width: "100%", backgroundColor: "#fff", height: "100%" }}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        className={styles.style_table}
        pagination={{
          pageSize: 5,
          total: 25,
        }}
      />
      <div style={{ position: "absolute", zIndex: 9, bottom: 45, right: 91 }}>
        <span className=" itemPerPage">Items per page</span>

        <input
          type="number"
          value={5}
          style={{
            border: " 1px solid #929395",
            width: 55,
            height: 25,
            marginLeft: 5,
            textAlign: "center",
          }}
        />
      </div>
    </div>
  );
}
