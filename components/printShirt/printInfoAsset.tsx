import styles from "components/printShirt/printInfoAsset.module.css";
import { shirt } from "@public/images";
import Image from "next/image";

interface printInfoAssetProps {
  name: string;
  price: number;
}

const PrintInfoAsset = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.thumbNailLayout}>
        <Image
          className={styles.thumbNail}
          src={shirt}
          width={60}
          height={60}
        />
      </div>
      <div className={styles.infoLayout}>
        <div className={styles.flexLayout}>
          <span className={styles.title}>이름</span>
          <span className={styles.text}>nft</span>
        </div>
        <div className={styles.flexLayout}>
          <span className={styles.title}>이름</span>
          <span className={styles.text}>nft</span>
        </div>
        <div className={styles.flexLayout}>
          <span className={styles.title}>가격</span>
          <span className={styles.text}>50000</span>
        </div>
      </div>
    </div>
  );
};

export default PrintInfoAsset;
