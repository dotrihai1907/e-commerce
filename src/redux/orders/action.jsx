import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone } from "../auth/reducer";
import { getOrdersSuccess } from "./reducer";

export const getOrders = (accessToken) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get("/v1/orders/my-orders", {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getOrdersSuccess(data.data.orders.result));
  } catch (error) {
    Modal.error({
      tile: "Error loading orders",
    });
  } finally {
    dispatch(loadingDone());
  }
};

export const createOrder = (accessToken, newOrder) => async (dispatch) => {
  dispatch(loading());
  console.log(accessToken, newOrder);
  try {
    await axios.post("/v1/orders", newOrder, {
      headers: { Authorization: "Bearer " + accessToken },
    });
  } catch (error) {
    Modal.error({
      title: "Create new order failed",
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};
