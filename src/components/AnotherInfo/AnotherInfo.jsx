import { Input, Radio } from "antd";
import React, { useState } from "react";
import style_css from "./AnotherInfo.module.css";
import style_less from "./AnotherInfo.module.less";
export default function AnotherInfo() {
  const [value1, setValue1] = useState("Disabled");
  const [value2, setValue2] = useState("Yes");
  const [value3, setValue3] = useState("Yes");

  const plainOptions1 = ["Active", "Disabled"];
  const plainOptions2 = ["Yes", "No"];
  const plainOptions3 = ["Yes", "No"];
  const onChange1 = ({ target: { value } }) => {
    console.log("radio1 checked", value);
    setValue1(value);
  };
  const onChange2 = ({ target: { value } }) => {
    console.log("radio2 checked", value);
    setValue2(value);
  };
  const onChange3 = ({ target: { value } }) => {
    console.log("radio3 checked", value);
    setValue3(value);
  };
  return (
    <div
      className="bg-[#fff]"
      style={{
        boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
        height: "60.3%",
      }}
    >
      <h1 className={style_css.headingImage}>Another info</h1>
      <hr style={{ borderTop: "1px solid #929395" }} />
      <div className="py-4 px-[27px]">
        <div className={style_less.style_anotherInfo}>
          <p className={style_css.contact}>Contact</p>
          <Input />
        </div>
      </div>

      <div className={style_css.wrapper_radio}>
        <div className={style_less.style_anotherInfo}>
          <div className="flex">
            <span className={style_css.title}>Status</span>
            <Radio.Group
              options={plainOptions1}
              className={style_less.style_anotherInfo}
              onChange={onChange1}
              value={value1}
            />
          </div>
        </div>
        <div className={style_less.style_anotherInfo}>
          <div className="flex">
            <span className={style_css.title}>Verify Email</span>
            <Radio.Group
              options={plainOptions2}
              className={style_less.style_anotherInfo}
              onChange={onChange2}
              value={value2}
            />
          </div>
        </div>
        <div className={style_less.style_anotherInfo}>
          <div className="flex">
            <span className={style_css.title}>Verify Contact</span>
            <Radio.Group
              options={plainOptions3}
              className={style_less.style_anotherInfo}
              onChange={onChange3}
              value={value3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
