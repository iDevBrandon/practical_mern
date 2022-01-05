import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <section className="container">
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
