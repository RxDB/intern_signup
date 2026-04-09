import { useContext } from "react";

import { PostContext } from "./postContext";

export function usePosts() {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("usePosts must be used inside PostsProvider");
  }

  return context;
}
