import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";

const Join = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Join</h1>
        <p className="container">
          <form>
            <label htmlFor="username">E-mail</label>
            <input
              type="email"
              id="username"
              placeholder="enter your Email"
              required
            />
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="enter your Password"
              required
            />
            <button> Join </button>
          </form>
        </p>

        <div className="theme-toggle">
          <h2>{theme === "light" ? "Dark Theme" : "Light Theme"}</h2>
          <i onClick={switchTheme} className="fas fa-toggle-on"></i>
        </div>
      </div>
    </div>
  );
};

export default Join;
