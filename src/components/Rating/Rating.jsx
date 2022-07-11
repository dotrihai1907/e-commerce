import React from "react";
import style_css from "./Rating.module.css";

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
            5
          </option>
        </select>
      </div>
    </div>
  );
}
