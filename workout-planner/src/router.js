import { createBrowserRouter } from "react-router-dom";
import WorkoutPlan from "./components/WorkoutPlan";
import Layout from "./components/Layout";
import CreatePlan from "./components/CreatePlan";
import NotFound from "./components/NotFound";
import Workout from './components/Workout'

const router = createBrowserRouter([
    { path: "/", element: <Layout/>, errorElement: <NotFound/>, children:[
    {path:'', element: <WorkoutPlan/> }, 
    {path:'plan', element: <WorkoutPlan/>},
    {path:'plan/:day', element: <Workout/>},
    {path:'newplan', element: <CreatePlan/>},
]} ]);
export default router;
