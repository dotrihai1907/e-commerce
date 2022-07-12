import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone } from "../auth/reducer";
import {
  getOrdersSuccess,
  getAmountOrdersByAdminSuccess,
  getQueryOrdersByAdminSuccess,
  getIdOrderSuccess,
  getOrderByIdSuccess,
} from "./reducer";

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
  try {
    await axios.post("/v1/orders", newOrder, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    Modal.success({
      title: "Create new order successfully",
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

export const getAmountOrdersByAdmin = (accessToken) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get("/v1/orders", {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getAmountOrdersByAdminSuccess(data.data.orders.total));
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};

export const getQueryOrdersByAdmin =
  (accessToken, size, page) => async (dispatch) => {
    dispatch(loading());
    try {
      const { data } = await axios.get(`/v1/orders?size=${size}&page=${page}`, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      dispatch(getQueryOrdersByAdminSuccess(data.data.orders.result));
    } catch (error) {
    } finally {
      dispatch(loadingDone());
    }
  };

export const getIdOrder = (id) => async (dispatch) => {
  dispatch(getIdOrderSuccess(id));
};

export const getOrderById = (accessToken, idOrder) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(`/v1/orders/${idOrder}`, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getOrderByIdSuccess(data.data));
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};
