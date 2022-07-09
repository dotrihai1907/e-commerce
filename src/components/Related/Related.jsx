import React, { useRef, useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import style_css from "./Related.module.css";
import { Rate } from "antd";

import {
  selectProduct,
  selectProductsByCategory,
} from "../../redux/product/selector";

import { getProductsByCategory, getProduct } from "../../redux/product/action";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Related() {
  const product = useSelector(selectProduct) ?? {};
  const category = product.product.category;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductsByCategory(category));
  }, []);

  const productsRelated = useSelector(selectProductsByCategory) ?? [];

  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const handleClick = (id) => {
    dispatch(getProduct(id));
    navigate("/product-detail");
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
        {productsRelated.map((related) => (
          <div
            key={related.id}
            onClick={() => handleClick(related.id)}
            className="cursor-pointer"
          >
            <div className="  rounded-[5px] border-[1px] border-[#B4B1B1] mr-5">
              <div className={style_css.item_product}>
                <div className=" w-full h-[236px] pt-[20px] px-[25px] pb-[15px]">
                  <img
                    src={related.images[0].url}
                    alt={related.name}
                    className=" rounded-[5px] shadow-[0.5px_0.5px_12px_rgba(0,0,0,0.25)] w-full h-full block object-cover "
                  />
                </div>
                <div className={style_css.product}>
                  <h3 className={style_css.name}>{related.name}</h3>
                  <span className="font-bold text-[18px] leading-[21px]">
                    ID: {related.id}
                  </span>
                  <div className="flex items-baseline">
                    <div className="flex">
                      <Rate disabled defaultValue={Number(related.rating)} />
                    </div>
                    <span className="text-[#D70000] text-[16px] font-bold leading-[18px] ml-[50px]">
                      50% Off
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[24px] leading-[28px] font-bold">
                      $ {related.price}
                    </span>
                    <span>
                      <BsCartPlus style={{ width: 31, height: 28 }} />
                    </span>
                  </div>
                  <div>
                    <button className={style_css.btn_available}>
                      {related.countInStock > 0 ? "Available" : "Sold Out"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
