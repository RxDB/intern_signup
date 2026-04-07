import { useRef, useEffect, useState } from "react";
import styles from "./HomeContent.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import GroupCard from "../GroupCard/GroupCard";
import FollowedCard from "../FollowedCard/FollowedCard";
import SuggestionCard from "../SuggestionCard/SuggestionCard";
import CoursesCard from "../CoursesCard/CoursesCard";
import FooterCard from "../FooterCard/FooterCard";
import CreatePost from "../CreatePost/CreatePost";
import SortBar from "../SortBar/SortBar";
import PostCard from "../PostCard/PostCard";
import avatar from "../../../assets/avatar.jpeg";
import suggestion1 from "../../../assets/suggestions/1691240541842.jpeg";
import suggestion2 from "../../../assets/suggestions/1705255323848.jpeg";
import suggestion3 from "../../../assets/suggestions/1713795109052.jpeg";
import suggestion4 from "../../../assets/suggestions/1732875366373.jpeg";
import suggestion5 from "../../../assets/suggestions/1740908165366.jpeg";
import content1 from "../../../assets/content/1774978191626.jpeg";
import content2 from "../../../assets/content/1775200847704.jpeg";
import content3 from "../../../assets/content/1774551643147.jpeg";
import content4 from "../../../assets/content/1775211244394.jpeg";

const initialPosts = [
  {
    id: 1,
    likedBy: "Michael Jack",
    name: "Steven Smith",
    title: "UI Designer",
    timeAgo: "2h",
    content:
      "I'm back with a design exploration of the weather mobile app concept. This design concept allows you to know the weather for today and the following days. You can also search for weather information in other locations around the world. Besides weather info, you can also find out how good the air quality around .....",
    profileImage: suggestion1,
    image: content1,
    time: 2,
    comments: 96,
  },
  {
    id: 2,
    likedBy: "Emma Laurent",
    name: "Luca Moretti",
    title: "Product Designer",
    timeAgo: "1h",
    content:
      "Sharing a refined onboarding flow for a fintech dashboard. The focus this time was reducing friction in the first three screens and making the hierarchy feel more obvious on smaller devices.",
    profileImage: suggestion2,
    image: content2,
    time: 1,
    comments: 84,
  },
  {
    id: 3,
    likedBy: "Mateo Kovac",
    name: "Sofia Lindberg",
    title: "Frontend Developer",
    timeAgo: "3h",
    content:
      "Spent the afternoon polishing a component library update. Most of the work went into button states, spacing consistency, and getting the cards to feel lighter without losing structure.",
    profileImage: suggestion3,
    image: content3,
    time: 3,
    comments: 61,
  },
  {
    id: 4,
    likedBy: "Clara Hoffmann",
    name: "Noah Bennett",
    title: "Visual Designer",
    timeAgo: "5h",
    content:
      "A quick visual study from a recent branding sprint. I pushed the metallic textures further and tested how they behave behind interface copy, icons, and product screenshots.",
    profileImage: suggestion4,
    image: content4,
    time: 5,
    comments: 44,
  },
  {
    id: 5,
    likedBy: "Rose Stratton",
    name: "Ava Collins",
    title: "UX Researcher",
    timeAgo: "6h",
    content:
      "Collected feedback from the latest usability round and turned it into a cleaner task flow. The biggest takeaway was that users wanted fewer decisions up front and more context inline.",
    profileImage: suggestion5,
    image: content1,
    time: 6,
    comments: 72,
  },
  {
    id: 6,
    likedBy: "Brandon Steward",
    name: "Ethan Walker",
    title: "Mobile Designer",
    timeAgo: "8h",
    content:
      "Experimenting with a more editorial layout for a creator app feed. The goal is to keep content dense but still give each post enough room to breathe on mobile.",
    profileImage: suggestion1,
    image: content2,
    time: 8,
    comments: 53,
  },
];

const HomeContent = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [postText, setPostText] = useState("");

  const [sortBy, setSortBy] = useState("top");
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftTop, setLeftTop] = useState("1rem");
  const [rightTop, setRightTop] = useState("1rem");

  useEffect(() => {
    const calculate = () => {
      const viewportH = window.innerHeight;
      const margin = 16;

      [
        { el: leftRef.current, set: setLeftTop },
        { el: rightRef.current, set: setRightTop },
      ].forEach(({ el, set }) => {
        if (!el) return;
        const h = el.offsetHeight;
        if (h > viewportH - margin * 2) {
          set(`${viewportH - h - margin}px`);
        } else {
          set("1rem");
        }
      });
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const sortedPosts = [...posts].sort((firstPost, secondPost) => {
    if (sortBy === "recent") {
      return firstPost.time - secondPost.time;
    }

    return secondPost.comments - firstPost.comments;
  });

  const handleCreatePost = () => {
    const trimmedPost = postText.trim();

    if (!trimmedPost) {
      return;
    }

    const newPost = {
      id: Date.now(),
      likedBy: "You",
      name: "Hanif Al Haifzh",
      title: "UI/UX Designer",
      timeAgo: "Just now",
      content: trimmedPost || "Shared new attachments.",
      profileImage: avatar,

      time: 0,
      comments: 0,
    };

    setPosts((currentPosts) => [newPost, ...currentPosts]);
    setPostText("");
  };

  return (
    <main className={styles.grid}>
      <aside
        ref={leftRef}
        className={styles.leftSidebar}
        style={{ top: leftTop }}
        aria-label="Profile sidebar"
      >
        <ProfileCard />
        <GroupCard />
        <FollowedCard />
      </aside>

      <section className={styles.feed} aria-label="Main feed">
        <CreatePost
          value={postText}
          onChange={(event) => setPostText(event.target.value)}
          onSubmit={handleCreatePost}
        />
        <SortBar value={sortBy} onChange={setSortBy} />
        {sortedPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      <aside
        ref={rightRef}
        className={styles.rightSidebar}
        style={{ top: rightTop }}
        aria-label="Suggestions sidebar"
      >
        <SuggestionCard />
        <CoursesCard />
        <FooterCard />
      </aside>
    </main>
  );
};

export default HomeContent;
