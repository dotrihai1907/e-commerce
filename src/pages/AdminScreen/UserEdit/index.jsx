import { Breadcrumb } from "antd";
import style_css from "./UserEdit.module.css";
import UploadAvatar from "../../../components/UploadAvatar/UploadAvatar";
import InfoUser from "../../../components/InfoUser/InfoUser";
import AnotherInfo from "../../../components/AnotherInfo/AnotherInfo";

function UserEdit() {
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
            User
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="" className={style_css.breadcrumb}>
            Update User #654
          </a>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div
        className="mb-[35px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h1 className={style_css.heading}>Update User #654</h1>
          <span className={style_css.userID}>User ID : 654</span>
        </div>
        <button className={style_css.updateUser}>Update user</button>
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
          <h1 className={style_css.heading_info}>User information</h1>
          <InfoUser />
        </div>
        <div className="other flex flex-col justify-between ml-5 flex-[1_1_37.5%] bg-[#F5F7FA]">
          <UploadAvatar avatar={"Avatar"} />
          <AnotherInfo />
        </div>
      </div>
    </div>
  );
}

export default UserEdit;
