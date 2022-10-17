import React, { FC, PropsWithChildren } from "react";
import { LoginForm } from "../components/LoginForm";

import "../styles/Login.scss";

export const LoginPage = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <LoginForm />
      </div>
    </div>
  );
};
