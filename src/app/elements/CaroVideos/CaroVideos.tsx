"use client";
import React, { useState } from "react";
// import "node_modules/react-modal-video/scss/modal-video.scss";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

const CaroVideos = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VideoThumbnail videoId={videoId} onPlay={() => setIsOpen(true)} />
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          youtube={{ controls: 0, autoplay: 1, mute: 1 }}
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setIsOpen(false)}
        />
      </React.Fragment>
    </>
  );
};

export default CaroVideos;
