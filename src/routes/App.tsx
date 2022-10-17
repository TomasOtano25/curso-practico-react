import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NewPassword } from "../containers/NewPassword";
import { HomePage } from "../pages/HomePage";
import "../styles/global.css";
import { Layout } from "../containers/Layout";
import { RecoveryPassword } from "../containers/RecoveryPassword";
import { NotFound } from "../pages/NotFound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
