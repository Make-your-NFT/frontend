import styles from "components/asset/asset.module.css";
import { shirt } from "@public/images";
import Image from "next/image";
import Link from "next/link";

interface assetProps {
  title: string;
  author: string;
  id: number;
}

const Asset = (props: assetProps) => {
  return (
    <Link href={`/details/${props.id}`} className={styles.layout}>
      <a>
        <Image src={shirt} width={400} height={400} />
        <div className={styles.title}>{props.title}</div>
        <div className={styles.author}>{props.author}</div>
      </a>
    </Link>
  );
};

export default Asset;
