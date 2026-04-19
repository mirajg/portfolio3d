
import React, { useEffect, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Bee = () => {
  const { camera, gl, scene: r3fScene } = useThree();

  // Camera setup
  useEffect(() => {
    camera.position.z = 2;
  }, [camera]);

  // Load models
  const { scene, animations } = useGLTF("/models3d/bee_new.glb");
  const { actions } = useAnimations(animations, scene);

  let textures = useTexture({
    normalMap: "/images/fur.jpg",
    matcap: "/images/skin1.png"
  })
 
  useLayoutEffect(() => {
    // Only set SRGB for the matcap (color), not the normalMap (data)
    textures.matcap.colorSpace = THREE.SRGBColorSpace;

    const sharedMaterial = new THREE.MeshMatcapMaterial({
      matcap: textures.matcap,
      normalMap: textures.normalMap,
    });

    scene.traverse((child) => {
      if (child.isMesh) {
        // Only replace if it's not already our shared material
        if (child.material !== sharedMaterial) {
          child.material.dispose();
          child.material = sharedMaterial;
        }
      }
    });
  }, [scene, textures]);


  useEffect(() => {
    actions?.hover?.play?.();
    actions?.idle?.play?.();
    actions?.take_off_and_land?.play?.();
  }, [actions]);

  return (
    <>
      <primitive
        object={scene}
        scale={2.2}
        position={[0.8, -0.5, 0]}
        rotation={[0, 0.5, 0]}
      />
    </>
  );
};

export default Bee;
