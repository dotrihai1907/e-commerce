import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone } from "../auth/reducer";
import {
  getAllProductsSuccess,
  getAllCategoriesSuccess,
  getProductsByCategorySuccess,
  getCategorySuccess,
  getKeywordSuccess,
  getProductsBySearchSuccess,
  getProductSuccess,
} from "./reducer";

export const getAllProducts = () => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get("/v1/products?size=1000");
    dispatch(getAllProductsSuccess(data.data));
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};

export const getAllCategories = () => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get("/v1/products/get-all-categories");
    dispatch(getAllCategoriesSuccess(data.data));
  } catch (error) {
    Modal.error({
      title: "Error getting categories",
    });
  } finally {
    dispatch(loadingDone());
  }
};

export const getProductsByCategory = (category) => async (dispatch) => {
  dispatch(loading());
  dispatch(getCategorySuccess(category));
  try {
    const { data } = await axios.get(`/v1/products?category=${category}`);
    dispatch(getProductsByCategorySuccess(data.data.result));
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};

export const getProductsBySearch = (keyword) => async (dispatch) => {
  dispatch(loading());
  dispatch(getKeywordSuccess(keyword));
  try {
    const { data } = await axios.get(`/v1/search?keyword=${keyword}`);
    dispatch(getProductsBySearchSuccess(data.data.products.result));
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};

export const getProduct = (id) => async (dispatch) => {
  dispatch(loading());
  try {
    const { data } = await axios.get(`/v1/products/${id}`);
    dispatch(getProductSuccess(data.data));
  } catch (error) {
  } finally {
    dispatch(loadingDone());
  }
};

export const createReviewProduct =
  (accessToken, id, review) => async (dispatch) => {
    dispatch(loading());
    try {
      await axios.post(`/v1/products/${id}/reviews`, review, {
        headers: { Authorization: "Bearer " + accessToken },
      });
      Modal.success({
        title: "Create review successfully",
      });
    } catch (error) {
      Modal.error({
        title: "Create review failed",
        content: "You can only rate the product once",
      });
    } finally {
      dispatch(loadingDone());
    }
  };
