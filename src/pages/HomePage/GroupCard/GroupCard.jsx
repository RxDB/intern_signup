import styles from "./GroupCard.module.css";

const groups = [
  { name: "UI Design Inspiration", color: "#0a66c2" },
  { name: "PRO Designer", color: "#e74c3c" },
];

const GroupCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>Group</div>
        <div className={styles.count}>12</div>
      </div>

      <div className={styles.groupList}>
        {groups.map((group) => (
          <div key={group.name} className={styles.groupRow}>
            <span
              className={styles.badge}
              style={{ backgroundColor: group.color }}
            >UI/UX</span>
            <span className={styles.groupName}>{group.name}</span>
          </div>
        ))}
      </div>
      <div className={styles.all}>

      <button className={styles.showAll}>Show All</button>
      </div>
    </div>
  );
};

export default GroupCard;
