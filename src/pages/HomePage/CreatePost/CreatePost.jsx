import { useId } from "react";
import styles from "./CreatePost.module.css";
import TextInput from "../../../common/TextInput/TextInput";
import Button from "../../../common/Button/Button";
import penIcon from "../../../assets/pen.svg";
import photoIcon from "../../../assets/photo.png";
import videoIcon from "../../../assets/video.png";
import eventIcon from "../../../assets/calendar.png";
import articleIcon from "../../../assets/article.png";

const CreatePost = ({
  value,
  onChange,
  onSubmit,
  selectedPhoto,
  onPhotoChange,
  onPhotoRemove,
}) => {
  const photoInputId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <div className={styles.inputRow}>
        <img src={penIcon} alt="" className={styles.searchIcon} />
        <TextInput
          placeholder="What's on your mind?"
          name="search"
          type="text"
          className={styles.searchInput}
          value={value}
          onChange={onChange}
        />
      </div>
      <input
        id={photoInputId}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={onPhotoChange}
      />
      {selectedPhoto && (
        <div className={styles.attachmentSummary}>
          <div className={styles.attachmentTag}>
            <span>{selectedPhoto.name}</span>
            <button type="button" onClick={onPhotoRemove}>
              Remove
            </button>
          </div>
          <img
            src={selectedPhoto.url}
            alt={selectedPhoto.name}
            className={styles.attachmentPreview}
          />
        </div>
      )}
      <hr className={styles.divider} />
      <div className={styles.actions}>
        <Button
          type="button"
          name="Photo"
          className={styles.actionBtn}
          icon={photoIcon}
          onClick={() => document.getElementById(photoInputId)?.click()}
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
    </form>
  );
};

export default CreatePost;
