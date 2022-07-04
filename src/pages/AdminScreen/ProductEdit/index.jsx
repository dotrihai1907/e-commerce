import { Breadcrumb } from "antd";
import CategoriesProduct from "../../../components/CategoriesProduct/CategoriesProduct";
import InfoProduct from "../../../components/InfoProduct/InfoProduct";
import Rating from "../../../components/Rating/Rating";
import UploadAvatar from "../../../components/UploadAvatar/UploadAvatar";
import style_css from "./ProductEdit.module.css";
function ProductEdit() {
  return (
    <div className="content" style={{ height: "100%" }}>
      <div
        className=" px-8 pt-[25px]"
        style={{
          backgroundColor: "#F5F7FA",
          height: "100%",
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item className={style_css.breadcrumb}>
            Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="" className={style_css.breadcrumb}>
              Product
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="" className={style_css.breadcrumb}>
              Update Product
            </a>
          </Breadcrumb.Item>
        </Breadcrumb>

        <div
          className="mb-[35px] mt-[21px]"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <h1 className={style_css.heading}>Update Product #423</h1>
            <span className={style_css.productID}>Product ID : 423</span>
          </div>
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
  );
}

export default ProductEdit;
