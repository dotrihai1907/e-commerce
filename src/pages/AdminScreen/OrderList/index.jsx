import "antd/dist/antd.css";
import { Breadcrumb } from "antd";
import TableOrder from "../../../components/TableOrder/TableOrder";
import style_css from "./OrderList.module.css";
import { useNavigate } from "react-router-dom";

function OrderDetail() {
  const navigate = useNavigate();

  const handleClickDashboard = () => {
    navigate("/admin");
  };

  return (
    <div className={style_css.userContent}>
      <Breadcrumb>
        <Breadcrumb.Item className={style_css.breadcrumb}>
          <a onClick={handleClickDashboard} className={style_css.breadcrumb}>
            Dashboard
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className={style_css.breadcrumb}>
          Order
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="mb-[47px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1 className={style_css.heading}>Orders</h1>
      </div>
      <div className={style_css.contentTable}>
        <TableOrder />
      </div>
    </div>
  );
}

export default OrderDetail;
