import { Breadcrumb } from "antd";
import Search from "../../../components/Search/Search";
import TableProductList from "../../../components/TableProduct/TableProduct";
import styleProductList from "./ProductList.module.css";
function ProductDetail() {
  return (
    <div
      className="container"
      style={{ height: "1024px", display: "flex", maxWidth: "100vw" }}
    >
      <div className="sideBar" style={{ width: "15.625%", maxHeight: "100%" }}>
        sideBar
      </div>
      <div className="content" style={{ width: "84.375%", maxHeight: "100%" }}>
        <div className="navbar" style={{ height: "7.618%", width: "100%" }}>
          navbar
        </div>
        <div
          className={styleProductList.userContent}
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
          </Breadcrumb>
          <div
            className="mb-[47px] mt-[21px]"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <h1 className={styleProductList.heading}>Product</h1>
            <button className={styleProductList.addProduct}>New product</button>
          </div>
          <div
            className="content-table"
            style={{
              width: "100%",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: 760,
            }}
          >
            <Search />
            <TableProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
