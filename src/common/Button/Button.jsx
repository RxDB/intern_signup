import styles from "./Button.module.css";

const Button = ({ type, name, className, icon, ariaLabel }) => {
  return (
    <div className={className}>
      <button type={type} className={styles.button} aria-label={ariaLabel}>
        {icon && <img src={icon} alt="" className={styles.icon} />}
        {name}
      </button>
    </div>
  );
};

export default Button;
