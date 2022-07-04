import React, { useState } from "react";
import { Form, Input, Select } from "antd";
import style_less from "./InfoUser.module.less";
import style_css from "./InfoUser.module.css";

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

export default function InfoUser({ value = {}, onChange }) {
  const [form] = Form.useForm();
  const [currency, setCurrency] = useState("Admin");
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const triggerChange = (changedValue) => {
    onChange?.({
      number,
      currency,
      ...value,
      ...changedValue,
    });
  };
  const onCurrencyChange = (newCurrency) => {
    if (!("currency" in value)) {
      setCurrency(newCurrency);
    }

    triggerChange({
      currency: newCurrency,
    });
  };
  return (
    <Form
      {...formItemLayout}
      form={form}
      className="pt-[35px] px-[32px] border-t border-[#929395]"
      onFinish={onFinish}
      scrollToFirstError
    >
      <div className="form-group">
        <label>Name</label>
        <Form.Item name="name" className={style_less.style_infoUser}>
          <Input />
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
          <Input />
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
          <Input.Password />
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
                  new Error("The two passwords that you entered do not match!")
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
            value={value.currency || currency}
            style={{
              width: "100%",
              margin: "0 8px",
            }}
            onChange={onCurrencyChange}
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
  );
}
