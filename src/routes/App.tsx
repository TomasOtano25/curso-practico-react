import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NewPassword } from "../pages/NewPassword";
import { Home } from "../pages/Home";
import "../styles/global.css";
import { Layout } from "../containers/Layout";
import { SendEmail } from "../pages/SendEmail";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { CreateAccount } from "../pages/CreateAccount";
import { MyAccount } from "../pages/MyAccount";
import { Orders } from "../pages/Orders";
import { Checkout } from "../pages/Checkout";
import { PasswordRecovery } from "../pages/PasswordRecovery";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />

        <Route path="/send-email" element={<SendEmail />} />

        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/signup" element={<CreateAccount />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
