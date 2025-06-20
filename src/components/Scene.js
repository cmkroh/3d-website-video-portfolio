import React, { useRef, useState, useEffect } from 'react';
import { OrbitControls, Environment, useGLTF, useTexture, useProgress } from '@react-three/drei';
import VideoScreen from './VideoScreen';
import { useFrame } from '@react-three/fiber';

function Scene({ projects, onScreenClick, onLoaded }) {
  const { progress } = useProgress(); // Track loading progress

  // Basic check if initial assets (textures, models) are loaded
  React.useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return (
    <>
      {/* Camera Controls */}
      <OrbitControls enableDamping dampingFactor={0.25} enableZoom enablePan={false} />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />

      {/* Optional Environment */}
      {/* <Environment preset="sunset" background /> */}
      {/* Or add custom geometry/particles */}

      {/* Render Video Screens */}
      {projects.map(project => (
        <VideoScreen
          key={project.id}
          project={project}
          onClick={() => onScreenClick(project.id)}
        />
      ))}
    </>
  );
}

export default Scene;
