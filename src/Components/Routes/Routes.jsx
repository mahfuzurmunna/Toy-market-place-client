// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Errorpage from "../Error/Errorpage";
import Mytoys from "../Pages/My Toys/Mytoys";
import Addatoy from "../Pages/Add a Toy/Addatoy";
import Alltoy from "../Pages/All toy/Alltoy";
import Loading from "../Pages/Loading/Loading";
import Privateroute from "./Privateroute";
import Viewdetails from "../Pages/View/Viewdetails";
import Updatetoy from "../Pages/My Toys/Updatetoy";

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
        path: "/alltoys",

        element: <Alltoy />,
      },
      {
        path: "/alltoys/:id",
        element: (
          <Privateroute>
            <Viewdetails />
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`https://kidquest-toy-marketplace-mahfuzurmunna.vercel.app/alltoys/${params.id}`),
      },
      {
        path: "/updatetoys/:id",
        element: <Updatetoy />,
      },

      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/addtoy",
        element: (
          <Privateroute>
            <Addatoy />
          </Privateroute>
        ),
      },
      {
        path: "/mytoys",
        element: <Mytoys />,
      },
    ],
  },
  {
    path: "/loading",
    element: <Loading />,
  },
]);

export default router;
