import styles from "components/printShirt/shirtModeling.module.css";
import * as three from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Environment, OrbitControls } from "@react-three/drei";
import { Mesh } from "three";

const ShirtModeling = () => {
  const TestScene = () => {
    const objRef = useRef<Mesh>(null);
    const obj = useLoader(OBJLoader, "/models/testModel.obj");
    useFrame(() => (objRef.current!.rotation.z += 0.01)); // #2

    return (
      <primitive
        ref={objRef}
        object={obj}
        scale={0.5}
        position={[0, -7, -30]}
        rotation={[5, 0, 0]}
      />
    );
  };

  const Loader = () => {
    const { progress } = useProgress();
    console.log(progress);
    return <Html center>{progress} % loaded</Html>;
  };

  // const Cube = () => {
  //   const cube = useRef<three.Mesh>(null);

  //   useFrame(() => {
  //     cube.current!.rotation.x += 0.01;
  //     cube.current!.rotation.y += 0.01;
  //   });

  //   return (
  //     <mesh ref={cube}>
  //       <boxBufferGeometry args={[1, 1, 1]} />
  //       <meshStandardMaterial color="#0391BA" />
  //     </mesh>
  //   );
  // };

  // const Scene = () => {
  //   return (
  //     <>
  //       <gridHelper />
  //       <axesHelper />
  //       <pointLight intensity={1.0} position={[5, 3, 5]} />
  //       <Cube />
  //     </>
  //   );
  // };

  return (
    <div className={styles.layout}>
      <div className={styles.titleLayout}>
        <span className={styles.title}>옷 만들기</span>
        <span className={styles.subTitle}>원하는 부위에 NFT를 올려보세요</span>
      </div>
      <div className={styles.threeLayout}>
        <Canvas
          camera={{
            near: 0.5,
            far: 1000,
            zoom: 1,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor("#fafa");
          }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight color="white" position={[0, 0, 2]} />
          <Suspense fallback={<Loader />}>
            <TestScene />
            {/* <Scene /> */}
            <Environment preset="sunset" background={false} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ShirtModeling;
