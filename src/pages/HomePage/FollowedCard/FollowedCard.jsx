import styles from "./FollowedCard.module.css";
import arrow from "../../../assets/arrow.svg"

const hashtags = ["#uidesign", "#uxdesign", "#mobileappdesign", "#uianimation"];

const FollowedCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.title}>Followed Hashtags</div>
        <div className={styles.arrow}>
          <img src={arrow}/>
        </div>
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
