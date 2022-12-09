import "./App.scss"
import Home from "./pages/home/home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/watch";
import Login from "./pages/login/login";
import Series from "./components/series/series";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate replace to="/register" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate replace to="/" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate replace to="/" />} />
          {user && (
            <>
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/series" element={<Series />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </Router>
      {/* <Dashboard /> */}
    </div>
  )
};

export default App;