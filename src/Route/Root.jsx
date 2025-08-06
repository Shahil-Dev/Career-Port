import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Error from "../Components/Error";
import Home from "../Pages/Home";
import AllJobs from "../Pages/AllJobs";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PrivateRoute from './../Firebase/PrivateRoute';
import ShowDetails from "../Components/ShowDetails";
import Dashboard from "../Components/DashBoard";
import ApplyJobs from "../Components/ApplyJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-Jobs",
        element: <PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        path: "jobs/:id",
        element: <ShowDetails></ShowDetails>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/jobs/${params.id}`)
      },
      {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>
      },
      {
        path: "apply-jobs/:id",
        element: <PrivateRoute><ApplyJobs /></PrivateRoute>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "registration",
        element: <Registration></Registration>
      },
      {
        path: "*", // unmatched route fallback
        element: <Error />,
      }
    ]
  }
]);

export default router;
