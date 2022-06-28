import styles from "components/exchange/transactionDetails.module.css";
import { GrPowerReset } from "react-icons/gr";

const TransactionDetails = () => {
  return (
    <article className={styles.layout}>
      <div className={styles.titleLayout}>
        <span className={styles.title}>최근 거래 내역</span>
        <GrPowerReset size={20} color="red" />
      </div>
      <div className={styles.detailsLayout}>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
        <div className={styles.detailsBarLayout}></div>
      </div>
    </article>
  );
};

export default TransactionDetails;
