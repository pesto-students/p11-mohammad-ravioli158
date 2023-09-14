import { createBrowserRouter } from "react-router-dom";
import WorkoutPlan from "./components/WorkoutPlan";
import Layout from "./components/Layout";
import CreatePlan from "./components/CreatePlan";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Workout from './components/Workout'
const plan = null
const router = createBrowserRouter([
    { path: "/", element: <Layout/>, errorElement: <NotFound/>, children:[
    {path:'', element: (plan? <WorkoutPlan/> : <CreatePlan/>)}, 
    {path:'plan', element: <WorkoutPlan/>},
    {path:'plan/:day', element: <Workout/>},
    {path:'newplan', element: <CreatePlan/>},
    {path:'profile', element: <Profile/>}
]} ]);
export default router;
