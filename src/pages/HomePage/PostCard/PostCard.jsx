import styles from "./PostCard.module.css";
import Button from "../../../common/Button/Button";
import likeIcon from "../../../assets/like.svg";
import commentIcon from "../../../assets/comment.svg";
import postHeartIcon from "../../../assets/postHeart.svg";
import postLikeIcon from "../../../assets/postLike.svg";
import shareIcon from "../../../assets/share.svg";
import sendIcon from "../../../assets/send.svg";
import suggestion1 from "../../../assets/suggestions/1691240541842.jpeg";
import suggestion2 from "../../../assets/suggestions/1705255323848.jpeg";
// import suggestion3 from "../../../assets/suggestions/1713795109052.jpeg";
// import suggestion4 from "../../../assets/suggestions/1732875366373.jpeg";
// import suggestion5 from "../../../assets/suggestions/1740908165366.jpeg";

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      {post.likedBy && (
        <div className={styles.liked}>
          <span>{post.likedBy}</span>
          <span className={styles.likedLabel}> liked</span>
        </div>
      )}

      <div className={styles.profileRow}>
        <img src={suggestion1} alt="profile" />
        <div className={styles.text}>
          <span className={styles.profileName}>{post.name}</span>

          <div className={styles.textTime}>
            <span className={styles.profileTitle}>{post.title}</span>
            <span className={styles.time}>{post.timeAgo}</span>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <p className={styles.bodyText}>{post.content}</p>
        <button type="button" className={styles.readMore}>
          Read more
        </button>
        <img src={suggestion2} alt="body Image" className={styles.postImage} />
      </div>
      <div className={styles.actionBar}>
        <div className={styles.actionButtons}>
          <Button
            type="button"
            icon={likeIcon}
            ariaLabel="Like"
            className={styles.actionBtn}
          />
          <Button
            type="button"
            icon={commentIcon}
            ariaLabel="Comment"
            className={styles.actionBtn}
          />
          <Button
            type="button"
            icon={shareIcon}
            ariaLabel="Share"
            className={styles.actionBtn}
          />
          <Button
            type="button"
            icon={sendIcon}
            ariaLabel="Send"
            className={styles.actionBtn}
          />
        </div>
        <div className={styles.meta}>
          <div className={styles.reactions}>
            <img src={postLikeIcon} alt="" className={styles.reactionIcon} />
            <img src={postHeartIcon} alt="" className={styles.reactionIcon} />
          </div>
          <span className={styles.commentsCount}>
            {post.comments} comments
          </span>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
