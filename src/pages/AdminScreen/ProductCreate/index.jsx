import { Breadcrumb } from "antd";
import CategoriesProduct from "../../../components/CategoriesProduct/CategoriesProduct";
import InfoProduct from "../../../components/InfoProduct/InfoProduct";
import Rating from "../../../components/Rating/Rating";
import style_css from "./ProductCreate.module.css";
import UploadAvatar from "../../../components/UploadAvatar/UploadAvatar";

function ProductCreate() {
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
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="" className={style_css.breadcrumb}>
            Product
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="" className={style_css.breadcrumb}>
            Create Product
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div
        className="mb-[35px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1 className={style_css.heading}>Create Product</h1>
        <button className={style_css.addProduct}>Add Product</button>
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
          <h1 className={style_css.heading_info}>Basic information</h1>
          <InfoProduct />
        </div>
        <div className="other flex flex-col justify-between ml-5 flex-[1_1_37.5%] bg-[#F5F7FA]">
          <UploadAvatar avatar={"Images"} />
          <CategoriesProduct />
          <Rating />
        </div>
      </div>
    </div>
  );
}

export default ProductCreate;
