import { Breadcrumb } from "antd";
import TableProduct from "../../../components/TableProduct/TableProduct";
import styleProductList from "./ProductList.module.css";

import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const navigate = useNavigate();

  const handleClickDashboard = () => {
    navigate("/admin");
  };

  const handleClickNewProduct = () => {
    navigate("/admin/product-create");
  };

  return (
    <div className={styleProductList.userContent}>
      <Breadcrumb>
        <Breadcrumb.Item className={styleProductList.breadcrumb}>
          <a
            onClick={handleClickDashboard}
            className={styleProductList.breadcrumb}
          >
            Dashboard
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className={styleProductList.breadcrumb}>
          Product
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="mb-[47px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1 className={styleProductList.heading}>Product</h1>
        <button
          onClick={handleClickNewProduct}
          className={styleProductList.addProduct}
        >
          New product
        </button>
      </div>
      <div className={styleProductList.contentTable}>
        <TableProduct />
      </div>
    </div>
  );
}

export default ProductDetail;
