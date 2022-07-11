import style_css from "./ProductCreate.module.css";
import styleInfo from "./InfoProduct.module.css";
import styles_css from "./Rating.module.css";

import { Breadcrumb } from "antd";
import { Form, Input, Tag } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import { TweenOneGroup } from "rc-tween-one";

import UploadAvatar from "../../../components/UploadAvatar/UploadAvatar";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { createProduct } from "../../../redux/product/action";

import { selectAccessToken } from "../../../redux/auth/selector";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

function ProductCreate() {
  const accessToken = useSelector(selectAccessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [brand, setBrand] = useState();
  const [countInStock, setCountInStock] = useState();
  const [tags, setTags] = useState([]); // tags === categories
  const [rating, setRating] = useState();

  const productCreate = {
    name,
    brand,
    category: tags[0],
    description,
    price,
    rating,
    countInStock: Number(countInStock),
    imageUrls: ["https://joeschmoe.io/api/v1/random"],
  };

  const handleCreate = () => {
    console.log(accessToken, productCreate);
    dispatch(createProduct(accessToken, productCreate));
  };
  //----------info product--------------------
  const [form] = Form.useForm();

  //-----------------category--------------------

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
      className=" px-8 pt-[25px]"
      style={{
        backgroundColor: "#F5F7FA",
        height: "100%",
      }}
    >
      <Breadcrumb>
        <Breadcrumb.Item className={style_css.breadcrumb}>
          <a
            onClick={() => navigate("/admin")}
            className={style_css.breadcrumb}
          >
            Dashboard
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a
            onClick={() => navigate("/admin/product-list")}
            className={style_css.breadcrumb}
          >
            Product
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className={style_css.breadcrumb}>
          Cretate Product
        </Breadcrumb.Item>
      </Breadcrumb>

      <div
        className="mb-[35px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1 className={style_css.heading}>Create Product</h1>
        <button onClick={handleCreate} className={style_css.addProduct}>
          Add Product
        </button>
      </div>
      <div
        className="container"
        style={{
          width: "100%",
          backgroundColor: "#F5F7FA",
          display: "flex",
          maxHeight: 760,
          height: 760,
        }}
      >
        <div
          className="form mr-5 flex-[1_1_59%] bg-[#fff]"
          style={{
            boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h1
            className="font-bold text-[22px] not-italic , leading-[25px] text-[#000] mb-3 ml-[26px] mt-[18px] "
            style={{ fontFamily: "Arial" }}
          >
            Basic information
          </h1>

          <Form
            {...formItemLayout}
            form={form}
            className="pt-5 px-[32px] border-t border-[#929395]"
            scrollToFirstError
          >
            <div className="form-group">
              <label>Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styleInfo.input}
              />
            </div>
            <div className="form-group mt-[25px]">
              <label>Description </label>
              <TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  height: 112,
                  marginTop: 11,
                  borderRadius: "2px",
                  border: "1px solid #929395",
                  fontFamily: "Arial",
                  fontWeight: 400,
                  fontSize: 18,
                  display: "flex",
                  alignItems: "center",
                  letterSpacing: "-0.02em",
                }}
              />
            </div>
            <div className="form-group flex justify-between mt-[30px]">
              <div className="flex flex-col pr-5" style={{ width: "50%" }}>
                <label>Price</label>
                <Input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  min="0"
                  className={styleInfo.input}
                />
              </div>
              <div className="flex flex-col pl-5" style={{ width: "50%" }}>
                <label>Discount Percent</label>
                <Input type="number" min="0" className={styleInfo.input} />
              </div>
            </div>
            <div className="form-group mt-[35px]">
              <label>Brand</label>
              <Input
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className={styleInfo.input}
              />
            </div>
            <div className="form-group mt-[35px]">
              <label>Stock quantity</label>
              <Input
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                className={styleInfo.input}
              />
            </div>
          </Form>
        </div>

        <div className="other flex flex-col justify-between ml-5 flex-[1_1_37.5%] bg-[#F5F7FA]">
          <UploadAvatar />

          <div
            style={{
              width: "431px",
              background: "#FFFFFF",
              boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
              padding: "10px 0 29px",
            }}
          >
            <div
              style={{
                fontWeight: "700",
                fontSize: "22px",
                lineHeight: "25px",
                margin: "0 0 17px 22px",
              }}
            >
              Category
            </div>
            <hr
              style={{ borderTop: "1px solid #929395", marginBottom: "30px" }}
            />
            <div>
              <TweenOneGroup
                className="ml-[22px]"
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
                  width: "300px",
                  marginLeft: "22px",
                  marginTop: "20px",
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
                className="ml-[22px] mt-[20px] rounded-[2px] bg-white border-dashed w-[100px] flex"
              >
                <PlusOutlined className="mr-[5px] mt-[4px]" /> Change Tag
              </Tag>
            )}
          </div>

          <div
            className="bg-[#fff]"
            style={{
              boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
              height: "31.7%",
            }}
          >
            <h1 className={styles_css.heading}>Rating</h1>
            <hr style={{ borderTop: "1px solid #929395" }} />
            <div
              style={{
                margin: "21px 25px 0",
                borderRadius: 2,
                border: "1px solid #929395",
              }}
            >
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                style={{
                  width: "100%",
                  outline: "none",
                  height: 40,
                  fontSize: 18,
                  fontStyle: "normal",
                  fontFamily: "Work Sans",
                  lineHeight: "21px",
                  paddingLeft: "40px",
                }}
              >
                <option value="1" className={styles_css.option}>
                  1
                </option>
                <option value="2" className={styles_css.option}>
                  2
                </option>
                <option value="3" className={styles_css.option}>
                  3
                </option>
                <option value="4" className={styles_css.option}>
                  4
                </option>
                <option value="5" className={styles_css.option}>
                  5
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;
