import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone } from "../auth/reducer";
import {
  createCartSuccess,
  createItemSuccess,
  getCartByIdSuccess,
  deleteItemSuccess,
} from "./reducer";

// add new cart and add item to cart
export const createCart = (accessToken, cartItem) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.post("/v1/cart", cartItem, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(createCartSuccess(data.data));
    Modal.success({
      title: "The product has been added to cart",
    });
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
    Modal.success({
      title: "The product has been added to cart",
    });
  } catch (error) {
    Modal.error({
      title: "Create Item Failed",
    });
  } finally {
    dispatch(loadingDone());
  }
};

//-------get cart by id cart---------------------
export const getCartById = (accessToken, idCart) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(`/v1/cart/${idCart}`, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(getCartByIdSuccess(data.data));
  } catch (error) {
    Modal.error({
      title: "Get Cart Failed",
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};

//-----------delete item by id item--------------------
export const deleteItem = (accessToken, idItem) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.delete(`/v1/cart/manage-item/${idItem}`, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(deleteItemSuccess(data.data));
  } catch (error) {
    Modal.error({
      title: "Delete item failed",
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};
