import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function VideoScreen({ project, onClick, ...props }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, project.thumbnailUrl);
  const [hovered, setHovered] = useState(false);

  // Optional: Add subtle animation like floating
  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.001;
  //   }
  // });

  return (
    <mesh
      {...props} // Apply position, rotation etc passed from parent
      ref={meshRef}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]} // Scale up on hover
      onClick={onClick}
      onPointerOver={(event) => { event.stopPropagation(); setHovered(true); }}
      onPointerOut={(event) => setHovered(false)}
    >
      {/* Adjust size based on typical video aspect ratios like 16:9 */}
      <planeGeometry args={[1.6, 0.9]} />
      <meshStandardMaterial map={texture} /> {/* Use StandardMaterial for lighting */}
    </mesh>
  );
}

export default VideoScreen;
