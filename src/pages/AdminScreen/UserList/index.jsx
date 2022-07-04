import { Breadcrumb } from "antd";
import Search from "../../../components/Search/Search";
import TableUser from "../../../components/TableUser/TableUser";

import style_css from "./UserList.module.css";
function UserList() {
  return (
    <div className={style_css.userContent}>
      <Breadcrumb>
        <Breadcrumb.Item className={style_css.breadcrumb}>
          Dashboard
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="" className={style_css.breadcrumb}>
            User
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="mb-[47px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h1 className={style_css.heading}>User</h1>
        <button className={style_css.addUser}>New user</button>
      </div>
      <div className={style_css.contentTable}>
        <Search placeholder={"Search Product"} />
        <TableUser />
      </div>
    </div>
  );
}

export default UserList;
