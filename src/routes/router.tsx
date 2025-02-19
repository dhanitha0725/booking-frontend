import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  const { token } = useContext(AuthContext)!;
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!token ? <Navigate to="/login" /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/login" />}
        />
        {/* Home route */}
        <Route
          path="/login"
          element={token ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/home" /> : <Register />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
