import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    console.log("them changed", theme);
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
