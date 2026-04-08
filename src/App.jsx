import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import CenterFeed from "./pages/HomePage/CenterFeed/CenterFeed";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/homepage" element={<HomePage/>}>
        <Route index element={<CenterFeed/>}/>
      </Route>
    </Routes>
  );
};
export default App;
