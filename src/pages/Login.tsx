import { useRef, FormEvent } from "react";

import { useNavigate } from "react-router-dom";

import yardSaleLogo from "../assets/logos/logo_yard_sale.svg";

import "../styles/Login.scss";

export const Login = () => {
  const form = useRef(null);

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(form.current!);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={yardSaleLogo} alt="logo" className="logo" />

        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="platzi@example.cm"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="primary-button login-button"
          >
            Log in
          </button>
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
