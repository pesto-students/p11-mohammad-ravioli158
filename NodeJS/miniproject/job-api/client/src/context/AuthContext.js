import { createContext, useContext, useMemo } from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { useLocalStorage } from "../hooks/useLocalStorage"

import { Navigate } from "react-router-dom"
export const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    

    const [authenticated, setAuthenticated] = useLocalStorage('authenticated', false)

  
    const signUp = (email, password) => {
        console.log('handle signup')
    }
    const signIn = async (email, password) => {
        try {
            const loginData = {
                email: "ravi@gmail.com",
                password: "1234"
            }
            const response = await axios.post('http://localhost:5000/api/auth/signin', loginData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("response is", response.data)
            if (response.data.authenticated) {
                setAuthenticated(true)
                Navigate("/")
            }   
        } catch (error) {
            console.log('error while log in', error.message)
        }
    }
    const signOut = () => {
            setAuthenticated(false)
            Navigate('/signin')
    }
    const value = useMemo(() => ({ authenticated, signUp, signIn, signOut }), [authenticated])
    return <AuthContext.Provider value={value} > {children}</ AuthContext.Provider>
}

