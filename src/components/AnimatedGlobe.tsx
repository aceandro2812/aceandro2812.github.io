import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedGlobe = () => {
  const ref = useRef<THREE.Points>(null!);

  const [sphere, positions] = useMemo(() => {
    const sphere = new THREE.SphereGeometry(1.5, 48, 48);
    const positions = sphere.attributes.position.array as Float32Array;
    return [sphere, positions];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="cyan"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const GlobeCanvas = () => (
  <div className="absolute top-0 left-0 w-full h-full z-0">
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <AnimatedGlobe />
    </Canvas>
  </div>
);

export default GlobeCanvas;
