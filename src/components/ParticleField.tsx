import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Ambient particle sphere behind the hero.
 *
 * Lazy-loaded and only mounted on pointer devices with motion enabled — three.js
 * is by far the heaviest dependency here, so it must never block first paint.
 */
const ParticleSphere = () => {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    // Fibonacci sphere: even distribution without clustering at the poles.
    const count = 1400;
    const arr = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const jitter = 1.5 + Math.random() * 0.35;
      arr[i * 3] = Math.cos(theta) * radius * jitter;
      arr[i * 3 + 1] = y * jitter;
      arr[i * 3 + 2] = Math.sin(theta) * radius * jitter;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta / 22;
    ref.current.rotation.x += delta / 45;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#0DF0E3"
        size={0.014}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
};

const ParticleField = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-70">
    <Canvas
      camera={{ position: [0, 0, 3.2] }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: 'low-power' }}
    >
      <ParticleSphere />
    </Canvas>
  </div>
);

export default ParticleField;
