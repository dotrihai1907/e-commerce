import React from "react";
import style_css from "./ReviewProduct.module.css";
import style_less from "./ReviewProdcut.module.less";
import { Tabs, Rate } from "antd";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
const { TabPane } = Tabs;

import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectProduct } from "../../redux/product/selector";
import { selectAccessToken } from "../../redux/auth/selector";

import { createReviewProduct } from "../../redux/product/action";

export default function ReviewProduct() {
  const product = useSelector(selectProduct) ?? {};
  const reviews = product?.reviews?.result;
  const id = product?.product?.id;

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

  const [first, setFirst] = useState(0);
  const [limit, setLimit] = useState(3);

  let [num, setNum] = useState(1);
  let [cur, setCur] = useState(1);
  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ];
  const next = () => {
    setNum(++num);
  };
  const back = () => {
    num > 1 && setNum(--num);
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
                {reviews.slice(first, limit).map((review, index) => (
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
                            {review.createdAt
                              .slice(0, 10)
                              .split("-")
                              .reverse()
                              .join("/")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center mt-[8px] absolute top-[475px] left-[40%]">
                <button
                  onClick={back}
                  className="w-[32px] h-[32px] text-center  text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] flex justify-center align-middle hover:bg-[#919EAB] hover:text-[#FFD333] "
                >
                  <RiArrowLeftSLine size={20} className="my-auto" />
                </button>

                {pages.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCur(item.page);
                      if (item.page > 1) {
                        setFirst(3 * item.page - 3);
                        setLimit(3 * item.page);
                      } else if (item.page === 1) {
                        setFirst(0);
                        setLimit(3);
                      }
                    }}
                    className={`w-[32px] h-[32px] ml-[8px] text-center text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px] ${
                      cur === item.page && " bg-yellow-400"
                    }`}
                  >
                    {item.page}
                  </button>
                ))}

                <button
                  onClick={next}
                  className="w-[32px] h-[32px] ml-[8px] text-center  text-[14px] font-bold font-sans bg-[#DFE3E8] rounded-[4px]  hover:bg-[#919EAB] hover:text-[#FFD333] flex justify-center align-middle"
                >
                  <RiArrowRightSLine size={20} className="my-auto" />
                </button>
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
