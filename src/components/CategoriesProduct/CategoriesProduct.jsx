import React from "react";
import style from "./CategoriesProduct.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { Input, Tag, Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
// import style_less from "./Categories.module.less";
import { IoClose } from "react-icons/io5";
export default function CategoriesProduct() {
  const [tags, setTags] = useState(["Sport shoe", "Dance shoe", "Boots"]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }

    setInputVisible(false);
    setInputValue("");
  };

  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setInputValue("");
  };

  return (
    <div
      className="bg-[#fff]"
      style={{
        boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
        height: "24.2%",
      }}
    >
      <h1 className={style.heading}>Categories</h1>
      <hr style={{ borderTop: "1px solid #929395" }} />
      <div className="border-[1px] border-[#929395] my-[28px] mx-[27px]  rounded-sm max-h-[80px] min-h-[80px] flex flex-wrap">
        {tags.map((tag, index) => {
          console.log(tag);
          return (
            <div key={index} className={style.categories}>
              <button>
                <IoClose />
              </button>
              <span>{tag}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
