import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Login from "./Login/Login";
import Register from "./Login/Register";
import App from "./App";


import MyAcount from "./Employee/Pages/MyAcount/MyAcount";
import Booking from "./Employee/Pages/Booking";
import AllClasses from "./Employee/Pages/Classes/AllClasses";
import Emploee from "./Employee/Empolee";


import Father from "./Father/Father";
import MyAcountFather from "./Father/Pages/MyAcount/MyAcountFather";
import BookingFather from "./Father/Pages/BookingFather";
import ClassesFather from "./Father/Pages/Classes/ClassesFather";
import AllClassesFather from "./Father/Pages/Classes/AllClassesFather";
import ChoseClass from "./Father/Pages/Classes/ChoseClass";
import ClassDetails from "./Employee/Pages/Classes/ClassDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/MyAcount",
    element: <MyAcount />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/Allclasses",
    element: <AllClasses />,
  },
  {
    path: "/classDetails",
    element: <ClassDetails />,
  },
  {
    path: "/Emploee",
    element: <Emploee />,
  },
  {
    path: "/Father",
    element: <Father />,
  },
  {
    path: "/MyAcountFather",
    element: <MyAcountFather />,
  },
  {
    path: "/bookingFather",
    element: <BookingFather />,
  },
  {
    path: "/classesFather",
    element: <ClassesFather />,
  },
  {
    path: "/ChoseClass",
    element: <ChoseClass />,
  },
  {
    path: "/AllclassesFather",
    element: <AllClassesFather />,
  },
    
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);