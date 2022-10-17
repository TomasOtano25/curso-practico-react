import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { LoginPage } from "./containers/LoginPage";
import { LoginForm } from "./components/LoginForm";
import { HomePage } from "./containers/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <LoginPage>
              <LoginForm />
            </LoginPage>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
