import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/Home/HomePage";
import Login from "../Pages/Auth/Login/Login";
import AuthLayout from "../Layout/AuthLayout";
import Signup from "../Pages/Auth/Signup/Signup";
import AboutPage from "../Pages/About/AboutPage";
import ContactPage from "../Pages/Contact/ContactPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {/* <Route path="logout" action={logoutUser} /> */}
      </Route>
    </Route>
  )
);

export default router;
