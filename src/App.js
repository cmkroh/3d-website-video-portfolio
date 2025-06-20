import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import VideoPlayerOverlay from './components/VideoPlayerOverlay';
import AboutOverlay from './components/AboutOverlay';
import ContactOverlay from './components/ContactOverlay';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import { projects } from './data';
import './styles.css'; // Import global styles

function App() {
  const [openProjectId, setOpenProjectId] = useState(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Assume loading initially

  const selectedProject = projects.find(p => p.id === openProjectId);

  const handleScreenClick = (projectId) => {
    setOpenProjectId(projectId);
    setIsAboutOpen(false); // Close other overlays
    setIsContactOpen(false);
  };

  const closeVideoPlayer = () => {
    setOpenProjectId(null);
  };

  const openAbout = () => {
    setIsAboutOpen(true);
    setOpenProjectId(null); // Close other overlays
    setIsContactOpen(false);
  };

  const closeAbout = () => setIsAboutOpen(false);

  const openContact = () => {
    setIsContactOpen(true);
    setOpenProjectId(null); // Close other overlays
    setIsAboutOpen(false);
  };

  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <Header onAboutClick={openAbout} onContactClick={openContact} />
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Scene projects={projects} onScreenClick={handleScreenClick} onLoaded={() => setIsLoading(false)} />
        </Suspense>
      </Canvas>

      {isLoading && <LoadingScreen />}
      {selectedProject && (
        <VideoPlayerOverlay project={selectedProject} onClose={closeVideoPlayer} />
      )}
      {isAboutOpen && <AboutOverlay onClose={closeAbout} />}
      {isContactOpen && <ContactOverlay onClose={closeContact} />}
    </>
  );
}

export default App;
