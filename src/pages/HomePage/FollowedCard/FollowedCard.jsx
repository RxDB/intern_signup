import styles from "./FollowedCard.module.css";

const hashtags = ["#uidesign", "#uxdesign", "#mobileappdesign", "#uianimation"];

const FollowedCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>Group</div>
        <div className={styles.arrow}>12</div>
      </div>

      <div className={styles.hashTagList}>
        {hashtags.map((hash) => (
          <div key={hash} className={styles.hashBubble}>
            <span className={styles.hashName}>{hash}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowedCard;
