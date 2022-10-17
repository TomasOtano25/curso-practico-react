import React, { FC, PropsWithChildren } from "react";

export const LoginPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new passwrd for yue account</p>
      </div>

      {children}
    </div>
  );
};
