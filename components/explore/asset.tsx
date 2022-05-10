import styles from "components/explore/asset.module.css";
import { shirt } from "@public/images";
import Image from "next/image";

interface assetProps {
  title: string;
  author: string;
}

const Asset = (props: assetProps) => {
  return (
    <div className={styles.layout}>
      <Image src={shirt} width={300} height={400} />
      <div className={styles.title}>{props.title}</div>
      <div className={styles.author}>{props.author}</div>
    </div>
  );
};

export default Asset;
