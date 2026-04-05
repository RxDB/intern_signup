import styles from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <main className={styles.grid}>
      <aside className={styles.leftSidebar} aria-label="Profile sidebar">
        {/* Phase 2-3: ProfileCard, StatsCard, GroupCard, HashtagsCard */}
        <div className={styles.placeholder}>Left Sidebar</div>
      </aside>

      <section className={styles.feed} aria-label="Main feed">
        {/* Phase 4-5: CreatePost, SortBar, PostCard */}
        <div className={styles.placeholder}>Center Feed</div>
      </section>

      <aside className={styles.rightSidebar} aria-label="Suggestions sidebar">
        {/* Phase 6: SuggestionCard, CoursesCard, FooterLinks */}
        <div className={styles.placeholder}>Right Sidebar</div>
      </aside>
    </main>
  );
};

export default HomeContent;
