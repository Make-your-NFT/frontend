import styles from "components/userInfo/transaction.module.css";
import { MdSell } from "react-icons/md";
import { FaCoins, FaTshirt } from "react-icons/fa";
import { testAsset1 } from "public/images/index";
import Image from "next/image";

const Transaction = () => {
  return (
    <div className={styles.layout}>
      <span className={styles.title}>거래 내역</span>
      <div className={styles.historyCountLayout}>
        <div className={styles.historyLayout}>
          <MdSell size={40} color="red" />
          <div className={styles.countLayout}>
            <span className={styles.countTitle}>판매</span>
            <span className={styles.countText}>20</span>
          </div>
        </div>
        <div className={styles.historyLayout}>
          <FaCoins size={40} color="gold" />
          <div className={styles.countLayout}>
            <span className={styles.countTitle}>구매</span>
            <span className={styles.countText}>5</span>
          </div>
        </div>
        <div className={styles.historyLayout}>
          <FaTshirt size={40} color="skyblue" />
          <div className={styles.countLayout}>
            <span className={styles.countTitle}>옷 프린팅</span>
            <span className={styles.countText}>2</span>
          </div>
        </div>
      </div>
      <span className={styles.title}>상세 내역</span>
      <div className={styles.transactionLayout}>
        <div className={styles.detailTransLayout}>
          <div className={styles.detailFlexLayout}>
            <Image src={testAsset1} width="50" height="50" />
            <div className={styles.detailNFTinfoLayout}>
              <span className={styles.detailTitle}>붉은 노을</span>
              <span className={styles.detailText}>김정현</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
