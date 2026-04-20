
import React, { useEffect, useMemo } from 'react'
import { useThree, useGraph } from '@react-three/fiber'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei'

const ActualCoding = ({ bgImg }) => {
  const { scene, animations } = useGLTF("/models3d/coding_new.glb");
  const { nodes } = useGraph(scene); // Better for accessing specific mesh parts

  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions["Animation"]) {
      actions["Animation"].reset().play();
    }
    return () => actions["Animation"]?.fadeOut(0.5); // Clean up on unmount
  }, [actions]);

  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 40);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <>
      <primitive
        object={scene}
        scale={2.2}
        position={[-5, -4, 0]}
        rotation={[0, 1.6, 0]}
      />

      <ambientLight intensity={0.4} />

      <directionalLight
        position={[5, 10, 5]}
        intensity={1.5}
        castShadow
      />

      <pointLight position={[-10, -5, -10]} color="purple" intensity={5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={true}
      />
    </>
  )
}

// Pre-load the model to prevent ngrok lag
useGLTF.preload("/models3d/coding_new.glb");

export default ActualCoding;