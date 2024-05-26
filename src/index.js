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
import ChoseStudentEmploee from "./Employee/Pages/Classes/ChoseStudentEmploee";
import AddStudent from "./Employee/Pages/Classes/AddStudent";
import AddStudentFather from "./Father/Pages/Classes/AddStudentFather";
import ClassDetailsFather from "./Father/Pages/Classes/ClassDetailsFather";
import EditEmail from "./Father/Pages/MyAcount/AccountInfo/EditEmail";
import EditPhone from "./Father/Pages/MyAcount/AccountInfo/EditPhone";
import AddEmail from "./Father/Pages/MyAcount/AccountInfo/AddEmail";
import UpdateFamily from "./Father/Pages/MyAcount/Update/UpdateFamily";
import UpdatePassword from "./Father/Pages/MyAcount/Update/UpdatePassword";
import AddStudentFather2 from "./Father/Pages/Classes/AddStudentFather2";
import Setting from "./Employee/Pages/Setting/Setting";
import AddPlace from "./Employee/Pages/Setting/AddPlace";
import AddPath from "./Employee/Pages/Setting/AddPath";
// import ClassDetailsFather from "./Father/Pages/Classes/ClassDetailsFather";

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
    path: "/addstudent",
    element: <AddStudent />,
  },
  {
    path: "/choosestudent",
    element: <ChoseStudentEmploee />,
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
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/addPlace",
    element: <AddPlace />,
  },
  {
    path: "/addPath",
    element: <AddPath />,
  },
  {
    path: "/AllclassesFather",
    element: <AllClassesFather />,
  },
  {
    path: "/addstudentFather",
    element: <AddStudentFather />,
  },
  {
    path: "/addstudentFather2",
    element: <AddStudentFather2/>,
  },
 
  {
    path: "/classDetailsFather",
    element: <ClassDetailsFather />,
  },
  {
    path: "/editemail",
    element: <EditEmail />,
  },
  {
    path: "/editphone",
    element: <EditPhone />,
  },
  {
    path: "/addemail",
    element: <AddEmail />,
  },
  {
    path: "/UpdateFamily",
    element: <UpdateFamily />,
  },
  {
    path: "/UpdatePassword",
    element: <UpdatePassword />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);