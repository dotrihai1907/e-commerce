import React from "react";
import style_css from "./ReviewProduct.module.css";
import style_less from "./ReviewProdcut.module.less";
import { Pagination, Tabs, Rate } from "antd";
const { TabPane } = Tabs;

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectProduct } from "../../redux/product/selector";
import { selectAccessToken } from "../../redux/auth/selector";

import { createReviewProduct } from "../../redux/product/action";

export default function ReviewProduct() {
  const product = useSelector(selectProduct) ?? {};
  const reviews = product.reviews.result;
  const id = product.product.id;

  const accessToken = useSelector(selectAccessToken);

  const [rate, setRate] = useState(5);
  const [write, setWrite] = useState();

  const dispatch = useDispatch();

  const handleCreateReview = () => {
    const review = {
      content: write,
      rating: rate,
      productId: id,
    };
    dispatch(createReviewProduct(accessToken, id, review));
  };

  return (
    <div className={style_css.wrapper_review}>
      <div className={style_less.style_reviewProduct}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Description" key="1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            facilis dolorem praesentium laborum provident voluptate ipsa
            voluptatem, quae atque velit voluptates illo consectetur sint minima
            quam deserunt? Inventore, dolores facilis!
          </TabPane>
          <TabPane tab="Specification" key="2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
            sed! Architecto ea impedit ab quod neque aperiam alias consequuntur
            totam natus illum, corrupti maxime a quae tempore labore dolorum
            porro!
          </TabPane>
          <TabPane tab="Reviews" key="3">
            <div className={style_css.wrapper_review}>
              <h2 className={style_css.heading_review}>Customer Reviews</h2>
              {/* ------------------------------------------- comment */}

              <ul>
                {reviews.map((review, index) => (
                  <li key={index}>
                    <div className="flex mt-[20px] border-b-[2px] border-[#D8D8D8]">
                      <div className="flex-[1_1_8%] mx-[13px] mt-[13px]">
                        <img
                          src={
                            review.userReview.avatar ??
                            "https://joeschmoe.io/api/v1/random"
                          }
                          alt={review.userReview.username}
                          className="w-[56px] h-[56px] object-cover rounded-[50%]"
                        />
                      </div>
                      <div className="flex-[1_1_92%]">
                        <div className={style_css.wrapper_comment}>
                          <h3 className="not-italic text-[18px] leading-[21px] font-bold">
                            {review.userReview.username}
                          </h3>
                          <div className="flex">
                            <Rate
                              disabled
                              defaultValue={Number(review.rating)}
                            />
                          </div>
                          <p className="not-italic font-normal text-[14px] leading-4 text-[#000]">
                            {review.content}
                          </p>
                          <span className="font-bold text-[#5A5A5A] text-3 leading-[14px] not-italic">
                            {review.createdAt.slice(0, 10)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <Pagination
                  defaultCurrent={1}
                  total={50}
                  className={style_less.style_reviewProduct}
                />
              </div>
            </div>
          </TabPane>
        </Tabs>
        <div className={style_css.write_review}>
          <h2 className="font-bold text-[28px] leading-8 text-[#000]">
            Write Review
          </h2>
          <div className="flex my-[10px]">
            <Rate value={rate} onChange={(e) => setRate(e)} />
          </div>
          <textarea
            value={write}
            onChange={(e) => setWrite(e.target.value)}
            placeholder="Write Your Review..."
            className="bg-[#E6E6E6] border-[1px] border-[#6A6A6A] rounded-[5px] px-[15px] py-[12px] h-[83px] w-full mb-[10px]"
          ></textarea>
          <button
            onClick={handleCreateReview}
            className="bg-[#FFD333] rounded-[5px] font-bold text-base leading-[18px] py-[13px] px-[57px]"
          >
            Post Your Review
          </button>
        </div>
      </div>
    </div>
  );
}
