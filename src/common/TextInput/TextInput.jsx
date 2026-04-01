import styles from "./TextInput.module.css";

const TextInput = (name, value, label, onChange) => {
  return (
    <div className={styles.inputField}>
      <input
        name={name}
        value={value}
        label={label}
        id={name}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default TextInput