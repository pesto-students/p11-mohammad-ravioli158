import React, { useContext } from "react";
import "./ThemeSwitcher.css";
import { ThemeContext } from "../context/ThemeContext";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  // Update theme in ThemeContextProvider
  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };
  return (
    <div className="theme-switcher">
      <label>
        <input
          type="radio"
          value={"light"}
          checked={theme === "light"}
          onChange={handleThemeChange}
        />
        Light
      </label>
      <label>
        <input
          type="radio"
          value={"dark"}
          checked={theme === "dark"}
          onChange={handleThemeChange}
        />
        Dark
      </label>
    </div>
  );
};

export default ThemeSwitcher;
