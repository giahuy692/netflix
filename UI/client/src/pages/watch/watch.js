import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import "./watch.scss";
import video from "./video/The Matrix Video.mp4";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIosNewOutlinedIcon />
        Home
      </div>
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