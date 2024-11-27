import { MeshReflectorMaterial, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import React, { useEffect } from 'react';
import { RepeatWrapping } from 'three';
import { useFrame } from '@react-three/fiber';

const Ground = () => {
    // Load textures with useTexture
    const [roughness, normal] = useTexture([
        '/texture/terrain-roughness.jpg',
        '/texture/terrain-normal.jpg'
    ]);

    useEffect(() => {
        [normal, roughness].forEach((t) => {
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(20, 20);
        });
        normal.encoding = THREE.LinearEncoding;
    }, [normal, roughness]);

    useFrame((state, delta) => {
        let t = -state.clock.getElapsedTime() * 0.02;
        roughness.offset.set(0, t % 1);
        normal.offset.set(0, t % 1);
      });
    
    

    return (
        <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
            <planeGeometry args={[30, 30]} />
            <MeshReflectorMaterial 
                blur={[1000, 400]}
                mixBlur={30}
                roughnessMap={roughness}
                normalMap={normal}
                mixStrength={80}
                mixContrast={1}
                resolution={1024}
                mirror={0}
                depthScale={0.01}
                minDepthThreshold={0.9}
                maxDepthThreshold={1}
                depthToBlurRatioBias={0.25}
                distortion={1}
                debug={0}
                reflectorOffset={0.2}
                envMapIntensity={0}
                dithering={true}
                roughness={0.7}
                color={[0.015, 0.015, 0.015]}
            />
        </mesh>
    );
}

export default Ground;
