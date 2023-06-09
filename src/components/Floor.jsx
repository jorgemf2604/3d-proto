import { RigidBody } from "@react-three/rapier";
import { Box } from "@react-three/drei";

const Floor = () => {
  return ( 
    <RigidBody type="fixed">
    <Box position={[0, 0, 0]} args={[10, 1, 1000]}>
      <meshStandardMaterial color="springgreen"/>
    </Box>
  </RigidBody>
  );
}
 
export default Floor;