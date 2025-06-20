import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

function VideoScreen({ project, onClick, ...props }) {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, project.thumbnailUrl);
  const [hovered, setHovered] = useState(false);

  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y += 0.001;
  //   }
  // });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onClick={onClick}
      onPointerOver={(event) => { event.stopPropagation(); setHovered(true); }}
      onPointerOut={(event) => setHovered(false)}
    >
      <planeGeometry args={[1.6, 0.9]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default VideoScreen;
