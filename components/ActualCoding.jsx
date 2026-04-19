

import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useGLTF } from '@react-three/drei'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useAnimations } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ActualCode = ({ bgColor }) => {

    let model = useGLTF("/models3d/coding_new.glb");

    let textures = useTexture({
        normalMap: "/images/fur.jpg"
    })

    const [
        mat1,
        mat2
    ] = (useTexture(["/images/skin1.png",
        "/images/skin2.png"])).map(texture => {
            texture.colorSpace = THREE.SRGBColorSpace;
            return texture
        })

    textures.colorSpace = THREE.SRGBColorSpace;


    let { actions } = useAnimations(model.animations, model.scene);

    useEffect(() => {
        actions["Animation"].play();
    }, [actions])

    // 1. Create the material ONCE
    const sharedMaterial = new THREE.MeshMatcapMaterial({
        matcap: mat1,
        normalMap: textures.normalMap,
    });
    const { camera, gl } = useThree();

    useEffect(() => {
        camera.position.z = 40;
    }, [camera]);


    return (
        <>
            <primitive object={model.scene} scale={2.2} position={[-5, 0, 0]} rotation={[0.5, 1.6, 0]} />
            {/* <directionalLight position={[0, 5, 5]} intensity={100} />
            <ambientLight position={[0, 5, 5]} intensity={100} /> */}
            <ambientLight intensity={0.5} />

            {/* The "Key Light" - gives shape and casts shadows */}
            <directionalLight
                position={[5, 5, 5]}
                intensity={2}
                shadows={{ type: THREE.PCFShadowMap }}
            // shadow-mapSize={[1024, 1024]}
            />

            {/* The "Cool" Factor - a neon accent light from the back/side */}
            <pointLight position={[-10, -5, -10]} color="purple" intensity={10} />
        </>
    )
}

export default ActualCode