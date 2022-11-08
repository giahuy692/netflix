import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/users" element={<UserList />} exact/>
          <Route path="/user/:userId" element={<User />} exact/>
            
          <Route path="/newUser" element={ <NewUser />} exact/>
           
          <Route path="/products" element={<ProductList />} exact/>
            
          <Route path="/product/:productId" element={<Product />} exact/>
            
          <Route path="/newproduct" element={<NewProduct />} exact/>
            
        </Routes>
      </div>
    </Router>
  );
}

export default App;
