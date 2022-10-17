import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NewPassword } from "../containers/NewPassword";
import { HomePage } from "../pages/HomePage";
import "../styles/global.css";
import { Layout } from "../containers/Layout";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { NotFound } from "../pages/NotFound";
import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import { Account } from "../containers/Account";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />

        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/recovery-password" element={<RecoveryPassword />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
