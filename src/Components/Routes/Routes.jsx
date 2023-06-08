// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import Errorpage from "../Error/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
        path: "/blog",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
