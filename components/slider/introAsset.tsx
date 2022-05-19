import styles from "components/slider/introAsset.module.css";
import { shirt } from "@public/images";
import Image, { StaticImageData } from "next/image";
import { useEffect } from "react";

interface assetProps {
  title: string;
  author: string;
  image: StaticImageData;
}

const IntroAsset = (props: assetProps) => {

  return (
    <div className={styles.layout}>
      <Image src={props.image} width={400} height={400} />
      <div className={styles.infoLayout}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.author}>{props.author}</p>
      </div>
    </div>
  );
};

export default IntroAsset;
