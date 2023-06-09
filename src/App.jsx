import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Suspense } from "react"
import Experience from "./components/Experience"

function App() {
  return (
    <>
      <Canvas shadows camera={{position: [10, 10, 10], fov: 30}}>
      <color attach="background" args={["#000"]}/>
        <Suspense>
          <Physics>
            <Experience/>
          </Physics>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
