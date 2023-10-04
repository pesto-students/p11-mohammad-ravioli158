import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedRoute><Layout /></ProtectedRoute>,
        children: [
            {
                path: '',
                element: <JobList />
            }, {
                path: ':id',
                element: <JobDetails />
            }
        ]

    },
    {
        path: '/signin',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    }
])
export default router