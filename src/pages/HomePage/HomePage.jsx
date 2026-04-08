import styles from "./HomePage.module.css";
import HomeContent from "./HomeContent/HomeContent";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <HomeContent />
      </div>
    </div>
  );
};

export default HomePage;
