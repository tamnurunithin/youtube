import React, { useState, useEffect } from "react";
import UploadBar from "./components/UploadBar";
import VideoGallery from "./components/VideoGallery";
import VideoPlayerModal from "./components/VideoPlayerModall";
import LoginModal from "./components/LoginModal";
import { staticVideos } from "./data/staticVideos"; // 👈 bring in the 12 placeholders

export default function App() {
  // start empty – we'll inject staticVideos only *after* login
  const [videos, setVideos] = useState([]);
  const [playing, setPlaying] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // controls popup

  // show login popup automatically the first time
  useEffect(() => setShowLogin(true), []);

  /* once the user logs‑in, seed the gallery exactly once */
  useEffect(() => {
    if (loggedIn && videos.length === 0) {
      setVideos(staticVideos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  return (
    <>
      {/* small button ⇢ opens login modal if not logged in */}
      {!loggedIn && (
        <button
          style={{ position: "absolute", top: 16, right: 16 }}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
      )}

      {/* LOGIN POP-UP */}
      {showLogin && !loggedIn && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSuccess={() => {
            setLoggedIn(true);
            setShowLogin(false);
          }}
        />
      )}

      {/* MAIN UI (only after login) */}
      {loggedIn && (
        <>
          <UploadBar
            onUpload={(v) =>
              setVideos((prev) => [v, ...prev]) /* prepend new video */
            }
          />
          <VideoGallery videos={videos} onSelect={setPlaying} />
          {playing !== null && (
            <VideoPlayerModal
              video={videos[playing]}
              onClose={() => setPlaying(null)}
            />
          )}
        </>
      )}
    </>
  );
}
