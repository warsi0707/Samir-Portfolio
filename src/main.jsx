import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar/><Home/><Footer/></>,
    errorElement: <><Navbar/><ErrorPage/><Footer/></>,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
