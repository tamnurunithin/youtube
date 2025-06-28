import React from "react";
import "./VideoGallery.css";

export default function VideoGallery({ videos, onSelect }) {
  // Friendly fallback when the gallery is empty
  if (!videos.length) return <p style={{ padding: "1rem" }}>No videos yet</p>;

  return (
    <div className="gallery">
      {videos.map((v, idx) => (
        <div
          key={v.id}
          className="card"
          onClick={() => onSelect(idx)}
          title="Play video"
        >
          <img src={v.thumbnail} alt={v.title} className="thumb" />
          <h4 className="title">{v.title}</h4>
          <p className="channel">{v.channel}</p>
        </div>
      ))}
    </div>
  );
}
