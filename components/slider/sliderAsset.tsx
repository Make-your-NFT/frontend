import styles from "components/slider/sliderAsset.module.css";
import { shirt } from "@public/images";
import Image from "next/image";

const SliderAsset = () => {
  return (
    <div className={styles.layout}>
      <Image src={shirt} width={200} height={200} />
      <div className={styles.infoLayout}>
        <p className={styles.title}>옷1</p>
        <p className={styles.introduce}>ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ</p>
        <p className={styles.author}>김정현</p>
      </div>
    </div>
  );
};

export default SliderAsset;
