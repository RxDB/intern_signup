import { Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomeContent from "./pages/HomePage/HomeContent/HomeContent";
import CenterFeed from "./pages/HomePage/CenterFeed/CenterFeed";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/homepage" element={<HomeContent />}>
        <Route index element={<CenterFeed />} />
      </Route>
    </Routes>
  );
};
export default App;
