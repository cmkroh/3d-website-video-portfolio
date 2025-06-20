/* Basic reset */
body {
  margin: 0;
  overflow: hidden; /* Hide scrollbars for immersive 3D */
  background-color: #0d1117;
  color: #c9d1d9;
  font-family: sans-serif;
}

#root {
  width: 100vw;
  height: 100vh;
} /* Ensure root fills screen */

/* Three.js Canvas will fill its parent (#root) */
canvas {
  display: block;
}

/* Header Styling */
.site-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(22, 27, 34, 0.7); /* Semi-transparent */
  color: #c9d1d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100; /* Above the canvas */
  pointer-events: none; /* Allow mouse events to pass through */
}

.site-header > * {
  pointer-events: auto; /* Re-enable pointer events for children */
}

.site-header h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #58a6ff;
}

.site-header nav button {
  background: none;
  border: none;
  color: #58a6ff;
  cursor: pointer;
  margin-left: 1rem;
  font-size: 1rem;
}

.site-header nav button:hover {
  text-decoration: underline;
}

/* Overlay Styling */
.overlay {
  position: fixed; /* Position above the 3D scene */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 17, 23, 0.9); /* Semi-transparent dark background */
  color: #c9d1d9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200; /* Above header */
  overflow-y: auto; /* Enable scrolling for long content */
}

.video-player-overlay .video-container {
  background: #161b22;
  padding: 2rem;
  border-radius: 8px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.video-player-overlay video {
  width: 100%;
  max-width: 800px; /* Max width for video player */
  height: auto;
}

.overlay button {
  padding: 0.5rem 1rem;
  background: #58a6ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-end; /* Position close button in corner */
}

.overlay button:hover {
  background: #79c0ff;
}

.about-overlay,
.contact-overlay {
  /* Similar container styling as video-container */
  background: #161b22;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
}

.about-overlay h2,
.contact-overlay h2 {
  color: #58a6ff;
  margin-top: 0;
}

/* Loading Screen Style */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0d1117;
  color: #c9d1d9;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 300; /* Highest layer */
  font-size: 1.5rem;
}
