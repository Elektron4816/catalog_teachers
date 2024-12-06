import "./VideoGreeting.css";

import closeBtn from "../../../image/closeBtnBlack.svg";
//import teacherVideoCard from "../../../image/teacherVideo/IMG_0492.mp4";
import { useState } from "react";

const videoOptions = {
  autoPlay: true,
  loop: true
};

function VideoGreeting(props) {
  const { videoLink, state } = props;
  // console.log(state);
  const [muted, setMuted] = useState(true);

  function handleClose(e) {
    if (e.target.id === "outPopClose") {
      document.getElementsByTagName("body")[0].style.overflow = "scroll";
      state(false);
    }
  }
  return (
    <div
      className="catalog-teacherVideo-container"
      id="outPopClose"
      onClick={handleClose}
    >
      <div className="catalog-teacherVideo-content">
        <div
          className="catalog-teacherVideo-close"
          onClick={() => {
            document.getElementsByTagName("body")[0].style.overflow = "scroll";
            state(false);
          }}
        >
          <img src={closeBtn} alt="closeBtn" />
        </div>
        <video
          id="teacherVideo"
          src={videoLink}
          muted={muted}
          {...videoOptions}
          onClick={() => {
            setMuted(!muted);
          }}
          type="video/mp4"
        />
      </div>
    </div>
  );
}

export default VideoGreeting;
