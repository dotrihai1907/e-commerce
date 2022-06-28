import { Breadcrumb } from "antd";
import CategoriesProduct from "../../../components/CategoriesProduct/CategoriesProduct";
import InfoProduct from "../../../components/InfoProduct/InfoProduct";
import Rating from "../../../components/Rating/Rating";
import UploadAvatar from "../../../components/UploadAvatar/UploadAvatar";
import style_css from "./ProductEdit.module.css";
function ProductEdit() {
  return (
    <div
      className="container"
      style={{ height: "1024px", display: "flex", width: "1440px" }}
    >
      <div className="sideBar" style={{ width: "15.625%", maxHeight: "100%" }}>
        sideBar
      </div>
      <div className="content" style={{ width: "84.375%", maxHeight: "100%" }}>
        <div className="navbar" style={{ height: "7.618%", width: "100%" }}>
          navbar
        </div>
        <div
          className=" px-8 pt-[25px]"
          style={{
            backgroundColor: "#F5F7FA",
            height: "92.383%",
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item
              style={{
                fontSize: 18,
                color: "#929395",
                lineHeight: "21px",
                fontFamily: "Arial",
              }}
            >
              Dashboard
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a
                href=""
                style={{
                  fontSize: 18,
                  color: "#929395",
                  lineHeight: "21px",
                  fontFamily: "Arial",
                }}
              >
                Product
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a
                href=""
                style={{
                  fontSize: 18,
                  color: "#929395",
                  lineHeight: "21px",
                  fontFamily: "Arial",
                }}
              >
                Update Product
              </a>
            </Breadcrumb.Item>
          </Breadcrumb>

          <div
            className="mb-[35px] mt-[21px]"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h1 className={style_css.heading}>Update Product #423</h1>
            <button className={style_css.saveProduct}>Save</button>
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
                // width: "59%",
                boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <h1
                className="font-bold text-[22px] not-italic , leading-[25px] text-[#000] mb-3 ml-[26px] mt-[18px] "
                style={{ fontFamily: "Arial" }}
              >
                Basic information
              </h1>
              <InfoProduct />
            </div>
            <div className="other flex flex-col justify-between ml-5 flex-[1_1_37.5%] bg-[#F5F7FA]">
              <UploadAvatar />
              <CategoriesProduct />
              <Rating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
