import "antd/dist/antd.css";
import styles from "./ConfirmDelete.module.scss";

function ConfirmDelete() {
  return (
    <div className={styles.delete}>
      <div className={styles.title}>Confirm Delete</div>
      <hr className={styles.firstDivider} />
      <div className={styles.content}>Are you sure to delete product #124?</div>
      <hr className={styles.secondDivider} />
      <button className={styles.cancelButton}>Cancel</button>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
}

export default ConfirmDelete;
