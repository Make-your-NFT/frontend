import styles from "components/userInfo/analytics.module.css";
import { MdSell } from "react-icons/md";
import { FaCoins, FaTshirt } from "react-icons/fa";

const Analytics = () => {
  return (
    <div className={styles.layout}>
      <span className={styles.title}>나의 내역</span>
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
            <span className={styles.countText}>20</span>
          </div>
        </div>
      </div>
      <span className={styles.title}>통계</span>
      <div></div>
    </div>
  );
};

export default Analytics;
