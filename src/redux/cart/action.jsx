import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone } from "../auth/reducer";
import {
  createCartSuccess,
  getCartByIdSuccess,
  deleteItemSuccess,
  deleteCartSuccess,
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
      title: "Create Cart Successfully",
    });
  } catch (error) {
    Modal.error({
      title: "Create Cart Failed",
      content: error.message,
    });
  } finally {
    dispatch(loadingDone());
  }
};

//add new item to cart
export const createItem = (accessToken, item) => async (dispatch) => {
  dispatch(loading());
  try {
    await axios.post("/v1/cart/create-item", item, {
      headers: { Authorization: "Bearer " + accessToken },
    });
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
  } finally {
    dispatch(loadingDone());
  }
};

//-----------delete item by id item--------------------
export const deleteItem = (accessToken, idItem) => async (dispatch) => {
  console.log(accessToken, idItem);
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

//------------------update item--------------------
export const updateItem =
  (accessToken, idItem, quantity) => async (dispatch) => {
    dispatch(loading());
    try {
      await axios.patch(
        `/v1/cart/manage-item/${idItem}`,
        { quantity },
        {
          headers: { Authorization: "Bearer " + accessToken },
        }
      );
    } catch (error) {
      Modal.error({
        title: "Error updating item",
        content: error.message,
      });
    } finally {
      dispatch(loadingDone());
    }
  };

//---------------delete cart-----------------------
export const deleteCart = (accessToken, cartId) => async (dispatch) => {
  dispatch(loading());
  try {
    await axios.delete(`/v1/cart/${cartId}`, {
      headers: { Authorization: "Bearer " + accessToken },
    });
    dispatch(deleteCartSuccess());
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};
