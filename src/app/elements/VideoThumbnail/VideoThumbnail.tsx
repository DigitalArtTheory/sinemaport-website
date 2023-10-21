import React from "react";
import styles from "./VideoThumbnail.module.css";
import Image from "next/image";

const VideoThumbnail = ({ videoId, onPlay }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      className={`${styles.thumbnailWrapper} w-[10rem] sm:max-w-[23rem] sm:w-full`}
      onClick={onPlay}
    >
      <Image
        src={thumbnailUrl}
        alt="YouTube Video Thumbnail"
        layout="responsive"
        width={1280}
        height={720}
      />
      <div className={styles.playButton}></div>
    </div>
  );
};

export default VideoThumbnail;
