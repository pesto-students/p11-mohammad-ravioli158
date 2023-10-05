import { useState } from "react"
export const useLocalStorage = (key, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(key)
            if (value)
                return JSON.parse(value)
            else {
                window.localStorage.setItem(key, JSON.stringify(defaultValue))
                return defaultValue
            }
        } catch (error) {
            return defaultValue
        }
    })
    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(newValue))

        } catch (error) {
            console.log("Error saving value")
        }
        setStoredValue(newValue)
    }
    return [storedValue, setValue]
}