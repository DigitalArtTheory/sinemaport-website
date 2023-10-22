"use client";
import React, { useState } from "react";
// import "node_modules/react-modal-video/scss/modal-video.scss";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

const CaroVideos = ({ videoId, onPlay }) => {
  return (
    <>
      <VideoThumbnail videoId={videoId} onPlay={onPlay} />
    </>
  );
};

export default CaroVideos;
