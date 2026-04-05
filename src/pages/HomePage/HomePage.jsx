import styles from "./HomePage.module.css";
import PageHeader from "../../common/PageHeader/PageHeader";
import HomeContent from "./HomeContent/HomeContent";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <PageHeader />
        <HomeContent />
      </div>
    </div>
  );
};

export default HomePage;
