import styles from "./HomeContent.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import GroupCard from "../GroupCard/GroupCard";
import FollowedCard from "../FollowedCard/FollowedCard";
import SuggestionCard from "../SuggestionCard/SuggestionCard";
import CoursesCard from "../CoursesCard/CoursesCard";
import FooterCard from "../FooterCard/FooterCard";
import CreatePost from "../CreatePost/CreatePost";
const HomeContent = () => {
  return (
    <main className={styles.grid}>
      <aside className={styles.leftSidebar} aria-label="Profile sidebar">
      <ProfileCard/>
      <GroupCard/>
      <FollowedCard/>
      </aside>

      <section className={styles.feed} aria-label="Main feed">
       <CreatePost/>
      </section>

      <aside className={styles.rightSidebar} aria-label="Suggestions sidebar">
    
        <SuggestionCard/>
        <CoursesCard/>
        <FooterCard/>
      </aside>
    </main>
  );
};

export default HomeContent;
