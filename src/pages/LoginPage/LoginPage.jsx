import { useState } from "react";
import styles from "./LoginPage.module.css";
import TextInput from "../../common/TextInput/TextInput";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const backgroundImagePath = `${import.meta.env.BASE_URL}meshunsplash.jpg`;

const LoginPage = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validate = validateForm();
    setErrors(validate);

    if (Object.keys(validate).length > 0) {
      return;
    }
    console.log(formData);
    setFormData(initialFormData);
    navigate("/homepage");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password length should be atleast 8";
    }

    return newErrors;
  };

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <div className={styles.top}>
          <h1 className={styles.title}>Login</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <TextInput
            name="email"
            label="Email address"
            value={formData.email}
            onChange={handleFormChange}
            type="email"
            className={styles.fullWidth}
            error={errors.email}
          />
          <TextInput
            name="password"
            label="Enter Password"
            value={formData.password}
            onChange={handleFormChange}
            type={showPassword ? "text" : "password"}
            error={errors.password}
          />
          <div className={styles.loginCheckBox}>
            <input
              name="showPwd"
              type="checkbox"
              onChange={() =>
                showPassword ? setShowPassword(false) : setShowPassword(true)
              }
            ></input>
            <label>Show Password</label>
          </div>
          <div className={styles.buttonGroup}>
            <div className={`${styles.consent} ${styles.underline}`}>
              By continuing you agree to the
              <span> Terms of use </span> and
              <span> Privacy Policy</span>
            </div>
            <Button type="submit" name="Login" />
          </div>

          <div className={styles.signupLink}>
            <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
