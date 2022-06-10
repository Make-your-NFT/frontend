import styles from "components/printShirt/shirtModeling.module.css";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import {
  Html,
  useProgress,
  Environment,
  OrbitControls,
  Stars,
} from "@react-three/drei";
import { Mesh } from "three";
import Loading from "@components/loading/loading";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRecoilState } from "recoil";
import { optionState, optionTypes } from "recoil/option";

const ShirtModeling = () => {
  const [option] = useRecoilState<optionTypes>(optionState);
  const objRef = useRef<Mesh>(null);

  useEffect(() => {
    console.log(option.NFTSize);
  }, [option.position]);

  const Scene = () => {
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
    return (
      <Html center>
        <Loading />
        {progress}%
      </Html>
    );
  };
  const NFTImage = () => {
    const colorMap = useLoader(
      TextureLoader,
      "/images/testAssets/testAsset01.jpg"
    );
    return (
      <>
        <ambientLight intensity={0.2} />
        <directionalLight />
        <mesh>
          <planeGeometry
            args={[
              0.01 * option.NFTSize,
              0.01 * option.NFTSize,
              0.01 * option.NFTSize,
            ]}
          />
          <meshStandardMaterial map={colorMap} />
        </mesh>
      </>
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
            {/* <Scene /> */}
            <NFTImage />
            <Environment preset="sunset" background={false} />
            <Stars />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ShirtModeling;
