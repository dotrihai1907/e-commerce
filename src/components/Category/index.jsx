import "antd/dist/antd.css";
import styles from "./Category.module.scss";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCategories } from "../../redux/product/selector";

import {
  getAllCategories,
  getProductsByCategory,
} from "../../redux/product/action";

function Category() {
  const [type, setType] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector(selectCategories) ?? [
    "Hand Bag",
    "Ao khoac",
    "Clothing",
    "Jewels",
    "cooking",
    "Glasses",
    "Wallet",
    "Shoes",
  ];

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleClick = (category) => {
    setType(category);
    dispatch(getProductsByCategory(category));
    navigate("/products-by-category");
  };
  return (
    <div className={styles.categoryList}>
      <div className={styles.title}>
        <HiOutlineMenuAlt1 className={styles.iconTitle} />
        <p className={styles.textTitle}>Categories</p>
      </div>

      <div className={styles.content}>
        <ul className={styles.list}>
          {categories.map((category) => (
            <li
              key={category}
              className={styles.category}
              onClick={() => handleClick(category)}
              style={type === category ? { backgroundColor: "#B59628" } : {}}
            >
              <p>{category}</p>
              <FaChevronRight className={styles.icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
