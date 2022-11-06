import Navbar from "../../components/navbar/navbar";
// import Featured from "../../components/featured/featured";
import "./home.scss";
// import List from "../../components/list/list";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        width="100%"
        src="https://vn-test-11.slatic.net/p/5f9ee3ecdd2a799a0b54b2ca6cbd7fe6.jpg"
        alt=""
      />
      {/* <Featured/>
      <List/>
      <List/>
      <List/>
      <List/> */}
    </div>
  );
};

export default Home;