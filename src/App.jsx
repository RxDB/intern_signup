import { useState } from "react";
import styles from "./App.module.css";
import TextInput from "./common/TextInput/TextInput";
const App = () => {
  const [formData, setFormData] = useState([]);

  const initalFormData = {
    name: "",
    email: "",
    password: "",
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Create a account</h1>
      <div>If you already have an account log in</div>

      <form>
        <TextInput
          name="firstName"
          label="First Name"
          type="text"
          onChange={handleFormChange}
        />
        <TextInput
          name="lastName"
          label="Last Name"
          onChange={handleFormChange}
        />
        <TextInput
          name="name"
          label="name"
          onChange={handleFormChange}
          type="email"
        />
        <TextInput
          name="name"
          label="name"
          onChange={handleFormChange}
          type="password"
        />
        <TextInput
          name="name"
          label="name"
          onChange={handleFormChange}
          type="password"
        />

        <div className={styles.checkBox}>
          <input
            name="showPwd"
            // onChange={showPassword}
          ></input>
          <label>Show Password</label>
        </div>

        <div className={styles.submitButton}>
          <button
            type="submit"
            // onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};
export default App;
