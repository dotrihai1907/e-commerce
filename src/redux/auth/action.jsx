import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone, loginSuccess } from "./reducer";

export const register = (username, email, password) => async (dispatch) => {
  dispatch(loading());
  try {
    await axios.post("/v1/auth/register", {
      username,
      email,
      password,
    });
    Modal.success({
      title: "Register success",
    });
  } catch (error) {
    Modal.error({
      title: "Register error",
    });
  } finally {
    dispatch(loadingDone());
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.post("/v1/auth/login", {
      email: email,
      password: password,
      deviceId: `deviceId-${email}`,
    });
    dispatch(loginSuccess(data.data));
  } catch (error) {
    Modal.error({
      title: "Login failed",
    });
  } finally {
    dispatch(loadingDone());
  }
};

export const forgot = (email) => async (dispatch) => {
  dispatch(loading());
  try {
    await axios.post("/v1/auth/forgot-password", {
      email,
    });
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};
