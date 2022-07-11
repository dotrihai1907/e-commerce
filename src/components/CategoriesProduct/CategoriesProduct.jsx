import { PlusOutlined } from "@ant-design/icons";
import { Input, Tag } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import React, { useEffect, useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { getProduct } from "../../redux/product/action";

import { selectProduct } from "../../redux/product/selector";
import { selectIdProductUpdate } from "../../redux/product/selector";

const CategoriesProduct = () => {
  const idProductUpdate = useSelector(selectIdProductUpdate);
  const product = useSelector(selectProduct);

  const category = product.product.category;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(idProductUpdate));
  }, []);

  const [tags, setTags] = useState([category]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, []);

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
      setTags([inputValue]);
    }

    setInputVisible(false);
    setInputValue("");
  };

  const forMap = (tag) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span
        key={tag}
        style={{
          display: "inline-block",
        }}
      >
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);
  return (
    <div
      style={{
        width: "431px",
        background: "#FFFFFF",
        boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
        padding: "10px 27px 29px",
      }}
    >
      <div
        style={{
          fontWeight: "700",
          fontSize: "22px",
          lineHeight: "25px",
          marginBottom: "30px",
        }}
      >
        Category
      </div>
      <div>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: "from",
            duration: 100,
          }}
          onEnd={(e) => {
            if (e.type === "appear" || e.type === "enter") {
              e.target.style = "display: inline-block";
            }
          }}
          leave={{
            opacity: 0,
            width: 0,
            scale: 0,
            duration: 200,
          }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      {inputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{
            width: 300,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag
          onClick={showInput}
          className=" mt-[20px] rounded-[2px] bg-white border-dashed w-[100px] flex"
        >
          <PlusOutlined className="mr-[5px] mt-[4px]" /> Change Tag
        </Tag>
      )}
    </div>
  );
};

export default CategoriesProduct;
