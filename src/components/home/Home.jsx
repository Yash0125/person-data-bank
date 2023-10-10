import { useRef,useEffect, useState } from 'react'
import { Canvas,useThree } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { useNavigate } from "react-router-dom";
import './home.css'

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  )
}

function Cube(props) {
  const [ref] = useBox(() => ({ mass: 1, ...props }))
  return (
    <mesh castShadow ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function Box(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  return (
    <mesh {...props} castShadow ref={ref} onPointerOver={(event) => hover(true)} onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Shadows(props) {
  const { viewport } = useThree()
  return (
    <mesh receiveShadow scale={[viewport.width, viewport.height, 1]} {...props}>
      <planeGeometry />
      <shadowMaterial transparent opacity={0.5} />
    </mesh>
  )
}

export default function Home() {
  const navigate = useNavigate();
  const hadlePersonList = () => {
    navigate("/PersonList");
  };
  const [ready, set] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => set(true), 1000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
    <Canvas dpr={[1, 2]} shadows camera={{ position: [-5, 5, 5], fov: 50 }}>
      <ambientLight />
      <spotLight angle={0.25} penumbra={0.5} position={[10, 10, 5]} castShadow />
      <Physics>
        <Plane />
        <Cube position={[0, 5, 0]} />
        <Cube position={[0.45, 7, -0.25]} />
        <Cube position={[-0.45, 9, 0.25]} />
        {ready && <Cube position={[-0.45, 10, 0.25]} />}
      </Physics>
      <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow shadow-mapSize={[2024, 2024]} />
        <pointLight position={[10, 0, 0]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Shadows position={[0, 0, -0.5]} />
    </Canvas>
    <div className="btn-container">
        {ready && (
          <button className="person-btn" onClick={hadlePersonList}>
            PersonList
          </button>
        )}
      </div>
    </>
  )
}

