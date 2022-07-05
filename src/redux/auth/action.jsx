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
      title: "Register successed",
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
    Modal.success({
      title: "Login successfully",
    });
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

export const sendVerificationEmail =
  (accessToken, deviceId) => async (dispatch) => {
    dispatch(loading());
    try {
      await axios.post("/v1/auth/send-verification-email", deviceId, {
        headers: { Authorization: "Bearer " + accessToken },
      });
    } catch (error) {
    } finally {
      dispatch(loadingDone());
    }
  };

export const verifyEmail = (token, deviceId) => async (dispatch) => {
  dispatch(loading());
  try {
    await axios.post(`/v1/auth/verify-email?token=${token}`, deviceId);
    Modal.success({
      title: "Verify email successfully",
    });
  } catch (error) {
    Modal.error({
      title: "Verify email failed",
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};
