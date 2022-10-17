import React from "react";

export const LoginForm = () => {
  return (
    <form action="/" className="form">
      <label htmlFor="password" className="label">
        Password
      </label>
      <input
        type="password"
        id="password"
        placeholder="*********"
        className="input input-password"
      />

      <label htmlFor="new-password" className="label">
        Password
      </label>
      <input
        type="password"
        id="new-password"
        placeholder="*********"
        className="input input-password"
      />

      <input
        type="submit"
        value="Confirm"
        className="primary-button login-button"
      />
    </form>
  );
};
