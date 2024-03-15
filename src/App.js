import "./app.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/private-route";
import PublicRoute from "./routes/public-route";
import HomePage from "./section/home";
import Login from "./section/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
