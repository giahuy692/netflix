import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import "./watch.scss";
import { Link } from "react-router-dom";
// import { useContext } from 'react';
// import { Context } from "../../components/listItem/listItem";
import film from "./video/The Matrix Video.mp4";

export default function Watch() {
  // const location = useLocation();
  // const movie = location.movie;

  // const context = useContext(Context);
  
  // console.log(context);

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackIosNewOutlinedIcon />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={film} />
    </div>
  );
}