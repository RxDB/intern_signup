import styles from "./ProfileCard.module.css";
import avatar from "../../../assets/avatar.jpeg"

const ProfileCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cover}></div>
      <div className={styles.body}>
        <div className={styles.avatarWrapper}>
          <img src={avatar} alt="Profile" className={styles.avatar} />
        </div>
        <h2 className={styles.name}>Hanif Al Haifzh</h2>
        <div className={styles.title}>UI/UX Designer</div>
        <div className={styles.bio}>
          UI/UX Designer, 100+ projects in web design & mobile apps. Open to
          offers .....<span className={styles.readMore}>Read More</span>
        </div>
      </div>
      <div className={styles.stat}>
        <div className={styles.statRow}>
          <div className={styles.label}>Connections</div>
          <div className={styles.value}>500+</div>
        </div>
         <div className={styles.statRow}>
          <div className={styles.label}>Profile Views</div>
          <div className={styles.value}>654</div>
        </div>
         <div className={styles.statRow}>
          <div className={styles.label}>My items</div>
          <div className={styles.value}>32</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
