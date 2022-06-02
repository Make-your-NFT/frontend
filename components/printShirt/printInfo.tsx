import styles from "components/printShirt/printInfo.module.css";
import PrintInfoAsset from "./printInfoAsset";

const PrintInfo = () => {
  return (
    <div className={styles.layout}>
      <span className={styles.title}>구매 정보</span>
      <div className={styles.printInfoLayout}>
        <div className={styles.assetLayout}>
          <PrintInfoAsset />
          <PrintInfoAsset />
          <PrintInfoAsset />
        </div>
      </div>
    </div>
  );
};

export default PrintInfo;
