import React from "react";
import "./VideoPlayerModall.css";

export default function VideoPlayerModal({ video, onClose }) {
  return (
    <div className="player-overlay">
      <div className="player-box">
        <button className="close" onClick={onClose}>&times;</button>
        <video src={video.src} controls autoPlay className="player" />
        <h3>{video.title}</h3>
        <p>{video.channel}</p>
      </div>
    </div>
  );
}
