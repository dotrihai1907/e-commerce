import "antd/dist/antd.css";
import { Modal } from "antd";
import axios from "../../api/axios";
import { loading, loadingDone } from "../auth/reducer";
import {
  getAllCategoriesSuccess,
  getProductsByCategorySuccess,
  getCategorySuccess,
} from "./reducer";

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
