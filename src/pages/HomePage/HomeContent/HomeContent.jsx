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

const posts = [
  {
    id: 1,
    likedBy: "Michael Jack",
    name: "Steven Smith",
    title: "UI Designer",
    timeAgo: "2h",
    content:
      "I'm back with a design exploration of the weather mobile app concept. This design concept allows you to know the weather for today and the following days. You can also search for weather information in other locations around the world. Besides weather info, you can also find out how good the air quality around .....",
    image: "",
    time:2,
    comments: 96,
  },
  {
    id: 2,
    likedBy: "Michael Jack",
    name: "Steven Smith",
    title: "UI Designer",
    timeAgo: "2h",
    content:
      "I'm back with a design exploration of the weather mobile app concept. This design concept allows you to know the weather for today and the following days. You can also search for weather information in other locations around the world. Besides weather info, you can also find out how good the air quality around .....",
    image: "",
    time:1,
    comments: 96,
  },
];


const HomeContent = () => {
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
        <CreatePost />
        <SortBar />
        {posts.map((post) => (
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
