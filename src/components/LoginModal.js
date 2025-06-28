import React, { useState } from "react";
import "./LoginModal.css";

export default function LoginModal({ onClose, onSuccess }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ⚡️ replace with real auth later
    if (user.trim() && pass.trim()) {
      onSuccess();                // tell parent “logged-in”
    } else {
      setErr("Enter both username and password.");
    }
  };

  return (
    <div className="login-overlay">
      <form className="login-card" onSubmit={handleSubmit}>
        <h3>Sign in</h3>

        <input
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        {err && <p className="err">{err}</p>}

        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}
