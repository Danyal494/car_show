import { Suspense, useState } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { CubeCamera, Environment, OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import Ground from './components/Ground';
import { Car } from './components/Car';
import { Rings } from './components/Rings';
import { Leva, useControls } from 'leva';
import  {Boxes}  from './components/Boxes';
import { Bloom, ChromaticAberration, DepthOfField, EffectComposer } from '@react-three/postprocessing';
import {BlendFunction} from "postprocessing"
import { FloatingGrid } from './components/FloatingGrid';
function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Leva />
        <Canvas shadows>
          <Stats />
          <CarShow />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;

const CarShow = () => {
  // Leva control for color
    const { color } = useControls({ color: { value: 'Orange', label: 'Car Color' } });
    const { Effects } = useControls({ Effects: { value: true, label: 'Enable Effects' } });
    const { Boxes: enableBoxes } = useControls({ Boxes: { value: true, label: 'Enable Boxes' } });


    return (
      <>
        <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

        <color args={[0, 0, 0]} attach="background" />
        {/* <ambientLight intensity={2.5}/> */}
        <CubeCamera resolution={256} frames={Infinity}>
          {(texture) => (
            <>
              <Environment map={texture} />
              <Car transitionColor={color} /> {/* Passing the controlled color to Car */}
            </>
          )}
        </CubeCamera>
        <Rings />
        {enableBoxes && <Boxes />}

        <FloatingGrid/>
        <spotLight
          color={[1, 0.25, 0.7]}
          angle={0.8}
          penumbra={0.5}
          position={[5, 10, 0]}
          castShadow
          shadow-bias={-0.0001}
          intensity={200}
        />
        <spotLight
          color={[0.14, 0.5, 1]}
          angle={0.8}
          penumbra={0.5}
          position={[-5, 10, 0]}
          castShadow
          shadow-bias={-0.0001}
          intensity={200}
        />
        <Ground />
      {Effects && (<EffectComposer>
          {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
          <Bloom
            blendFunction={BlendFunction.ADD}
            intensity={1.3} // The bloom intensity.
            width={300} // render width
            height={300} // render height
            kernelSize={5} // blur kernel size
            luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ChromaticAberration
            blendFunction={BlendFunction.NORMAL} 
            offset={[0.0005, 0.0012]} 
          />
        </EffectComposer>)}  
      </> 
    );
  };
