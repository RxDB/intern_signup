import { useState } from "react";
import styles from "./SignupPage.module.css";
import TextInput from "../../common/TextInput/TextInput";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const illustrationPath = `${import.meta.env.BASE_URL}Illustration.png`;
// const backgroundImagePath = `${import.meta.env.BASE_URL}meshunsplash.jpg`;

const SignupPage = () => {
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

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
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
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    return newErrors;
  };

  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h1 className={styles.title}>Create a account</h1>
            <span>
              If you already have account <Link to="/login"> login</Link>
            </span>
          </div>

          <form onSubmit={handleSubmit} className={styles.createForm}>
            <TextInput
              name="firstName"
              label="First Name"
              type="text"
              value={formData.firstName}
              onChange={handleFormChange}
              error={errors.firstName}
            />
            <TextInput
              name="lastName"
              label="Last Name"
              value={formData.lastName}
              onChange={handleFormChange}
              error={errors.lastName}
            />
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
            <TextInput
              name="confirmPassword"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleFormChange}
              type={showPassword ? "text" : "password"}
              error={errors.confirmPassword}
            />

            <div className={styles.checkBox}>
              <input
                name="showPwd"
                type="checkbox"
                onChange={() =>
                  showPassword ? setShowPassword(false) : setShowPassword(true)
                }
              ></input>
              Show Password
            </div>
            <div className={styles.loginLink}>
              <Link to="/login">Log in instead</Link>
            </div>
            <Button type="submit" name="Create Account" className={styles.login}/>
          </form>
        </div>

        <div className={styles.illustration}>
          <img src={illustrationPath} alt="illustration" />
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
