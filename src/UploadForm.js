import React, { useState } from 'react';
import './UploadForm.css';

const UploadForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    channel: '',
    thumbnail: null,
    video: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded Data:", formData);
    setIsModalOpen(false);
  };

  return (
    <div className="upload-container">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        className="search-bar"
      />

      {/* Upload Button */}
      <button onClick={() => setIsModalOpen(true)} className="upload-btn">
        Upload
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit} className="upload-form">
            <h3>Upload Video Details</h3>

            <input
              type="text"
              name="title"
              placeholder="Enter title name"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="channel"
              placeholder="Enter channel name"
              onChange={handleInputChange}
              required
            />
            <label>Upload Thumbnail:</label>
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              onChange={handleInputChange}
              required
            />
            <label>Upload Video:</label>
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" onClick={() => setIsModalOpen(false)} className="cancel-btn">Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
