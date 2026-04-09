import { useMemo, useReducer } from "react";

import avatar from "../assets/avatar.jpeg";
import suggestion1 from "../assets/suggestions/1691240541842.jpeg";
import suggestion2 from "../assets/suggestions/1705255323848.jpeg";
import suggestion3 from "../assets/suggestions/1713795109052.jpeg";
import suggestion4 from "../assets/suggestions/1732875366373.jpeg";
import suggestion5 from "../assets/suggestions/1740908165366.jpeg";
import content1 from "../assets/content/1774978191626.jpeg";
import content2 from "../assets/content/1775200847704.jpeg";
import content3 from "../assets/content/1774551643147.jpeg";
import content4 from "../assets/content/1775211244394.jpeg";
import { PostContext } from "./postContext";

const initialPosts = [
  {
    id: 1,
    likedBy: "Michael Jack",
    name: "Steven Smith",
    title: "UI Designer",
    timeAgo: "2h",
    content:
      "I'm back with a design exploration of the weather mobile app concept.",
    profileImage: suggestion1,
    image: content1,
    time: 2,
    likes: 142,
    isLiked: false,
    comments: [{ id: 1, author: "Alex", text: "Nice work!", timeAgo: "1h" }],
  },
  {
    id: 2,
    likedBy: "Emma Laurent",
    name: "Luca Moretti",
    title: "Product Designer",
    timeAgo: "1h",
    content: "Sharing a refined onboarding flow for a fintech dashboard.",
    profileImage: suggestion2,
    image: content2,
    time: 1,
    likes: 142,
    isLiked: false,
    comments: [],
  },
  {
    id: 3,
    likedBy: "Mateo Kovac",
    name: "Sofia Lindberg",
    title: "Frontend Developer",
    timeAgo: "3h",
    content: "Spent the afternoon polishing a component library update.",
    profileImage: suggestion3,
    image: content3,
    time: 3,
    likes: 121,
    isLiked: false,
    comments: [],
  },
  {
    id: 4,
    likedBy: "Clara Hoffmann",
    name: "Noah Bennett",
    title: "Visual Designer",
    timeAgo: "5h",
    content: "A quick visual study from a recent branding sprint.",
    profileImage: suggestion4,
    image: content4,
    time: 5,
    likes: 89,
    isLiked: false,
    comments: [],
  },
  {
    id: 5,
    likedBy: "Rose Stratton",
    name: "Ava Collins",
    title: "UX Researcher",
    timeAgo: "6h",
    content: "Collected feedback from the latest usability round.",
    profileImage: suggestion5,
    image: content1,
    time: 6,
    likes: 191,
    isLiked: false,
    comments: [],
  },
  {
    id: 6,
    likedBy: "Brandon Steward",
    name: "Ethan Walker",
    title: "Mobile Designer",
    timeAgo: "8h",
    content:
      "Experimenting with a more editorial layout for a creator app feed.",
    profileImage: suggestion1,
    image: content2,
    time: 8,
    likes: 90,
    isLiked: false,
    comments: [],
  },
];

const initialState = {
  posts: initialPosts,
  sortBy: "recent",
};

function postsReducer(state, action) {
  switch (action.type) {
    case "SET_SORT":
      return {
        ...state,
        sortBy: action.payload,
      };

    case "CREATE_POST": {
      const { text, image } = action.payload;
      const trimmedText = text.trim();

      if (!trimmedText && !image) return state;

      const newPost = {
        id: Date.now(),
        likedBy: "",
        name: "Hanif Al hafiz",
        title: "UI/UX Designer",
        timeAgo: "now",
        content: trimmedText,
        profileImage: avatar,
        image: image?.url ?? null,
        time: 0,
        likes: 0,
        isLiked: false,
        comments: [],
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    }

    case "TOGGLE_LIKE":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.payload) return post;

          const isLiked = !post.isLiked;

          return {
            ...post,
            isLiked,
            // likedBy: isLiked ? "Hanif Al hafiz" : "",
            likes: isLiked ? post.likes + 1 : post.likes - 1,
          };
        }),
      };

    case "ADD_COMMENT": {
      const { postId, text } = action.payload;
      const trimmedText = text.trim();

      if (!trimmedText) return state;

      const newComment = {
        id: Date.now(),
        author: "Hanif al hafiz",
        text: trimmedText,
        timeAgo: "now",
      };

      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id != postId) return post;

          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }),
      };
    }
    default:
      return state;
  }
}

export function PostsProvider({ children }) {
  const [state, dispatch] = useReducer(postsReducer, initialState);

  const sortedPosts = useMemo(() => {
    const posts = [...state.posts];

    if (state.sortBy === "recent") {
      return posts.sort((a, b) => a.time - b.time);
    }
    return posts.sort((a, b) => b.comments.length - a.comments.length);
  }, [state.posts, state.sortBy]);

  const value = {
    posts: sortedPosts,
    sortBy: state.sortBy,
    setSortBy: (value) => dispatch({ type: "SET_SORT", payload: value }),
    createPost: (text, image = null) =>
      dispatch({ type: "CREATE_POST", payload: { text, image } }),
    toggleLike: (postId) => dispatch({ type: "TOGGLE_LIKE", payload: postId }),
    addComment: (postId, text) =>
      dispatch({ type: "ADD_COMMENT", payload: { postId, text } }),
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
