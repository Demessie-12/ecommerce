import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import SetCookie from "../hooks/SetCookie";
import RemoveCookie from "../hooks/RemoveCookie";
import { Link } from "react-router-dom";
import { showAlert } from "../Components/Alert/Alert";

export const LoginSignup = () => {
  const [isnewuser, setIsnewuser] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChane(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const ckecklogin = () => {
    if (!correctData) {
      showAlert("error", "Insert correct name and password");
    } else {
      RemoveCookie("user");
      SetCookie("user", "Demessie");
    }
  };

  const correctData =
    formData.username === "Demessie" && formData.password === "Shop1234";

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isnewuser === true ? "Sign up" : "Log in"}</h1>
        <div className="loginsignup-fields">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              required="true"
              onChange={handleChane}
              name="username"
              value={formData.username}
            />
            <p>Example: Demessie</p>
          </div>
          <div>
            {isnewuser && (
              <input
                type="email"
                placeholder="Email Address"
                required="true"
                onChange={handleChane}
                name="email"
                value={formData.email}
              />
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required="true"
              onChange={handleChane}
              name="password"
              value={formData.password}
            />
            <p>Example: Shop1234</p>
          </div>
        </div>
        <Link to={correctData ? "/" : "/login"}>
          <button onClick={ckecklogin}>
            {isnewuser === true ? "Continue" : "Log in"}
          </button>
        </Link>
        <p className="loginsignup-login">
          Are you new for our shop?{" "}
          <span
            onClick={() => {
              window.scroll(0, 0);
              showAlert("error", "system error. check it tommorow");
              setIsnewuser(false);
            }}
          >
            Create Account
          </span>
        </p>
        <div className="lgoinsignup-agree">
          <input type="checkbox" name="" id="" checked="true" />
          <p>By continuing, I agree to terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
