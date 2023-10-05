import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    
    const {authenticated} = useContext(AuthContext)
    if(!authenticated){
        return <Navigate to="/signin"/>
    }
    return children
};

export default ProtectedRoute;
