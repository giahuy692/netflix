import "./App.scss"
import Home from "./pages/home/home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/watch";
import Login from "./pages/login/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/watch" element={<Watch />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
        </Routes>
      </Router>
      {/* <Dashboard /> */}
    </>
    </div>
  )
};

export default App;