import { RigidBody} from "@react-three/rapier";
import kingImg from "../assets/King.glb"
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Character = () => {
  const king = useGLTF(kingImg)
  const kingRef = useRef()

  // animations 
  const kingAnimations = useAnimations(king.animations, king.scene);
  const charName= "CharacterArmature|Run"
  useEffect(() => {
    const action = kingAnimations.actions[charName];
    action.reset().fadeIn(0.5).play();
    return () => {
      action.fadeOut(0.5);
    };
  }, [kingAnimations.actions, charName]);


  // key events handler 
  const handleKeyDown = (e) => {
    if (e.code === "ArrowRight") {
      kingRef.current.applyImpulse({x: 0.2, y: 0, z:0}, true)
    } else if (e.code === "ArrowLeft") {
      kingRef.current.applyImpulse({x: -0.2, y: 0, z:0}, true)
    } else if (e.code === "ArrowUp") {
      kingRef.current.applyImpulse({x: 0, y: 0, z:-0.2}, true)
    } else if (e.code === "ArrowDown") {
      kingRef.current.applyImpulse({x: 0, y: 0, z:0.2}, true)
    }
  }

  const handleKeyUp = (e) => {
    if (e.code === "ArrowRight") {
      kingRef.current.applyImpulse({x: 0, y: 0, z:0}, true) 

    } else if (e.code === "ArrowLeft") {
      kingRef.current.applyImpulse({x: 0, y: 0, z:0}, true)
    }
  }

  // key event listeners 
  useEffect(() => {
    // events 
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // clean function
    return () => {
    window.removeEventListener("keydown",handleKeyDown);
    window.removeEventListener("keyup",handleKeyUp);
    }
  }, [])

  return (
    <RigidBody ref={kingRef} angularDamping={1}>
       <primitive
        object={king.scene}
        scale={[1,1,1]}
        position={[0, 20, 0]}
        rotation-y={3.14}
        rotation-z={0}
        rotation-x={0}
      />
    </RigidBody>
  );
}
 
export default Character;