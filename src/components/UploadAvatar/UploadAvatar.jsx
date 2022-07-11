import React from "react";

import { message, Upload } from "antd";
import { useState } from "react";
import styleUploadAvatar from "./UploadAvatar.module.css";
import style from "./UploadAvatar.module.less";
import UploadImage from "./asset/Vector.svg";
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }

  const isLt2M = file.size / 1024 / 1024 < 2;

  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }

  return isJpgOrPng && isLt2M;
};

export default function UploadAvatar(props) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  return (
    <div
      className="bg-[#fff]"
      style={{
        boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
        height: "34.2%",
      }}
    >
      <h1 className={styleUploadAvatar.headingImage}>{props.avatar}</h1>
      <hr style={{ borderTop: "1px solid #929395" }} />
      <Upload
        name="avatar"
        listType="picture-card"
        className={style.style_avatar}
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        style={{ margin: "25px" }}
      >
        <img
          src={UploadImage}
          alt="UploadImage"
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      </Upload>
      <div style={{ marginBottom: "26px" }}>
        <input type="file" id="file" className={styleUploadAvatar.inputFile} />
        <div
          style={{
            maxWidth: "87.5%",
            position: "relative",
            height: 40,
            marginLeft: 27,
          }}
        >
          <label htmlFor="file">
            <span className={styleUploadAvatar.fileButton}>Chọn tệp</span>
            <span id="fileName" className={styleUploadAvatar.fileBox}></span>
          </label>
        </div>
      </div>
    </div>
  );
}
