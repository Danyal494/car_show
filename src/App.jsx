import { Suspense, useRef, useState } from 'react';
import './App.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { CameraControls, CubeCamera, Environment, Html, OrbitControls, PerspectiveCamera, Stats } from '@react-three/drei';
import Ground from './components/Ground';
import { Car } from './components/Car';
import { Rings } from './components/Rings';
import { button, Leva, useControls } from 'leva';
import  {Boxes}  from './components/Boxes';
import * as THREE from 'three';
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

    const cameraControlsRef = useRef();
    const { camera } = useThree();
  
    const endpoints = {
      button1: [0, 3, 4],
      button2: [5, 5, 5],
      button3: [-5, 2, 8],
    }; // Define endpoints for each button
    const duration = 5; // duration in seconds
  
    const [isAnimating, setIsAnimating] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [startPosition, setStartPosition] = useState([0, 0, 0]);
    const [currentEndpoint, setCurrentEndpoint] = useState(null);
  
    const startAnimation = (targetEndpoint) => {
      if (!isAnimating) {
        // Get current camera position from CameraControls
        const currentPosition = cameraControlsRef.current?.camera.position;
        if (currentPosition) {
          setStartPosition([currentPosition.x, currentPosition.y, currentPosition.z]);
        }
    
        setCurrentEndpoint(targetEndpoint);
        setIsAnimating(true);
        setStartTime(Date.now());
      }
    };
  
    useFrame(() => {
      if (isAnimating && cameraControlsRef.current && currentEndpoint) {
        const elapsedTime = (Date.now() - startTime) / 1000;
        const t = Math.min(elapsedTime / duration, 1); // Clamp t between 0 and 1
  
        const currentPosition = [
          THREE.MathUtils.lerp(startPosition[0], currentEndpoint[0], t),
          THREE.MathUtils.lerp(startPosition[1], currentEndpoint[1], t),
          THREE.MathUtils.lerp(startPosition[2], currentEndpoint[2], t),
        ];
  
        cameraControlsRef.current.setPosition(...currentPosition);
  
        if (t === 1) {
          setIsAnimating(false); // Stop animation when complete
        }
      }
    });
  
    // Define Leva buttons
    useControls({
      'Move to Endpoint 1': button(() => startAnimation(endpoints.button1)),
      'Move to Endpoint 2': button(() => startAnimation(endpoints.button2)),
      'Move to Endpoint 3': button(() => startAnimation(endpoints.button3)),
    });

    return (
      <>
        {/* <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} /> */}
        <CameraControls ref={cameraControlsRef} maxPolarAngle={1.45}/>
        <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

{/* <Html>
<div
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <button
            onClick={() => startAnimation(endpoints.button1)}
            style={{
            borderRadius: '100%',
              height:"20px",
              width:"20px",
              border:"none"
        
            }}
          >
            
          </button>
          <button
            onClick={() => startAnimation(endpoints.button2)}
            style={{
              borderRadius: '100%',
              height:"20px",
              width:"20px",
              border:"none"
            }}
          >
   
          </button>
          <button
            onClick={() => startAnimation(endpoints.button3)}
            style={{
              borderRadius: '100%',
              height:"20px",
              width:"20px",
              border:"none"
            }}
          >
          
          </button>
        </div>
</Html> */}

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
