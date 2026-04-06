import styles from "./SortBar.module.css";
const SortBar = () => {
  return (
    <div className={styles.bar}>
      <hr className={styles.line} />
      <div className={styles.sortWrapper}>
        <span className={styles.label}>Sort by:</span>
        <select className={styles.select} aria-label="Sort feed">
          <option value="top">Top</option>
          <option value="recent">Recent</option>
        </select>
      </div>
      <hr className={styles.line} />
    </div>
  );
};
export default SortBar;
