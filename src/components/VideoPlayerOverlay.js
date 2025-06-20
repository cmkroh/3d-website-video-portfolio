import React, { useRef, useEffect, useState } from 'react';

function VideoPlayerOverlay({ project, onClose }) {
  const videoRef = useRef(null);
  const [youTubeData, setYouTubeData] = useState(null);

  const videoId = project.videoUrl.split('?v=')[1]; // extract ID if a YouTube URL

  // Fetch the YouTube data (title, description, etc.) if the URL is for YouTube
  useEffect(() => {
    if (videoId) {
      const apiKey = 'YOUR_YOUTUBE_API_KEY'; // *** REPLACE WITH YOUR API KEY ***
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.items && data.items.length > 0) {
            setYouTubeData(data.items[0].snippet);
          } else {
            setYouTubeData(null);
          }
        })
        .catch(error => {
          console.error("Error fetching YouTube data:", error);
          setYouTubeData(null);
        });
    }
  }, [videoId]); // Re-fetch if the videoId changes.

  // Optional: Automatically play the video when the overlay opens
  useEffect(() => {
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
        {youTubeData ? (
          <>
            <h3>{youTubeData.title}</h3>
            <p>{youTubeData.description}</p>
            {/* YouTube Iframe embed (preferred) */}
            <iframe
              width="800"
              height="450"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1`} //Modest Branding avoids youtube suggestions.
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen>
            </iframe>
          </>
        ) : (
          <>
            <h3>{project.title}</h3>
            {project.description && <p>{project.description}</p>}
            <p>Video source not available. Please update the video URL or API key.</p>
          </>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default VideoPlayerOverlay;
