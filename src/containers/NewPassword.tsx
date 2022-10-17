import React, { FC, PropsWithChildren } from "react";

import { NewPasswordForm } from "../components/NewPasswordForm";
import yardSaleLogo from "../assets/logos/logo_yard_sale.svg";

import "../styles/NewPassword.scss";

export const NewPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <img src={yardSaleLogo} alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>

        <NewPasswordForm />
      </div>
    </div>
  );
};
