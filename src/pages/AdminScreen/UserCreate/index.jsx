import "antd/dist/antd.css";
import styles_css from "./UserCreate.module.css";
import style_less from "./InfoUser.module.less";
import style_css from "./InfoUser.module.css";
import styleAnother_css from "./AnotherInfo.module.css";
import styleAnother_less from "./AnotherInfo.module.less";

import { Breadcrumb, Form, Input, Select, Radio } from "antd";

import UploadAvatar from "../../../components/UploadAvatar/UploadAvatar";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { createUser } from "../../../redux/user/action";

import { selectAccessToken } from "../../../redux/auth/selector";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const { Option } = Select;

function UserCreate() {
  const accessToken = useSelector(selectAccessToken);

  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [contact, setContact] = useState();
  const [isActive, setIsActive] = useState();
  const [isEmailVerified, setIsEmailVerified] = useState();
  const [isContactVerified, setIsContactVerified] = useState();

  const userCreate = {
    username,
    email,
    password,
    contact,
    role: role?.toLowerCase(),
    isActive: isActive === "Active" ? true : false,
    isEmailVerified: isEmailVerified === "Yes" ? true : false,
    isContactVerified: isContactVerified === "Yes" ? true : false,
    avatar: "https://joeschmoe.io/api/v1/random",
  };

  const handleCreateUser = () => {
    dispatch(createUser(accessToken, userCreate));
  };

  //----------another info----------
  const plainOptions1 = ["Active", "Disabled"];
  const plainOptions2 = ["Yes", "No"];
  const plainOptions3 = ["Yes", "No"];

  return (
    <div
      className=" px-8 pt-[25px]"
      style={{
        backgroundColor: "#F5F7FA",
        height: "100%",
      }}
    >
      <Breadcrumb>
        <Breadcrumb.Item className={styles_css.breadcrumb}>
          <a
            onClick={() => navigate("/admin")}
            className={styles_css.breadcrumb}
          >
            Dashboard
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a
            onClick={() => navigate("/admin/user-list")}
            className={styles_css.breadcrumb}
          >
            User
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item className={styles_css.breadcrumb}>
          Create User
        </Breadcrumb.Item>
      </Breadcrumb>

      <div
        className="mb-[35px] mt-[21px]"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          <h1 className={styles_css.heading}>Create User</h1>
        </div>
        <button onClick={handleCreateUser} className={styles_css.addUser}>
          Add user
        </button>
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
          className="form mr-5 flex-[1_1_59%] bg-[#fff] min-w-[550px]"
          style={{
            boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h1 className={styles_css.heading_info}>User Information</h1>

          <Form
            {...formItemLayout}
            form={form}
            className="pt-[35px] px-[32px] border-t border-[#929395]"
            scrollToFirstError
          >
            <div className="form-group">
              <label>Name</label>
              <Form.Item name="name" className={style_less.style_infoUser}>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className={style_css.form_group}>
              <label>Email</label>
              <Form.Item
                className={style_less.style_infoUser}
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className={style_css.form_group}>
              <label>Password</label>
              <Form.Item
                className={style_less.style_infoUser}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
            </div>
            <div className={style_css.form_group}>
              <label>Retype Password</label>
              <Form.Item
                className={style_less.style_infoUser}
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </div>
            <div className={style_css.form_group}>
              <label>Role</label>
              <Form.Item name="role" className={style_less.style_infoUser}>
                <Select
                  onChange={(value) => setRole(value)}
                  style={{
                    width: "100%",
                    margin: "0 8px",
                  }}
                >
                  <Option value="admin" className={style_less.style_infoUser}>
                    Admin
                  </Option>
                  <Option value="user" className={style_less.style_infoUser}>
                    User
                  </Option>
                </Select>
              </Form.Item>
            </div>
          </Form>
        </div>

        <div className="other flex flex-col justify-between ml-5 flex-[1_1_37.5%] bg-[#F5F7FA]">
          <UploadAvatar avatar={"Avatar"} />

          <div
            className="bg-[#fff]"
            style={{
              boxShadow: "0.5px 0.5px 12px rgba(0, 0, 0, 0.25)",
              height: "60.3%",
            }}
          >
            <h1 className={styleAnother_css.headingImage}>Another info</h1>
            <hr style={{ borderTop: "1px solid #929395" }} />
            <div className="py-4 px-[27px]">
              <div className={styleAnother_less.style_anotherInfo}>
                <p className={styleAnother_css.contact}>Contact</p>
                <Input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
            </div>

            <div className={styleAnother_css.wrapper_radio}>
              <div className={styleAnother_less.style_anotherInfo}>
                <div className="flex">
                  <span className={styleAnother_css.title}>Status</span>
                  <Radio.Group
                    options={plainOptions1}
                    className={styleAnother_less.style_anotherInfo}
                    value={isActive}
                    onChange={(e) => setIsActive(e.target.value)}
                  />
                </div>
              </div>
              <div className={styleAnother_less.style_anotherInfo}>
                <div className="flex">
                  <span className={styleAnother_css.title}>Verify Email</span>
                  <Radio.Group
                    options={plainOptions2}
                    className={styleAnother_less.style_anotherInfo}
                    value={isEmailVerified}
                    onChange={(e) => setIsEmailVerified(e.target.value)}
                  />
                </div>
              </div>
              <div className={styleAnother_less.style_anotherInfo}>
                <div className="flex">
                  <span className={styleAnother_css.title}>Verify Contact</span>
                  <Radio.Group
                    options={plainOptions3}
                    className={styleAnother_less.style_anotherInfo}
                    value={isContactVerified}
                    onChange={(e) => setIsContactVerified(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCreate;
