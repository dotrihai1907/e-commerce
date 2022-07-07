import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone } from "../auth/reducer";
import {
  getProfileSuccess,
  changeEmailSuccess,
  changeUsernameSuccess,
  changePasswordSuccess,
  changeContactSuccess,
  changeAvatarSuccess,
} from "./reducer";

export const getProfile = (accessToken) => async (dispatch) => {
  dispatch(loading());
  try {
    const data = await axios.get("/v1/users/my-profile", {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getProfileSuccess(data.data.data));
  } catch (error) {
    Modal.error({
      title: "Error loading profile",
    });
  } finally {
    dispatch(loadingDone());
  }
};

export const changeEmail = (accessToken, email) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.patch(
      "/v1/users/change-email",
      { email },
      {
        headers: { Authorization: "Bearer " + accessToken },
      }
    );
    dispatch(changeEmailSuccess(data.data.data));
    Modal.success({
      title: "Change email success",
    });
  } catch (error) {
    Modal.error({
      title: "Change email failed",
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};

export const changeUsername = (accessToken, username) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.patch(
      "/v1/users/change-username",
      { username },
      {
        headers: { Authorization: "Bearer " + accessToken },
      }
    );
    dispatch(changeUsernameSuccess(data.data.data));
    console.log(data.data.data);
    Modal.success({
      title: "Change username success",
    });
  } catch (error) {
    Modal.error({
      title: "Change username failed",
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};

export const changePassword =
  (accessToken, oldPassword, newPassword) => async (dispatch) => {
    dispatch(loading());
    try {
      const { data } = await axios.patch(
        "/v1/users/change-password",
        { oldPassword, newPassword },
        {
          headers: { Authorization: "Bearer " + accessToken },
        }
      );
      dispatch(changePasswordSuccess(data.data.data));
      console.log(data.data.data);
      Modal.success({
        title: "Change password success",
      });
    } catch (error) {
      Modal.error({
        title: "Change password failed",
        content: error.message,
      });
    } finally {
      dispatch(loadingDone());
    }
  };

export const changeContact = (accessToken, contact) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.patch(
      "/v1/users/change-contact",
      { contact },
      {
        headers: { Authorization: "Bearer " + accessToken },
      }
    );
    dispatch(changeContactSuccess(data.data.data));
    console.log(data.data.data);
    Modal.success({
      title: "Change contact success",
    });
  } catch (error) {
    Modal.error({
      title: "Change contact failed",
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};

export const changeAvatar = (accessToken, avatar) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.patch(
      "/v1/users/change-avatar",
      { avatar },
      {
        headers: { Authorization: "Bearer " + accessToken },
      }
    );
    dispatch(changeAvatarSuccess(data.data.data));
    console.log(data.data.data);
    Modal.success({
      title: "Change avatar success",
    });
  } catch (error) {
    Modal.error({
      title: "Change avatar failed",
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};
