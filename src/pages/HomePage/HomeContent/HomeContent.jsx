import { Outlet } from "react-router-dom";
import PageHeader from "../../../common/PageHeader/PageHeader";
import styles from "./HomeContent.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import GroupCard from "../GroupCard/GroupCard";
import FollowedCard from "../FollowedCard/FollowedCard";
import SuggestionCard from "../SuggestionCard/SuggestionCard";
import CoursesCard from "../CoursesCard/CoursesCard";
import FooterCard from "../FooterCard/FooterCard";



const HomeContent = () => {
  return (
    <div className={styles.page}>
      <main className={styles.grid}>
        <PageHeader />
        <aside className={styles.leftSidebar} aria-label="Profile sidebar">
          <ProfileCard />
          <GroupCard />
          <FollowedCard />
        </aside>

        <section className={styles.feed} aria-label="Main feed">
          <Outlet />
        </section>

        <aside className={styles.rightSidebar} aria-label="Suggestions sidebar">
          <SuggestionCard />
          <CoursesCard />
          <FooterCard />
        </aside>
      </main>
    </div>
  );
};

export default HomeContent;
