import styles from "./HomeContent.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import GroupCard from "../GroupCard/GroupCard";
import FollowedCard from "../FollowedCard/FollowedCard";
import SuggestionCard from "../SuggestionCard/SuggestionCard";
import CoursesCard from "../CoursesCard/CoursesCard";
import FooterCard from "../FooterCard/FooterCard";
const HomeContent = () => {
  return (
    <main className={styles.grid}>
      <aside className={styles.leftSidebar} aria-label="Profile sidebar">
      <ProfileCard/>
      <GroupCard/>
      <FollowedCard/>
      </aside>

      <section className={styles.feed} aria-label="Main feed">
        {/* Phase 4-5: CreatePost, SortBar, PostCard */}
        <div className={styles.placeholder}>Center Feed</div>
      </section>

      <aside className={styles.rightSidebar} aria-label="Suggestions sidebar">
        {/* Phase 6: SuggestionCard, CoursesCard, FooterLinks */}
        {/* <div className={styles.placeholder}>Right Sidebar</div> */}
        <SuggestionCard/>
        <CoursesCard/>
        <FooterCard/>
      </aside>
    </main>
  );
};

export default HomeContent;
