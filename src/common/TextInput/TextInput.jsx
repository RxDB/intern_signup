import styles from "./TextInput.module.css";

const TextInput = ({ name, value, label, type, onChange, className,error }) => {
  return (
    <div className={`${styles.inputField} ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        label={label}
        id={name}
        type={type}
        onChange={onChange}
        aria-invalid={Boolean(error)}
      >
      </input>
       <div className={styles.error}>{error || "\u00A0"}</div>
    </div>
  );
};

export default TextInput;
