import { Link, useNavigate } from "react-router-dom";

import yardSaleLogo from "../assets/logos/logo_yard_sale.svg";

import "../styles/Login.scss";

export const Login = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={yardSaleLogo} alt="logo" className="logo" />

        <form action="/" className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            value="Log in"
            className="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>

        <button
          onClick={handleSignup}
          className="secondary-button signup-button"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
