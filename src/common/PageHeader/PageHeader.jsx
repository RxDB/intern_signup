import styles from "./PageHeader.module.css";
import homeIcon from "../../assets/home.svg";
import peopleIcon from "../../assets/people.svg";
import suitcaseIcon from "../../assets/suitcase.svg";
import chatIcon from "../../assets/chat.svg";
import bellIcon from "../../assets/bell.svg";
import fourIcon from "../../assets/four.svg";
import searchIcon from "../../assets/search.svg";
import linked from "../../assets/linkedin.png";
import dark from "../../assets/dark.svg";
import Button from "../../common/Button/Button.jsx";
import avatar from "../../assets/avatar.jpeg";
const PageHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftIcons}>
        <div className={styles.linked}>
          <img src={linked} alt="LinkedIn" />
        </div>
        <div className={styles.darkMode}>
          <img src={dark} alt="Toggle theme" />
        </div>
      </div>
      <div className={styles.centerSection}>
        <label className={styles.searchWrapper}>
          <span className={styles.srOnly}>Search</span>
          <img src={searchIcon} alt="" className={styles.searchIcon} />
          <input
            placeholder="Search"
            className={styles.search}
            type="search"
            aria-label="Search"
          />
        </label>

        <nav className={styles.centerIcons} aria-label="Primary">
          <Button
            name="Home"
            type="button"
            icon={homeIcon}
            className={`${styles.navI} ${styles.homeIcon}`}
          />
          <Button
            name="My network"
            type="button"
            icon={peopleIcon}
            className={styles.navI}
          />
          <Button
            name="Jobs"
            type="button"
            icon={suitcaseIcon}
            className={styles.navI}
          />
        </nav>
      </div>

      <div className={styles.centerSeparator} />

      <div className={styles.rightIcons}>
        <div className={styles.notificationButton}>
          <Button
            name=""
            type="button"
            icon={bellIcon}
            className={styles.navI}
            ariaLabel="Notifications"
          />
          <span className={styles.notificationCount}>2</span>
        </div>
        <Button
          name=""
          type="button"
          icon={chatIcon}
          className={styles.navI}
          ariaLabel="Messages"
        />
        <div className={styles.profileIcon}>
          <img src={avatar} alt="profile"></img>
          <span className={styles.meWrapper}>
            <span>Me</span>
            <select></select>
          </span>
        </div>
        <Button
          name="Work"
          type="button"
          icon={fourIcon}
          className={styles.navI}
          ariaLabel="Apps"
        />
      </div>
    </header>
  );
};
export default PageHeader;
