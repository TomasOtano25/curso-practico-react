import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { LoginPage } from "./containers/LoginPage";
import { HomePage } from "./containers/HomePage";
import "./styles/global.css";
import { Layout } from "./containers/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
