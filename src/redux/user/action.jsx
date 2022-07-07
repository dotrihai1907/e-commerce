import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone } from "../auth/reducer";
import { getProfileSuccess } from "./reducer";

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
