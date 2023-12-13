import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Addbook from "../pages/Addbook";
import Categorybooks from "../pages/Categorybooks";
import Details from "../pages/Details";
import Read from "../pages/Read";
import Allbooks from "./Allbooks";
import Update from "../pages/Update";
import Error from "../pages/Error";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import Borrowedbooks from "./Borrowedbooks";
import Privateroute from "./Privateroute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/addbook',
          element: <Privateroute><Addbook></Addbook></Privateroute>
        },
        {
          path: '/categorybooks/:id',
          element: <Categorybooks></Categorybooks>,
          loader: () => fetch('http://localhost:5000/allbooks')
        },
        {
          path: '/details/:id',
          element: <Privateroute><Details></Details></Privateroute>,
          loader: () => fetch('http://localhost:5000/allbooks')
        },
        {
          path: '/read/:id',
          element: <Read></Read>,
          loader: () => fetch('http://localhost:5000/allbooks')
        },
        {
          path: '/allbook',
          element: <Privateroute><Allbooks></Allbooks></Privateroute>,
          loader: () => fetch('http://localhost:5000/allbooks')
        },
        {
          path: '/update/:id',
          element: <Privateroute><Update></Update></Privateroute>,
          loader: ({params}) => fetch(`http://localhost:5000/allbooks/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/borrowedbooks',
          element: <Privateroute><Borrowedbooks></Borrowedbooks></Privateroute>,
          loader: () => fetch('http://localhost:5000/addbooks')
        }
      ]
    },
  ]);


export default router;