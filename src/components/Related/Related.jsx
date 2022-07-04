import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import style_css from "./Related.module.css";
export default function Related() {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <div>
      <div className={style_css.scroll_item}>
        <span className="font-bold text-[24px] leading-[28px] pr-[10px]">
          Related Products
        </span>
        <div className="w-[834px] border-b-[1px] border-[#5A5A5A]"></div>
        <span className="ml-[10px] flex">
          <button
            className="bg-[#C4C4C4] rounded-[5px] mr-2 px-[6px] py-[5.5px]"
            onClick={() => scroll(-500)}
          >
            <IoIosArrowBack />
          </button>

          <button
            className="bg-[#C4C4C4] rounded-[5px] mr-2 px-[6px] py-[5.5px]"
            onClick={() => scroll(500)}
          >
            <IoIosArrowForward />
          </button>
        </span>
      </div>
      {/* ------------------------------- item product */}
      <div className={style_css.wrapper_item_product} ref={ref}>
        <div className="  rounded-[5px] border-[1px] border-[#B4B1B1] mr-5">
          <div className={style_css.item_product}>
            <div className=" w-full h-[236px] pt-[20px] px-[25px] pb-[15px]">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3d0933f855c445fea224aad600bac8b7_9366/Superstar_Shoes_White_EG4958_09_standard.jpg"
                alt="adidas shoes"
                className=" rounded-[5px] shadow-[0.5px_0.5px_12px_rgba(0,0,0,0.25)] w-full h-full block object-cover "
              />
            </div>
            <div className={style_css.product}>
              <h3 className="font-bold text-[32px] leading-[37px]">
                Adidas Shoes
              </h3>
              <span className="font-bold text-[18px] leading-[21px]">
                ID: 123
              </span>
              <div className="flex items-baseline">
                <div className="flex">
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                </div>
                <span className="text-[#D70000] text-[16px] font-bold leading-[18px] ml-[69px]">
                  50% Off
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[24px] leading-[28px] font-bold">
                  $ 120
                </span>
                <span>
                  <BsCartPlus style={{ width: 31, height: 28 }} />
                </span>
              </div>
              <div>
                <button className={style_css.btn_available}>Available</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-[5px] border-[1px] border-[#B4B1B1] mr-5">
          <div className={style_css.item_product}>
            <div className=" w-full h-[236px] pt-[20px] px-[25px] pb-[15px]">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3d0933f855c445fea224aad600bac8b7_9366/Superstar_Shoes_White_EG4958_09_standard.jpg"
                alt="adidas shoes"
                className=" rounded-[5px] shadow-[0.5px_0.5px_12px_rgba(0,0,0,0.25)] w-full h-full block object-cover "
              />
            </div>
            <div className={style_css.product}>
              <h3 className="font-bold text-[32px] leading-[37px]">
                Adidas Shoes
              </h3>
              <span className="font-bold text-[18px] leading-[21px]">
                ID: 123
              </span>
              <div className="flex items-baseline">
                <div className="flex">
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                </div>
                <span className="text-[#D70000] text-[16px] font-bold leading-[18px] ml-[69px]">
                  50% Off
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[24px] leading-[28px] font-bold">
                  $ 120
                </span>
                <span>
                  <BsCartPlus style={{ width: 31, height: 28 }} />
                </span>
              </div>
              <div>
                <button className={style_css.btn_available}>Available</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-[5px] border-[1px] border-[#B4B1B1] mr-5">
          <div className={style_css.item_product}>
            <div className=" w-full h-[236px] pt-[20px] px-[25px] pb-[15px]">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3d0933f855c445fea224aad600bac8b7_9366/Superstar_Shoes_White_EG4958_09_standard.jpg"
                alt="adidas shoes"
                className=" rounded-[5px] shadow-[0.5px_0.5px_12px_rgba(0,0,0,0.25)] w-full h-full block object-cover "
              />
            </div>
            <div className={style_css.product}>
              <h3 className="font-bold text-[32px] leading-[37px]">
                Adidas Shoes
              </h3>
              <span className="font-bold text-[18px] leading-[21px]">
                ID: 123
              </span>
              <div className="flex items-baseline">
                <div className="flex">
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                </div>
                <span className="text-[#D70000] text-[16px] font-bold leading-[18px] ml-[69px]">
                  50% Off
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[24px] leading-[28px] font-bold">
                  $ 120
                </span>
                <span>
                  <BsCartPlus style={{ width: 31, height: 28 }} />
                </span>
              </div>
              <div>
                <button className={style_css.btn_available}>Available</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-[5px] border-[1px] border-[#B4B1B1] mr-5">
          <div className={style_css.item_product}>
            <div className=" w-full h-[236px] pt-[20px] px-[25px] pb-[15px]">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3d0933f855c445fea224aad600bac8b7_9366/Superstar_Shoes_White_EG4958_09_standard.jpg"
                alt="adidas shoes"
                className=" rounded-[5px] shadow-[0.5px_0.5px_12px_rgba(0,0,0,0.25)] w-full h-full block object-cover "
              />
            </div>
            <div className={style_css.product}>
              <h3 className="font-bold text-[32px] leading-[37px]">
                Adidas Shoes
              </h3>
              <span className="font-bold text-[18px] leading-[21px]">
                ID: 123
              </span>
              <div className="flex items-baseline">
                <div className="flex">
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                </div>
                <span className="text-[#D70000] text-[16px] font-bold leading-[18px] ml-[69px]">
                  50% Off
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[24px] leading-[28px] font-bold">
                  $ 120
                </span>
                <span>
                  <BsCartPlus style={{ width: 31, height: 28 }} />
                </span>
              </div>
              <div>
                <button className={style_css.btn_available}>Available</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-[5px] border-[1px] border-[#B4B1B1] mr-5">
          <div className={style_css.item_product}>
            <div className=" w-full h-[236px] pt-[20px] px-[25px] pb-[15px]">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3d0933f855c445fea224aad600bac8b7_9366/Superstar_Shoes_White_EG4958_09_standard.jpg"
                alt="adidas shoes"
                className=" rounded-[5px] shadow-[0.5px_0.5px_12px_rgba(0,0,0,0.25)] w-full h-full block object-cover "
              />
            </div>
            <div className={style_css.product}>
              <h3 className="font-bold text-[32px] leading-[37px]">
                Adidas Shoes
              </h3>
              <span className="font-bold text-[18px] leading-[21px]">
                ID: 123
              </span>
              <div className="flex items-baseline">
                <div className="flex">
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                </div>
                <span className="text-[#D70000] text-[16px] font-bold leading-[18px] ml-[69px]">
                  50% Off
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[24px] leading-[28px] font-bold">
                  $ 120
                </span>
                <span>
                  <BsCartPlus style={{ width: 31, height: 28 }} />
                </span>
              </div>
              <div>
                <button className={style_css.btn_available}>Available</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-[5px] border-[1px] border-[#B4B1B1] mr-5">
          <div className={style_css.item_product}>
            <div className=" w-full h-[236px] pt-[20px] px-[25px] pb-[15px]">
              <img
                src="https://assets.adidas.com/images/w_600,f_auto,q_auto/3d0933f855c445fea224aad600bac8b7_9366/Superstar_Shoes_White_EG4958_09_standard.jpg"
                alt="adidas shoes"
                className=" rounded-[5px] shadow-[0.5px_0.5px_12px_rgba(0,0,0,0.25)] w-full h-full block object-cover "
              />
            </div>
            <div className={style_css.product}>
              <h3 className="font-bold text-[32px] leading-[37px]">
                Adidas Shoes
              </h3>
              <span className="font-bold text-[18px] leading-[21px]">
                ID: 123
              </span>
              <div className="flex items-baseline">
                <div className="flex">
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                  <FaStar
                    style={{
                      color: "#FFD333",
                      width: 16,
                      height: 15,
                      marginRight: 4,
                    }}
                  />
                </div>
                <span className="text-[#D70000] text-[16px] font-bold leading-[18px] ml-[69px]">
                  50% Off
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[24px] leading-[28px] font-bold">
                  $ 120
                </span>
                <span>
                  <BsCartPlus style={{ width: 31, height: 28 }} />
                </span>
              </div>
              <div>
                <button className={style_css.btn_available}>Available</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
