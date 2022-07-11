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
  getAmountAdminsSuccess,
  getAmountUsersSuccess,
  getQueryUsersSuccess,
  getIdUserUpdateSuccess,
  getUserSuccess,
} from "./reducer";

export const getProfile = (accessToken) => async (dispatch) => {
  dispatch(loading());
  try {
    const data = await axios.get("/v1/users/my-profile", {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getProfileSuccess(data.data.data));
  } catch (error) {
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

export const getAmountAdmins = (accessToken) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get("/v1/users?role=admin", {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getAmountAdminsSuccess(data.data.total));
  } catch (error) {
    Modal.error({
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};

export const getAmountUsers = (accessToken) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get("/v1/users?role=user", {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getAmountUsersSuccess(data.data.total));
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};

export const getQueryUsers = (accessToken, size, page) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(`/v1/users?size=${size}&page=${page}`, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getQueryUsersSuccess(data.data));
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};

export const deleteUserById = (accessToken, idDelete) => async (dispatch) => {
  dispatch(loading());
  try {
    await axios.delete(`/v1/users/${idDelete}`, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    Modal.success({
      title: "Delete User successfully",
    });
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};

export const getIdUserUpdate = (idUpdate) => async (dispatch) => {
  dispatch(getIdUserUpdateSuccess(idUpdate));
};

export const getUser = (accessToken, idUser) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(`/v1/users/${idUser}`, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getUserSuccess(data.data));
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};

export const updateUserById =
  (accessToken, idUser, userUpdate) => async (dispatch) => {
    dispatch(loading());
    try {
      await axios.patch(`/v1/users/${idUser}`, userUpdate, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      Modal.success({
        title: "Update User successfully",
      });
    } catch (error) {
      Modal.error({
        title: "Error updating user",
        content: error.message,
      });
    } finally {
      dispatch(loadingDone());
    }
  };
