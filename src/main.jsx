import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Resume from './Components/Resume.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Project from './Components/Projects/Project.jsx'
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/><Footer/></>,
    errorElement: <><Navbar/><ErrorPage/><Footer/></>,
  },
  {
    path: "/about",
    element: <><Navbar/><About/><Footer/></>
  },
  {
    path: "/projects",
    element: <><Navbar/><Project/><Footer/></>
  },
  {
    path: "/resume",
    element: <><Navbar/><Resume/><Footer/></>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
