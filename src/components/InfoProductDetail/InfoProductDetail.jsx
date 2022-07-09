import { Radio } from "antd";
import React, { useState, useEffect } from "react";
import { BsCartPlus } from "react-icons/bs";
import style_css from "./InfoProductDetail.module.css";
import style_less from "./InfoProductDetail.module.less";
import { Rate } from "antd";

import { useSelector, useDispatch } from "react-redux";

import { selectProduct } from "../../redux/product/selector";
import { selectCartId, selectCart } from "../../redux/cart/selector";
import { selectUserId } from "../../redux/auth/selector";
import { selectAccessToken } from "../../redux/auth/selector";

import { createCart, createItem, getCartById } from "../../redux/cart/action";

export default function InfoProductDetail() {
  const product = useSelector(selectProduct) ?? {};
  const name = product.product.name;
  const image = product.product.images[0].url;
  const rating = product.product.rating;
  const numOfReviews = product.product.numOfReviews;
  const description = product.product.description;
  const countInStock = product.product.countInStock;
  const brand = product.product.brand;
  const price = product.product.price;
  const id = product.product.id;

  const [value, setValue] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity >= countInStock) {
      setQuantity(countInStock);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const cartId = useSelector(selectCartId);
  const cart = useSelector(selectCart) ?? [];

  const userId = useSelector(selectUserId);
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    dispatch(getCartById(accessToken, cartId));
  }, [accessToken, cartId, flag]);

  const handleAddToCart = () => {
    const cartItem = {
      cart: {
        totalPrice: 0,
        userId,
      },
      itemArr: [
        {
          productId: id,
          quantity,
          price,
          total: quantity * price,
        },
      ],
    };

    const item = {
      cartId,
      productId: id,
      quantity,
      price,
      total: quantity * price,
    };

    if (!cartId) {
      dispatch(createCart(accessToken, cartItem));
      dispatch(getCartById(accessToken, cartId));
      setFlag(!flag);
    } else if (cartId) {
      dispatch(createItem(accessToken, item));
      dispatch(getCartById(accessToken, cartId));
      setFlag(!flag);
    }
  };

  return (
    <div className={style_css.container}>
      <div className={style_css.image}>
        <div className={style_css.image_main}>
          <img className="w-full h-full rounded-[5px]" src={image} alt={name} />
        </div>
        <div className={style_css.list_image}>
          <div>
            <img src={image} alt={name} />
          </div>
          <div>
            <img src={image} alt={name} />
          </div>{" "}
          <div>
            <img src={image} alt={name} />
          </div>{" "}
          <div>
            <img src={image} alt={name} />
          </div>{" "}
          <div>
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
      <div className={style_css.description}>
        <h1 className={style_css.heading_product}>{name}</h1>
        <div className="flex w-[350px] h-[41px] justify-around items-center">
          <Rate disabled defaultValue={Number(rating)} />

          <span className={style_css.numberReview}>{numOfReviews} Reviews</span>
          <span className={style_css.numberSold}>3k Sold</span>
        </div>
        <p className={style_css.descriptionProduct}>{description}</p>

        <div className="border-b-[1px] border-[#737070] mt-5"></div>
        <div className={style_css.availability}>
          <div>
            <span>Availability: </span>
            <span className="text-[#04941B]">
              {countInStock > 0 ? "In Stock" : "Sold Out"}
            </span>
          </div>
          <span>Brand: {brand}</span>
          <span>SKU: 83690/32</span>
        </div>
        <div className="mt-[30px] flex items-center">
          <span className={style_css.price}>${price}</span>
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
              <button
                onClick={handleDecreaseQuantity}
                className="px-[23.5px] py-[11.5px] text-[#33A0FF] text-[20px]"
              >
                -
              </button>
              <div className={style_css.inputQuantity}>{quantity}</div>
              <button
                onClick={handleIncreaseQuantity}
                className="px-[23.5px] py-[11.5px] text-[#33A0FF] text-[20px] "
              >
                +
              </button>
            </div>
            <button
              onClick={() => handleAddToCart()}
              className="flex items-center bg-[#FFD333] rounded-[5px] outline-none px-[29.5px]"
            >
              <BsCartPlus style={{ marginRight: 7 }} /> Add to cart
            </button>
          </div>
        </div>
        <div className="mt-[10px]">
          <p className={style_css.titleRate}>Rate:</p>
          <div className={style_css.rate_bottom}>
            <Rate disabled defaultValue={Number(rating)} />
          </div>
        </div>
      </div>
    </div>
  );
}
