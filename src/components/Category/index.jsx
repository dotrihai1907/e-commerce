import "antd/dist/antd.css";
import styles from "./Category.module.scss";

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa";

import { useState } from "react";

const items = [
  "Computer",
  "Hand Tools",
  "Machine Tools",
  "Power Tools",
  "Storage Tools",
  "Clothes & PPE",
  "Electrical",
  "Building Tools",
  "Foods",
  "Drinks",
];
function Category() {
  const [type, setType] = useState();

  const handleClick = (item) => {
    setType(item);
  };
  return (
    <div className={styles.category}>
      <div className={styles.title}>
        <HiOutlineMenuAlt1 className={styles.iconTitle} />
        <p className={styles.textTitle}>Categories</p>
      </div>

      <div className={styles.content}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li
              key={item}
              className={styles.item}
              onClick={() => handleClick(item)}
              style={type === item ? { backgroundColor: "#B59628" } : {}}
            >
              <p>{item}</p>
              <FaChevronRight className={styles.icon} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
