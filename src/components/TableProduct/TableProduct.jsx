import React from "react";
import { Table, Rate } from "antd";
import "antd/dist/antd.css";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./TableProduct.module.less";
import style_css from "./TableProduct.module.css";
import styles_scss from "./TableProduct.module.scss";

import Search from "../Search/Search";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectQueryProducts,
  selectAmountProducts,
} from "../../redux/product/selector";
import { selectAccessToken } from "../../redux/auth/selector";

import {
  getQueryProducts,
  getAllProducts,
  deleteProductById,
  getIdProductUpdate,
} from "../../redux/product/action";

export default function TableProduct() {
  const queryProducts = useSelector(selectQueryProducts)?.result ?? [];
  const amountProducts = useSelector(selectAmountProducts) ?? 0;
  const accessToken = useSelector(selectAccessToken);

  const [size, setSize] = useState(5);
  const [page, setPage] = useState(1);
  const [isHidden, setIsHidden] = useState(false);
  const [idDelete, setIdDelete] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //----------delete-------------
  const handleConfirmDelete = (idProductDelete) => {
    setIdDelete(idProductDelete);
    setIsHidden(true);
  };

  const handleDelete = () => {
    setIsHidden(false);
    dispatch(deleteProductById(accessToken, idDelete));
    dispatch(getQueryProducts(size, page));
  };

  const handleCancel = () => {
    setIdDelete(null);
    setIsHidden(false);
  };

  function ConfirmDelete() {
    return (
      <div className={styles_scss.delete}>
        <div className={styles_scss.title}>Confirm Delete</div>
        <div className="border-t-[1px] border-[#929395] pb-[18px]"></div>
        <div className={styles_scss.content}>
          Are you sure to delete product #{idDelete}?
        </div>
        <div className="border-b-[1px] border-[#929395] pt-[35px]"></div>

        <div
          className="mt-4 flex justify-end
        px-6"
        >
          <button onClick={handleCancel} className={styles_scss.cancelButton}>
            Cancel
          </button>
          <button onClick={handleDelete} className={styles_scss.deleteButton}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  //----------update-------------------

  const handleUpdate = (idUpdate) => {
    dispatch(getIdProductUpdate(idUpdate));
    navigate("/admin/product-edit");
  };

  //-----------------------------
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    dispatch(getQueryProducts(size, page));
  }, [size, page]);

  const data = queryProducts.map((product, index) => ({
    key: product.id,
    id: index + 1,
    product: {
      image: product?.images[0]?.url,
      text: {
        name: product.name,
        idProduct: product.id,
      },
    },
    brand: product.brand,
    category: product.category,
    stock: product.countInStock,
    price: product.price,
    rating: product.rating,
  }));

  const columns = [
    {
      title: () => <div className={style_css.title}>ID</div>,
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      render: (id) => {
        return <p className={style_css.id}>{id}</p>;
      },
    },
    {
      title: () => <div className={style_css.title}>Product</div>,
      dataIndex: "product",
      sorter: (a, b) => a.product.text.name.length - b.product.text.name.length,
      sortDirections: ["descend", "ascend"],
      render: (product) => {
        return (
          <div className="flex">
            <img src={product.image} className={style_css.image} />
            <div className="flex flex-col justify-around">
              <span className={style_css.name}>{product.text.name}</span>
              <span className={style_css.idProduct}>
                ID: {product.text.idProduct}
              </span>
            </div>
          </div>
        );
      },
    },
    {
      title: () => <div className={style_css.title}>Brand</div>,
      dataIndex: "brand",
      sorter: (a, b) => a.brand.length - b.brand.length,
      sortDirections: ["descend", "ascend"],
      render: (brand) => {
        return <p className={style_css.brand}>{brand}</p>;
      },
    },
    {
      title: () => <div className={style_css.title}>Category</div>,
      dataIndex: "category",
      sorter: (a, b) => a.category.length - b.category.length,
      sortDirections: ["descend", "ascend"],
      render: (category) => {
        return <p className={style_css.category}>{category}</p>;
      },
    },
    {
      title: () => <div className={style_css.title}>Stock</div>,
      dataIndex: "stock",
      sorter: (a, b) => a.stock - b.stock,
      render: (stock) => {
        return <p>{stock > 0 ? `${stock} items` : "Out of stock"}</p>;
      },
    },
    {
      title: () => <div className={style_css.title}>Price</div>,
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      render: (price) => {
        return <p className={style_css.price}>${price}</p>;
      },
    },
    {
      title: () => <div className={style_css.title}>Rating</div>,
      dataIndex: "rating",
      sorter: (a, b) => a.rating - b.rating,
      render: (rating) => <Rate disabled defaultValue={Number(rating)} />,
    },
    {
      dataIndex: "product",
      render: (product) => {
        return (
          <div className="flex">
            <button onClick={() => handleUpdate(product.text.idProduct)}>
              <FiEdit
                style={{
                  color: "#387B18",
                  width: 24,
                  height: 24,
                  marginRight: 12,
                }}
              />
            </button>
            <button onClick={() => handleConfirmDelete(product.text.idProduct)}>
              <RiDeleteBinLine
                style={{
                  color: "#F02020",
                  width: 24,
                  height: 24,
                }}
              />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {isHidden && ConfirmDelete()}
      <Search placeholder={"Search Product"} />
      <div style={{ width: "100%", position: "relative" }}>
        <Table
          style={{ width: "100%", backgroundColor: "#fff", height: "100%" }}
          columns={columns}
          dataSource={data}
          className={styles.style_table}
          pagination={{
            pageSize: Number(size),
            total: Number(amountProducts),
            onChange: (e) => setPage(e),
          }}
        />
        <div className="absolute bottom-[20px] right-[31px]">
          <span className={style_css.itemPerPage}>Items per page</span>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className={style_css.numberItem}
          />
        </div>
      </div>
    </div>
  );
}
