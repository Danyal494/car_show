
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import TransitionMaterial from './MeshTransitionMaterial/MeshTransitionMaterial'
import { useFrame } from '@react-three/fiber';

export function Car({transitionColor} ,props) {
  const wheelFLRef = useRef();
  const wheelBLRef = useRef();
  const wheelBRRef = useRef();
  const wheelFRRef = useRef();


  useFrame(() => {
    // Adjust rotation speed (0.01) as desired for the effect
    if (wheelFLRef.current) {
      wheelFLRef.current.rotation.x += 0.08; 
    }
    if (wheelFRRef.current) {
      wheelFRRef.current.rotation.x += 0.08; 
    }
    if (wheelBRRef.current) {
      wheelBRRef.current.rotation.x += 0.08; 
    }
    if (wheelBLRef.current) {
      wheelBLRef.current.rotation.x += 0.08; 
    }
    
  });
  const { nodes, materials } = useGLTF('/free_lamborghini_revuelto.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Daylight_Part_Carbon_0.geometry}
              material={materials.Carbon}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Daylight_Part_Inside_Headlight_0.geometry}
              material={materials.Inside_Headlight}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tail_light_Taillight_glass_0.geometry}
              material={materials.Taillight_glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tail_light_Plastic_0.geometry}
              material={materials.Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tail_light_Tail_light_0.geometry}
              material={materials.Tail_light}
            />
          </group>
       
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Exhaust_1_Exhaust_0.geometry}
              material={materials.Exhaust}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Exhaust_1_Plastic_0.geometry}
              material={materials.Plastic}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rear_engine_carbon_Carbon_0.geometry}
              material={materials.Carbon}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rear_engine_carbon_Vents_0.geometry}
              material={materials.Vents}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Front_part_9_Plastic_0.geometry}
              material={materials.Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Front_part_9_Sphere_0.geometry}
              material={materials.Sphere}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Front_part_8001_Plastic_0.geometry}
              material={materials.Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Front_part_8001_Sphere_0.geometry}
              material={materials.Sphere}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Front_part_1_Plastic_0.geometry}
              material={materials.Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Front_part_1_Metal_0.geometry}
              material={materials.Metal}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Headlight_Headlight_0.geometry}
              material={materials.Headlight}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Headlight_Headlight_ligh_second_0.geometry}
              material={materials.Headlight_ligh_second}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Headlight_Headlight_light_0.geometry}
              material={materials.Headlight_light}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Vents_Carbon_0.geometry}
              material={materials.Carbon}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Vents_Vents_0.geometry}
              material={materials.Vents}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brake_light_Tail_light_brake_0.geometry}
              material={materials.Tail_light_brake}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Brake_light_Taillight_glass_0.geometry}
              material={materials.Taillight_glass}
            />
          </group>
          <group
          ref={wheelFRRef}
            position={[-82.013, -122.593, 31.579]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={32.274}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FR_Tire_0.geometry}
              material={materials.Tire}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FR_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FR_Caliper_0.geometry}
              material={materials.Caliper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FR_Brake_rotor_0.geometry}
              material={materials.Brake_rotor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FR_Rim_0.geometry}
              material={materials.material}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hood075_Turning_light_right_0.geometry}
              material={materials.Turning_light_right}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hood075_Turning_light_Left_0.geometry}
              material={materials.Turning_light_Left}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hood075_Body_0.geometry}
              material={materials.Body}
            >
              <TransitionMaterial
               roughness={0.25}
               transitionColor={transitionColor}
               metalness={0.25}
               transitionTime={0.4}
               clearcoat={1}
               clearcoatRoughness={0.05}/>
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hood075_Turning_light_inside_0.geometry}
              material={materials.Turning_light_inside}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hood075_Interior_black_0.geometry}
              material={materials.Interior_black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hood075_Plastic_0.geometry}
              material={materials.Plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Hood075_Turning_light_glass_0.geometry}
              material={materials.Turning_light_glass}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_doors_Interior_black_0.geometry}
              material={materials.Interior_black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_doors_Interior_color_0.geometry}
              material={materials.Interior_color}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_middle_Carbon_0.geometry}
              material={materials.Carbon}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_middle_Steering_wheel_0.geometry}
              material={materials.Steering_wheel}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_middle_parts_Interior_color_0.geometry}
              material={materials.Interior_color}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_middle_parts_Interior_black_0.geometry}
              material={materials.Interior_black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_middle_parts_Carbon_0.geometry}
              material={materials.Carbon}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Interior_middle_parts_Start_button_lol_0.geometry}
              material={materials.Start_button_lol}
            />
          </group>
          <group scale={[59.266, 63.024, 63.024]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seat_Interior_color_0.geometry}
              material={materials.Interior_color}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Seat_Interior_Black_0.geometry}
              material={materials.Interior_Black}
            />
          </group>
          <group position={[39.374, -45.886, 66.194]} rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Steering_wheel_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Steering_wheel_Steering_wheel_0.geometry}
              material={materials.Steering_wheel}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Speedometer_Cluster_0.geometry}
              material={materials.Cluster}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Speedometer_Interior_black_0.geometry}
              material={materials.Interior_black}
            />
          </group>
          <group rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mirrors_Body_0.geometry}
              material={materials.Body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mirrors_mirror_0.geometry}
              material={materials.mirror}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Mirrors_Carbon_0.geometry}
              material={materials.Carbon}
            />
          </group>
          <group
          ref={wheelBRRef}
            position={[-80.477, 134.158, 34.723]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={34.784}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BR_Tire_0.geometry}
              material={materials.Tire}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BR_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BR_Caliper_0.geometry}
              material={materials.Caliper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BR_Brake_rotor_0.geometry}
              material={materials.Brake_rotor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BR_Rim_0.geometry}
              material={materials.material}
            />
          </group>
          <group ref={wheelFLRef} position={[82.013, -122.593, 31.579]} rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FL_Tire_0.geometry}
              material={materials.Tire}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FL_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FL_Caliper_0.geometry}
              material={materials.Caliper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FL_Brake_rotor_0.geometry}
              material={materials.Brake_rotor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_FL_Rim_0.geometry}
              material={materials.material}
            />
          </group>
          <group           ref={wheelBLRef}  position={[80.477, 134.158, 34.723]} rotation={[0, 0, -Math.PI / 2]} scale={100}>

            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BL_Tire_0.geometry}
              material={materials.Tire}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BL_Logo_0.geometry}
              material={materials.Logo}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BL_Caliper_0.geometry}
              material={materials.Caliper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BL_Brake_rotor_0.geometry}
              material={materials.Brake_rotor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Wheel_BL_Rim_0.geometry}
              material={materials.material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Front_part_6_Carbon_0.geometry}
            material={materials.Carbon}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Daylight_Glass_Headlight_glass001_0.geometry}
            material={materials['Headlight_glass.001']}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Daylight_Light_0.geometry}
            material={materials.Light}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_plastic_part_1_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_part_4_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_part_3_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_part_6_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_vent_Vents_0.geometry}
            material={materials.Vents}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_part_1_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_part_2_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_plastic_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Vents_rear_Vents_0.geometry}
            material={materials.Vents}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Engine_Engine_0.geometry}
            material={materials.Engine}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[100, 94.037, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Front_vents_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[100, 94.037, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Front_part_7_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Front_part_4_Carbon_0.geometry}
            material={materials.Carbon}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Front_part_2_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Front_part_3_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Front_vents_2_Vents_0.geometry}
            material={materials.Vents}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_part_5_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Front_part_8_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Front_part_5_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlight_carbon_Carbon_0.geometry}
            material={materials.Carbon}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headlight_glass_Headlight_glass_0.geometry}
            material={materials.Headlight_glass}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Exhaust_2_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mid_part_3001_Carbon_0.geometry}
            material={materials.Carbon}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Windshield_Windows_0.geometry}
            material={materials.Windows}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mid_part_3_Interior_black_0.geometry}
            material={materials.Interior_black}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Right&Left_window_2_Windows_0'].geometry}
            material={materials.Windows}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Right&Left_windows_Windows_0'].geometry}
            material={materials.Windows}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Logo_Logo_0.geometry}
            material={materials.Logo}
            position={[0.005, -214.073, 43.902]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[32.274, 30.349, 32.274]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Interior_general_Interior_black_0.geometry}
            material={materials.Interior_black}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_window_Windows_0.geometry}
            material={materials.Windows}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mid_part_2_Interior_Black_0.geometry}
            material={materials.Interior_Black}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mid_parts_1_Plastic_0.geometry}
            material={materials.Plastic}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pedal_Metal_0.geometry}
            material={materials.Metal}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Steering_wheel_holder_Interior_black_0.geometry}
            material={materials.Interior_black}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_engine_carbon_vents_Vents_0.geometry}
            material={materials.Vents}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Rear_part_3001_Taillight_rear_0.geometry}
            material={materials.Taillight_rear}
            rotation={[0, 0, -Math.PI / 2]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/free_lamborghini_revuelto.glb')