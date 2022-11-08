import Navbar from "../../components/navbar/navbar";
import Featured from "../../components/featured/featured";
import List from "../../components/list/list";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      {/* <List />
      <List />
      <List /> */}
    </div>
  );
};

export default Home;