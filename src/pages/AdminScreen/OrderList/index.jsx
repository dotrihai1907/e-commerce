import { Breadcrumb } from "antd";
import Search from "../../../components/Search/Search";
import TableOrder from "../../../components/TableOrder/TableOrder";

import style_css from "./OrderList.module.css";
function OrderDetail() {
  return (
    <div className={style_css.userContent}>
      <Breadcrumb>
        <Breadcrumb.Item className={style_css.breadcrumb}>
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="" className={style_css.breadcrumb}>
            Order
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="mb-[47px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1 className={style_css.heading}>Order</h1>
      </div>
      <div className={style_css.contentTable}>
        <Search placeholder={"Search Order"} />
        <TableOrder />
      </div>
    </div>
  );
}

export default OrderDetail;
