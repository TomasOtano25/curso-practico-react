import React, { FC, PropsWithChildren } from "react";

import { NewPasswordForm } from "../components/NewPasswordForm";
import yardSaleLogo from "../assets/logos/logo_yard_sale.svg";

import "../styles/NewPassword.scss";

export const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src={yardSaleLogo} alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new passwrd for yue account</p>

        <NewPasswordForm />
      </div>
    </div>
  );
};
