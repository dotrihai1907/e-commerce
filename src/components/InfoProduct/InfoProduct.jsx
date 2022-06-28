import React from "react";
import { Form, Input } from "antd";

import styleInfo from "./InfoProduct.module.css";
import TextArea from "antd/lib/input/TextArea";

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

export default function InfoProduct() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      className="pt-5 px-[30px] border-t border-[#929395]"
      onFinish={onFinish}
      scrollToFirstError
    >
      <div className="form-group">
        <label>Name</label>
        <Input className={styleInfo.input} />
      </div>
      <div className="form-group mt-[25px]">
        <label>Description </label>
        <TextArea
          style={{
            height: 112,
            marginTop: 11,
            borderRadius: "2px",
            border: "1px solid #929395",
            fontFamily: "Arial",
            fontWeight: 400,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            letterSpacing: "-0.02em",
          }}
        />
      </div>
      <div className="form-group flex justify-between mt-[30px]">
        <div className="flex flex-col pr-5" style={{ width: "50%" }}>
          <label>Price</label>
          <Input type="number" min="0" className={styleInfo.input} />
        </div>
        <div className="flex flex-col pl-5" style={{ width: "50%" }}>
          <label>Discount Percent</label>
          <Input type="number" min="0" className={styleInfo.input} />
        </div>
      </div>
      <div className="form-group mt-[35px]">
        <label>Brand</label>
        <Input className={styleInfo.input} />
      </div>
      <div className="form-group mt-[35px]">
        <label>Stock quantity</label>
        <Input className={styleInfo.input} />
      </div>
    </Form>
  );
}
