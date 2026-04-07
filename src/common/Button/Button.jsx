import styles from "./Button.module.css";

const Button = ({ type, name, className, icon, ariaLabel, onClick }) => {
  return (
    <div className={className}>
      <button
        type={type}
        className={styles.button}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {icon && <img src={icon} alt="" className={styles.icon} />}
        {name}
      </button>
    </div>
  );
};

export default Button;
