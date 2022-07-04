import { Radio } from "antd";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import style_css from "./InfoProductDetail.module.css";
import style_less from "./InfoProductDetail.module.less";
export default function InfoProductDetail() {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className={style_css.container}>
      <div className={style_css.image}>
        <div className={style_css.image_main}>
          <img
            className="w-full h-full rounded-[5px]"
            src="https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
            alt="shoes"
          />
        </div>
        <div className={style_css.list_image}>
          <div>
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
              alt="shoes"
            />
          </div>
          <div>
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
              alt="shoes"
            />
          </div>{" "}
          <div>
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
              alt="shoes"
            />
          </div>{" "}
          <div>
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
              alt="shoes"
            />
          </div>{" "}
          <div>
            <img
              src="https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg"
              alt="shoes"
            />
          </div>
        </div>
      </div>
      <div className={style_css.description}>
        <h1 className={style_css.heading_product}>
          SHOES ADIDAS ULTRABOOST 21
        </h1>
        <div className="flex w-[350px] h-[41px] justify-around items-center">
          <div className={style_css.rate}>
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 19,
                margin: "0 4px",
              }}
            />
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 19,
                margin: "0 4px",
              }}
            />{" "}
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 19,
                margin: "0 4px",
              }}
            />{" "}
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 19,
                margin: "0 4px",
              }}
            />{" "}
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 19,
                margin: "0 4px",
              }}
            />
          </div>
          <span className={style_css.numberReview}>150 Reviews</span>
          <span className={style_css.numberSold}>3k Sold</span>
        </div>
        <p className={style_css.descriptionProduct}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          ornare, mi in ornare elementum, libero nibh lacinia urna, quis
          convallis lorem erat at purus. Maecenas eu varius nisi
        </p>

        <div className="border-b-[1px] border-[#737070] mt-5"></div>
        <div className={style_css.availability}>
          <div>
            <span>Availability: </span>
            <span className="text-[#04941B]">In Stock</span>
          </div>
          <span>Brand: Adidas</span>
          <span>SKU: 83690/32</span>
        </div>
        <div className="mt-[30px] flex items-center">
          <span className={style_css.price}>$120.00</span>
          <span className={style_css.sale}>50% Off</span>
        </div>
        <div className={style_css.select_color}>
          <p className="pb-[10px]"> Select Color</p>
          <Radio.Group
            onChange={onChange}
            value={value}
            className={style_less.style_infoProductDetail}
          >
            <Radio value={1}></Radio>
            <Radio value={2}></Radio>
            <Radio value={3}></Radio>
            <Radio value={4}></Radio>
          </Radio.Group>
        </div>
        <div className={style_css.quantity}>
          <p className="py-[10px]">Quantity:</p>
          <div className="flex">
            <div className="bg-[#E2E4E6] border-[1px] border-[#959595] rounded-[5px] flex items-center mr-4">
              <button className="px-[23.5px] py-[11.5px] text-[#33A0FF] text-[20px]">
                -
              </button>
              <input
                type="number"
                value="2"
                className={style_css.inputQuantity}
              />
              <button className="px-[23.5px] py-[11.5px] text-[#33A0FF] text-[20px] ">
                +
              </button>
            </div>
            <button className="flex items-center bg-[#FFD333] rounded-[5px] outline-none px-[29.5px]">
              <BsCartPlus style={{ marginRight: 7 }} /> Add to card
            </button>
          </div>
        </div>
        <div className="mt-[10px]">
          <p className={style_css.titleRate}>Rate:</p>
          <div className={style_css.rate_bottom}>
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 20,
                marginRight: 8,
              }}
            />
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 20,
                marginRight: 8,
              }}
            />
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 20,
                marginRight: 8,
              }}
            />
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 20,
                marginRight: 8,
              }}
            />
            <FaStar
              style={{
                color: "#FFD333",
                width: 20,
                height: 20,
                marginRight: 8,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
