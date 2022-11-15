import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import "./watch.scss";
import video from "./video/The Matrix Video.mp4";
import { Link } from "react-router-dom";

export default function Watch() {
  return (
    <div className="watch">
      <Link to="/" className="back">
        <ArrowBackIosNewOutlinedIcon />
        Home
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src={video}
      />
    </div>
  );
}