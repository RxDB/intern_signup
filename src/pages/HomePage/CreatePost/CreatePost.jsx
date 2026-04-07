import { useRef } from "react";
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
  selectedFiles,
  onFileSelect,
}) => {
  const photoInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const eventInputRef = useRef(null);
  const articleInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const selectedFileNames = Object.values(selectedFiles)
    .filter(Boolean)
    .map((file) => file.name);

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

      {selectedFileNames.length > 0 && (
        <div className={styles.attachmentSummary}>
          {selectedFileNames.map((fileName) => (
            <span key={fileName} className={styles.attachmentTag}>
              {fileName}
            </span>
          ))}
        </div>
      )}

      <input
        ref={photoInputRef}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={(event) => onFileSelect("photo", event.target.files?.[0] ?? null)}
      />
      <input
        ref={videoInputRef}
        type="file"
        accept="video/*"
        className={styles.hiddenInput}
        onChange={(event) => onFileSelect("video", event.target.files?.[0] ?? null)}
      />
      <input
        ref={eventInputRef}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={(event) => onFileSelect("event", event.target.files?.[0] ?? null)}
      />
      <input
        ref={articleInputRef}
        type="file"
        accept="image/*"
        className={styles.hiddenInput}
        onChange={(event) =>
          onFileSelect("article", event.target.files?.[0] ?? null)
        }
      />

      <hr className={styles.divider} />
      <div className={styles.actions}>
        <Button
          type="button"
          name="Photo"
          className={styles.actionBtn}
          icon={photoIcon}
          onClick={() => photoInputRef.current?.click()}
        />
        <Button
          type="button"
          name="Video"
          className={styles.actionBtn}
          icon={videoIcon}
          onClick={() => videoInputRef.current?.click()}
        />
        <Button
          type="button"
          name="Event"
          className={styles.actionBtn}
          icon={eventIcon}
          onClick={() => eventInputRef.current?.click()}
        />
        <Button
          type="button"
          name="Article"
          className={styles.actionBtn}
          icon={articleIcon}
          onClick={() => articleInputRef.current?.click()}
        />
      </div>
    </form>
  );
};

export default CreatePost;
