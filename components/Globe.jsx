
import React, { useEffect } from 'react'
import { useThree, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const Globe = () => {
  const { scene, animations } = useGLTF("/models3d/globe_new.glb");
  const { nodes } = useGraph(scene);
  const { actions } = useAnimations(animations, scene);
  const { camera, gl } = useThree();

  useEffect(() => {
    // 1. Set the renderer to use sRGB output encoding
    gl.outputColorSpace = THREE.SRGBColorSpace;
  }, [gl]);

  useEffect(() => {
    if (actions["Scene"]) {
      actions["Scene"].reset().play();
    }
    return () => actions["Scene"]?.fadeOut(0.5);
  }, [actions]);

  useEffect(() => {
    camera.position.set(0, 0, 40);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // 2. Ensure material colors are treated as sRGB if they aren't already
        if (child.material.map) {
          child.material.map.colorSpace = THREE.SRGBColorSpace;
          child.material.map.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  return (
    <>
      <primitive object={scene} scale={0.1}
        position={[0, 5, 0]} />

      <ambientLight intensity={1} />

      <directionalLight
        position={[5, 10, 5]}
        intensity={2}
      />

      <pointLight position={[-10, -5, -10]} color="purple" intensity={5} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </>
  )
}

useGLTF.preload("/models3d/globe_new.glb"); // Matches the file used in the component

export default Globe;