// src/components/UploadBar.js
import React, { useState } from "react";
import "./UploadBar.css";
import { Menu, Bell, UserCircle2 } from "lucide-react";


export default function UploadBar({ onUpload }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    channel: "",
    thumbnail: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData((d) => ({ ...d, [name]: files ? files[0] : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const videoURL = URL.createObjectURL(data.video);
    const thumbURL = URL.createObjectURL(data.thumbnail);

    onUpload({
      id: Date.now(),
      title: data.title,
      channel: data.channel,
      src: videoURL,
      thumbnail: thumbURL,
    });

    setData({ title: "", channel: "", thumbnail: null, video: null });
    setOpen(false);
  };

  return (
    <div className="upload-bar">
      {/* Menu Icon */}
      <div className="menu-icon">
        <Menu size={24} />
      </div>

      {/* YouTube Logo */}
      <img
        className="youtube-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
        alt="YouTube"
      />

      {/* Search input */}
      {/* Search input + icon */}
<div className="search-wrap">
  <input type="text" placeholder="Search…" className="search-input" />
  <img
    src="https://www.svgrepo.com/show/7109/search.svg"
    alt="Search"
    className="search-icon"
  />
</div>


      {/* Upload Button */}
     {/* Upload Button */}
<button className="upload-btn" onClick={() => setOpen(true)}>
  Upload
</button>

{/* Extra icons */}
<Bell className="header-icon" aria-label="Notifications" />
<UserCircle2 className="header-icon" aria-label="Profile" />


      {/* Upload Modal */}
      {open && (
        <div className="modal">
          <form className="form" onSubmit={handleSubmit}>
            <h3>Upload Video</h3>

            <input
              name="title"
              placeholder="Title"
              value={data.title}
              onChange={handleChange}
              required
            />
            <input
              name="channel"
              placeholder="Channel"
              value={data.channel}
              onChange={handleChange}
              required
            />
            <label>Thumbnail:</label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              onChange={handleChange}
              required
            />
            <label>Video:</label>
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleChange}
              required
            />

            <button type="submit" className="submit">Submit</button>
            <button type="button" className="cancel" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
