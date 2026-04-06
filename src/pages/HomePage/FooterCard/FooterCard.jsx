import styles from "./FooterCard.module.css";
import linkedinLogo from "../../../assets/linkedin.png";

const footerLinks = [
  "About",
  "Accessibility",
  "Help Center",
  "Privacy & Terms",
  "Ad Choices",
  "Advertising",
  "Business Services",
  "Get the LinkedIn app",
  "More",
];

const FooterCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.links}>
        {footerLinks.map((link) => (
          <span key={link} className={styles.link}>
            {link}
          </span>
        ))}
      </div>

      <div className={styles.brandRow}>
        <img src={linkedinLogo} alt="LinkedIn" className={styles.logo} />
        <span className={styles.copyright}>LinkedIn Corporation &copy; 2021</span>
      </div>
    </div>
  );
};

export default FooterCard;
