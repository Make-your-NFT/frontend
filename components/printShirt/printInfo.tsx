import styles from "components/printShirt/printInfo.module.css";
import PrintInfoAsset from "./printInfoAsset";
import { BsCartFill } from "react-icons/bs";

const PrintInfo = () => {
  return (
    <div className={styles.layout}>
      <span className={styles.title}>구매 정보</span>
      <div className={styles.printInfoLayout}>
        <div className={styles.finalBuyLayout}>
          <div className={styles.totalPriceLayout}>
            <span className={styles.title}>총 가격 :</span>
            <span className={styles.eachPriceText}>40000</span>
            <span className={styles.eachPriceText}>+</span>
            <span className={styles.eachPriceText}>40000</span>
            <span className={styles.eachPriceText}>+</span>
            <span className={styles.eachPriceText}>40000</span>
            <span className={styles.eachPriceText}>=</span>
            <span className={styles.title}>120000</span>
          </div>
          <button className={styles.buyButton}>
            <BsCartFill size={25} color="white" />
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintInfo;
