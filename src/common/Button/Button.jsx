import styles from "./Button.module.css";

const Button = ({type, name}) => {
  return (
    <div className={styles.button}>
      <button type={type}>{name}</button>
    </div>
  );
};

export default Button;
