import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    { path: "/", element: <App/>, children:[
    // {path:'plan', element: <WorkoutPlan/>}, 
    // {path:'plan/:id', element: <Workout/>}
]} ]);
export default router;
