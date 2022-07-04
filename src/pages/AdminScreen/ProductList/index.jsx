import { Breadcrumb } from "antd";
import Search from "../../../components/Search/Search";
import TableProduct from "../../../components/TableProduct/TableProduct";
import styleProductList from "./ProductList.module.css";
function ProductDetail() {
  return (
    <div className={styleProductList.userContent}>
      <Breadcrumb>
        <Breadcrumb.Item className={styleProductList.breadcrumb}>
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="" className={styleProductList.breadcrumb}>
            Product
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="mb-[47px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1 className={styleProductList.heading}>Product</h1>
        <button className={styleProductList.addProduct}>New product</button>
      </div>
      <div className={styleProductList.contentTable}>
        <Search placeholder={"Search Product"} />
        <TableProduct />
      </div>
    </div>
  );
}

export default ProductDetail;
