import React from "react";
import style_css from "./ReviewProduct.module.css";
import style_less from "./ReviewProdcut.module.less";
import { Pagination, Tabs } from "antd";
import { FaStar } from "react-icons/fa";
const { TabPane } = Tabs;
export default function ReviewProduct() {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className={style_css.wrapper_review}>
      <div className={style_less.style_reviewProduct}>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Description" key="1">
            Description
          </TabPane>
          <TabPane tab="Scpecification" key="2">
            Scpecification
          </TabPane>
          <TabPane tab="Reviews" key="3">
            <div className={style_css.wrapper_review}>
              <h2 className={style_css.heading_review}>Customer Reviews</h2>
              {/* ------------------------------------------- comment */}
              <div className="flex mt-[20px] border-b-[2px] border-[#D8D8D8]">
                <div className="flex-[1_1_8%] mx-[13px] mt-[13px]">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSrUmi-iyWV7FfbkxKKyiF5o63Xwk1l0Suw&usqp=CAU"
                    alt="customer"
                    className="w-[56px] h-[56px] object-cover rounded-[50%]"
                  />
                </div>
                <div className="flex-[1_1_92%]">
                  <div className={style_css.wrapper_comment}>
                    <h3 className="not-italic text-[18px] leading-[21px] font-bold">
                      Samantha Smith
                    </h3>
                    <div className="flex">
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
                    <p className="not-italic font-normal text-[14px] leading-4 text-[#000]">
                      Phasellus id mattis nulla. Mauris velit nisi, imperdiet
                      vitae sodales in, maximus ut lectus. Vivamus commodo
                      scelerisque lacus, at porttitor dui iaculis id. Curabitur
                      imperdiet ultrices fermentum.
                    </p>
                    <span className="font-bold text-[#5A5A5A] text-3 leading-[14px] not-italic">
                      27 May, 2018
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  border-b-[2px] border-[#D8D8D8]">
                <div className="flex-[1_1_8%] mx-[13px] mt-[13px]">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSrUmi-iyWV7FfbkxKKyiF5o63Xwk1l0Suw&usqp=CAU"
                    alt="customer"
                    className="w-[56px] h-[56px] object-cover rounded-[50%]"
                  />
                </div>
                <div className="flex-[1_1_92%]">
                  <div className={style_css.wrapper_comment}>
                    <h3 className="not-italic text-[18px] leading-[21px] font-bold">
                      Samantha Smith
                    </h3>
                    <div className="flex">
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
                    <p className="not-italic font-normal text-[14px] leading-4 text-[#000]">
                      Phasellus id mattis nulla. Mauris velit nisi, imperdiet
                      vitae sodales in, maximus ut lectus. Vivamus commodo
                      scelerisque lacus, at porttitor dui iaculis id. Curabitur
                      imperdiet ultrices fermentum.
                    </p>
                    <span className="font-bold text-[#5A5A5A] text-3 leading-[14px] not-italic">
                      27 May, 2018
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex  border-b-[2px] border-[#D8D8D8]">
                <div className="flex-[1_1_8%] mx-[13px] mt-[13px]">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSrUmi-iyWV7FfbkxKKyiF5o63Xwk1l0Suw&usqp=CAU"
                    alt="customer"
                    className="w-[56px] h-[56px] object-cover rounded-[50%]"
                  />
                </div>
                <div className="flex-[1_1_92%]">
                  <div className={style_css.wrapper_comment}>
                    <h3 className="not-italic text-[18px] leading-[21px] font-bold">
                      Samantha Smith
                    </h3>
                    <div className="flex">
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
                    <p className="not-italic font-normal text-[14px] leading-4 text-[#000]">
                      Phasellus id mattis nulla. Mauris velit nisi, imperdiet
                      vitae sodales in, maximus ut lectus. Vivamus commodo
                      scelerisque lacus, at porttitor dui iaculis id. Curabitur
                      imperdiet ultrices fermentum.
                    </p>
                    <span className="font-bold text-[#5A5A5A] text-3 leading-[14px] not-italic">
                      27 May, 2018
                    </span>
                  </div>
                </div>
              </div>
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
          <textarea
            placeholder="Write Your Review..."
            className="bg-[#E6E6E6] border-[1px] border-[#6A6A6A] rounded-[5px] px-[15px] py-[12px] h-[83px] w-full mb-[10px]"
          ></textarea>
          <button className="bg-[#FFD333] rounded-[5px] font-bold text-base leading-[18px] py-[13px] px-[57px]">
            Post Your Review
          </button>
        </div>
      </div>
    </div>
  );
}
