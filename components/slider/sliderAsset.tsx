import styles from "components/slider/sliderAsset.module.css";
import { shirt } from "@public/images";
import Image from "next/image";

interface assetProps {
  title: string;
  author: string;
  introduce: string;
}

const SliderAsset = (props: assetProps) => {
  return (
    <div className={styles.layout}>
      <Image src={shirt} width={200} height={200} />
      <div className={styles.infoLayout}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.introduce}>ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ</p>
        <p className={styles.author}>{props.author}</p>
      </div>
    </div>
  );
};

export default SliderAsset;
