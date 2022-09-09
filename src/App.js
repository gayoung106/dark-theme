import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <form>
            <label>E-mail</label>
            <input type="email" placeholder="enter your Email" />
            <label>Password</label>
            <input type="password" placeholder="enter your Password" />
            <div className="remember">
              <input type="checkBox" checked="checked" />
              <p>Remember Me</p>
            </div>
            <button> Log In </button>
          </form>
          <div className="bottom">
            <p>Forger your password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">Create Account</p>

          <p className="divider">
            <span>Or</span>
          </p>
          <div className="top">
            <i class="fab fa-google"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fab fa-apple"></i>
          </div>
        </div>
        <div className="theme-toggle">
          <h2>{theme === "light" ? "Dark Theme" : "Light Theme"}</h2>
          <i onClick={switchTheme} className="fas fa-toggle-on"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
