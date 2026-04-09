import { useState } from "react";
import styles from "./CenterFeed.module.css";
import CreatePost from "../CreatePost/CreatePost";
import SortBar from "../SortBar/SortBar";
import PostCard from "../PostCard/PostCard";
import { usePosts } from "../../../context/usePosts";

const CenterFeed = () => {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);

  const { posts, sortBy, toggleLike, setSortBy, createPost, addComment } =
    usePosts();

  const handleLike = (id) => {
    toggleLike(id);
  };

  const handleCreatePost = () => {
    const trimmedPost = postText.trim();
    if (!trimmedPost && !postImage) return;

    createPost(trimmedPost, postImage);
    setPostText("");
    setPostImage(null);
  };

  const handlePhotoChange = (event) => {
    const [file] = event.target.files ?? [];

    if (!file) {
      setPostImage(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPostImage({
          name: file.name,
          url: reader.result,
        });
      }
    };

    reader.readAsDataURL(file);
    event.target.value = "";
  };

  const handleAddComment = (id, text) => {
    addComment(id, text);
  };

  return (
    <div>
      <CreatePost
        value={postText}
        onChange={(event) => setPostText(event.target.value)}
        onSubmit={handleCreatePost}
        selectedPhoto={postImage}
        onPhotoChange={handlePhotoChange}
        onPhotoRemove={() => setPostImage(null)}
      />
      <SortBar value={sortBy} onChange={setSortBy} />

      <div className={styles.postCards}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            id={post.id}
            handleLike={handleLike}
            handleAddComment={handleAddComment}
          />
        ))}
      </div>
    </div>
  );
};
export default CenterFeed;
