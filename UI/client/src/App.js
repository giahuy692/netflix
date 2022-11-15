import "./App.scss"
import Home from "./pages/home/home";
// import Register from "./pages/register/Register";
import Watch from "./pages/watch/watch";
import Login from "./pages/login/login";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/movies" element={<Home type="movie" />} exact />
        <Route path="/series" element={<Home type="series" />} exact />
        <Route path="/watch" element={<Watch />} exact />
      </Routes>
    </Router>
  );
};

export default App;