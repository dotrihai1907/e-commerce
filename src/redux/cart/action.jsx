import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone } from "../auth/reducer";
import { createCartSuccess, createItemSuccess } from "./reducer";

// add new cart and add item to cart
export const createCart = (accessToken, cartItem) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.post("/v1/cart", cartItem, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(createCartSuccess(data.data));
  } catch (error) {
    Modal.error({
      title: "Create Cart Failed",
    });
  } finally {
    dispatch(loadingDone());
  }
};

//add new item to cart
export const createItem = (accessToken, item) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.post("/v1/cart/create-item", item, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(createItemSuccess(data.data));
  } catch (error) {
    Modal.error({
      title: "Create Item Failed",
    });
  } finally {
    dispatch(loadingDone());
  }
};
