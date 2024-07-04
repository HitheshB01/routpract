import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Navbar from "./Navbar";
import ErrorPage from "./ErrorPage";
import Contacts from "./Contacts";
import Forms from "./Forms";
import Footer from "./Footer";

const RouterPractise = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/contacts",
      element: (
        <>
          <Navbar />
          <Contacts />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default RouterPractise;
