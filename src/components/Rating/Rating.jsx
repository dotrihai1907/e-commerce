import React from "react";
import style_css from "./Rating.module.css";
// import style_less from "./Rating.module.less";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

export default function Rating() {
  return (
    <div
      className="bg-[#fff]"
      style={{
        boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
        height: "31.7%",
      }}
    >
      <h1 className={style_css.heading}>Rating</h1>
      <hr style={{ borderTop: "1px solid #929395" }} />
      <div
        style={{
          margin: "21px 25px 0",
          borderRadius: 2,
          border: "1px solid #929395",
        }}
      >
        <select
          style={{
            width: "100%",
            border: "1px solid #929395",
            outline: "none",
            height: 40,
            fontSize: 18,
            fontStyle: "normal",
            fontFamily: "Work Sans",
            lineHeight: "21px",
            letterSpacing: "-0.02em",
          }}
        >
          <option value="1" className={style_css.option}>
            1
          </option>
          <option value="2" className={style_css.option}>
            2
          </option>
          <option value="3" className={style_css.option}>
            3
          </option>
          <option value="4" className={style_css.option}>
            4
          </option>
          <option value="5" className={style_css.option}>
            {" "}
            5
          </option>
        </select>
        {/* <Select
          defaultValue="1"
          style={{ width: "100%" }}
          onChange={handleChange}
          className={style_less.style_rating}
        >
          <Option
            value="1"
            style={{
              fontFamily: "Work sans",
              fontWeight: 500,
              fontSize: 18,
              fontStyle: "normal",
              lineHeight: "21px",
              letterSpacing: "-0.02em",

              height: 22,
            }}
          >
            1
          </Option>
          <Option
            value="2"
            style={{
              fontFamily: "Work sans",
              fontWeight: 500,
              fontSize: 18,
              fontStyle: "normal",
              lineHeight: "21px",
              letterSpacing: "-0.02em",
            }}
          >
            2
          </Option>
          <Option
            value="3"
            style={{
              fontFamily: "Work sans",
              fontWeight: 500,
              fontSize: 18,
              fontStyle: "normal",
              lineHeight: "21px",
              letterSpacing: "-0.02em",
            }}
          >
            3
          </Option>
          <Option
            value="4"
            style={{
              fontFamily: "Work sans",
              fontWeight: 500,
              fontSize: 18,
              fontStyle: "normal",
              lineHeight: "21px",
              letterSpacing: "-0.02em",
            }}
          >
            4
          </Option>
          <Option
            value="5"
            style={{
              fontFamily: "Work sans",
              fontWeight: 500,
              fontSize: 18,
              fontStyle: "normal",
              lineHeight: "21px",
              letterSpacing: "-0.02em",
            }}
          >
            5
          </Option>
        </Select> */}
      </div>
    </div>
  );
}
