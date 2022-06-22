import styles from "components/printShirt/shirtModeling.module.css";
import { Suspense, useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Html, useProgress, OrbitControls, Stars } from "@react-three/drei";
import { Mesh } from "three";
import Loading from "@components/loading/loading";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRecoilState } from "recoil";
import { optionState, optionTypes } from "recoil/option";
import * as THREE from "three";
const ShirtModeling = () => {
  const [option] = useRecoilState<optionTypes>(optionState);
  const objRef = useRef<Mesh>(null);

  useEffect(() => {
    console.log(option);
  }, [option]);

  const Scene = () => {
    const obj = useLoader(OBJLoader, "/models/testModel.obj");
    const texture = useLoader(
      TextureLoader,
      "/images/testAssets/testAsset01.jpg"
    );
    const geometry = useMemo(() => {
      let g;
      obj.traverse((c) => {
        if (c.type === "Mesh") {
          const _c = c as Mesh;
          g = _c.geometry;
        }
      });
      return g;
    }, [obj]);
    useFrame(() => (objRef.current!.rotation.z += 0.005)); // #2
    return (
      <>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <mesh
          geometry={geometry}
          scale={0.08}
          ref={objRef}
          rotation={[5, 0, 0]}
          position={[0, -1, 0]}
        >
          <meshStandardMaterial map={texture} />
        </mesh>
      </>
    );
  };

  const Loader = () => {
    const { progress } = useProgress();
    return (
      <Html center>
        <Loading />
        {progress}%
      </Html>
    );
  };

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
            <OrbitControls />
            <Scene />
            <Stars />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ShirtModeling;
