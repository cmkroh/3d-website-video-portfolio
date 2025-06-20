import React, { useRef, useState, useEffect } from 'react';
import { OrbitControls, Environment, useProgress } from '@react-three/drei';
import VideoScreen from './VideoScreen';
import { useFrame } from '@react-three/fiber';

function Scene({ projects, onScreenClick, onLoaded }) {
  const { progress } = useProgress();

  React.useEffect(() => {
    if (progress === 100) {
      onLoaded();
    }
  }, [progress, onLoaded]);

  return (
    <>
      <OrbitControls enableDamping dampingFactor={0.25} enableZoom enablePan={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      {/* <Environment preset="sunset" background /> */}
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
