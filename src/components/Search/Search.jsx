import { Input } from "antd";
import React from "react";
import { RiSearchLine } from "react-icons/ri";
import styles from "./Search.module.less";
import "./Search.module.less";

export default function Search() {
  const onSearch = (value) => console.log(value);
  return (
    <Input
      prefix={<RiSearchLine />}
      className={styles.style_search}
      style={{
        width: "95%",
        height: 51.08,
        border: "1.5px solid #C4C4C4",
        lineHeight: "23px",
        fontSize: "20px",
        color: "#929395",
        fontFamily: "Arial",
        fontStyle: "normal",
        fontWeight: 400,
        marginTop: "4.31%",
        marginBottom: "3.01%",
      }}
      placeholder="Search products"
    />
  );
}
