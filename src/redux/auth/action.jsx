import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone, loginSuccess } from "./reducer";

export const login = (email, password) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.post("/v1/auth/login", {
      email: email,
      password: password,
      deviceId: `deviceId-${email}`,
    });
    console.log(data.data);
    dispatch(loginSuccess(data.data));
  } catch (error) {
    Modal.error({
      title: "Login failed",
    });
  } finally {
    dispatch(loadingDone());
  }
};
