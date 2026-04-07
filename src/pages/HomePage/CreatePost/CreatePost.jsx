import styles from "./CreatePost.module.css";
import TextInput from "../../../common/TextInput/TextInput";
import Button from "../../../common/Button/Button";
import penIcon from "../../../assets/pen.svg";
import photoIcon from "../../../assets/photo.png";
import videoIcon from "../../../assets/video.png";
import eventIcon from "../../../assets/calendar.png";
import articleIcon from "../../../assets/article.png";

const CreatePost = () => {
  return (
    <div className={styles.card}>
      <div className={styles.inputRow}>
        <img src={penIcon} alt="" className={styles.searchIcon} />
        <TextInput
          placeholder="What's on your mind?"
          name="search"
          type="text"
          className={styles.searchInput}
        />
      </div>

      <hr className={styles.divider} />
      <div className={styles.actions}>
        <Button
          type="button"
          name="Photo"
          className={styles.actionBtn}
          icon={photoIcon}
        />
        <Button
          type="button"
          name="Video"
          className={styles.actionBtn}
          icon={videoIcon}
        />
        <Button
          type="button"
          name="Event"
          className={styles.actionBtn}
          icon={eventIcon}
        />
        <Button
          type="button"
          name="Article"
          className={styles.actionBtn}
          icon={articleIcon}
        />
      </div>
    </div>
  );
};

export default CreatePost;
