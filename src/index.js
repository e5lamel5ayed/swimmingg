import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MyAcount from "./Employee/Pages/MyAcount/MyAcount";
import Booking from "./Employee/Pages/Booking";
import Login from "./Login/Login";
import Emploee from "./Employee/Empolee";
import Register from "./Login/Register";
import App from "./App";
import Classes from "./Employee/Pages/Classes/Classes";
import Father from "./Father/Father";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/MyAcount",
    element: <MyAcount />,
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
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/classes",
    element: <Classes />,
  },
  {
    path: "/Emploee",
    element: <Emploee />,
  },
  {
    path: "/Father",
    element: <Father />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);