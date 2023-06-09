import { OrbitControls } from "@react-three/drei";
import Floor from "./Floor";
import Character from "./Character";
import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <OrbitControls />

      {/* Floor */}
      <Floor />
      <Character />

      {/* Cube */}
      <RigidBody  colliders="cuboid" onCollisionEnter={()=> {
      console.log("I am being hit ")
    }}>
        <Box position={[0, 10, -20]}>
          <meshStandardMaterial color="red" />
        </Box> 
      </RigidBody>
    </>
  );
}
 
export default Experience;