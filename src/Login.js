import React from "react";
import useLocalStorage from "use-local-storage";
import "./index.css";
import { useRef, useState, useEffect } from "react";

const Login = () => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>

        {success ? (
          <section className="container">
            <p> 로그인에 성공했습니다!</p>
            <br />
            <p>
              <a href="#">메인으로 이동!</a>
            </p>
          </section>
        ) : (
          <section className="container">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">E-mail</label>
              <input
                type="email"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                placeholder="enter your Email"
                required
              />
              <label>Password</label>
              <input
                type="password"
                id="password"
                ref={userRef}
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                placeholder="enter your Password"
                required
              />

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
          </section>
        )}
        <div className="theme-toggle">
          <h2>{theme === "light" ? "Dark Theme" : "Light Theme"}</h2>
          <i onClick={switchTheme} className="fas fa-toggle-on"></i>
        </div>
      </div>
    </div>
  );
};

export default Login;
