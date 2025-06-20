import React, { useRef, useEffect } from 'react';

function VideoPlayerOverlay({ project, onClose }) {
  const videoRef = useRef();

  useEffect(() => {
    // Optional: automatically play the video when the overlay opens
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Autoplay failed:", error));
    }
    // Pause and reset video when component unmounts (closes)
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, [project]); // Re-run effect if project changes

  return (
    <div className="overlay video-player-overlay">
      <div className="video-container">
        <h3>{project.title}</h3>
        <video ref={videoRef} src={project.videoUrl} controls autoPlay loop /> {/* Add other video attributes */}
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default VideoPlayerOverlay;
