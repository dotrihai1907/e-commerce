import "antd/dist/antd.css";
import style_css from "./UserList.module.css";

import { Breadcrumb } from "antd";

import TableUser from "../../../components/TableUser/TableUser";

import { useNavigate } from "react-router-dom";

function UserList() {
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
        <Breadcrumb.Item className={style_css.breadcrumb}>User</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="mb-[47px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1 className={style_css.heading}>User</h1>
        <button
          onClick={() => navigate("/admin/user-create")}
          className={style_css.addUser}
        >
          New user
        </button>
      </div>
      <div className={style_css.contentTable}>
        <TableUser />
      </div>
    </div>
  );
}

export default UserList;
