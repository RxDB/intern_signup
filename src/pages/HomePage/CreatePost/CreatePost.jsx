import styles from "./CreatePost.module.css";
import TextInput from "../../../common/TextInput/TextInput";
import Button from "../../../common/Button/Button";

const CreatePost = () => {
  return (
    <div className={styles.card}>
      <div className={styles.inputRow}>
        <span className={styles.searchIcon}>#</span>
        <TextInput
          placeholder="Search"
          name="search"
          type="text"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.actions}>
        <Button type="button" name="Photo" className={styles.actionBtn} />
        <Button type="button" name="Video" className={styles.actionBtn} />{" "}
        <Button type="button" name="Event" className={styles.actionBtn} />{" "}
        <Button type="button" name="Article" className={styles.actionBtn} />
      </div>
    </div>
  );
};

export default CreatePost;
