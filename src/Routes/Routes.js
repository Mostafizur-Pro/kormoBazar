import React from "react";
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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import JobForm from "../Pages/Job/JobForm/JobForm";
import JobLayout from "../Layout/JobLayout/JobLayout";
import AllJob from "../Pages/Job/AllJob/AllJob";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}>
        <Route
          index
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="jobs/create-job"
          element={
            <PrivateRoute>
              <JobForm />
            </PrivateRoute>
          }
        />
        <Route
          path="about"
          element={
            <PrivateRoute>
              <AboutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="contact"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        />
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>
      <Route path="/jobs" element={<JobLayout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <AllJob />
            </PrivateRoute>
          }
        />
      </Route>
    </>
  )
);

export default router;
