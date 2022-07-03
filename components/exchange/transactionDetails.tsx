import styles from "components/exchange/transactionDetails.module.css";
import { GrPowerReset } from "react-icons/gr";

const TransactionDetails = () => {
  return (
    <article className={styles.layout}>
      <div className={styles.titleLayout}>
        <span className={styles.title}>최근 거래 내역</span>
        <GrPowerReset size={20} color="red" />
      </div>
      <div className={styles.theadLayout}>
        <span className={styles.thead}>일자</span>
        <span className={styles.thead}>게임머니</span>
        <span className={styles.thead}>환전금액</span>
      </div>
      <div className={styles.detailsLayout}>
        <div className={styles.detailsBarLayout}>
          <span className={styles.detailText}>2022.07.03</span>
          <span className={styles.detailText}>500,000</span>
          <span className={styles.detailText}>2,500</span>
        </div>
        <div className={styles.detailsBarLayout_gray}>
          <span className={styles.detailText}>2022.07.03</span>
          <span className={styles.detailText}>500,000</span>
          <span className={styles.detailText}>2,500</span>
        </div>
        <div className={styles.detailsBarLayout}>
          <span className={styles.detailText}>2022.07.03</span>
          <span className={styles.detailText}>500,000</span>
          <span className={styles.detailText}>2,500</span>
        </div>
        <div className={styles.detailsBarLayout_gray}>
          <span className={styles.detailText}>2022.07.03</span>
          <span className={styles.detailText}>500,000</span>
          <span className={styles.detailText}>2,500</span>
        </div>
        <div className={styles.detailsBarLayout}>
          <span className={styles.detailText}>2022.07.03</span>
          <span className={styles.detailText}>500,000</span>
          <span className={styles.detailText}>2,500</span>
        </div>
        <div className={styles.detailsBarLayout_gray}>
          <span className={styles.detailText}>2022.07.03</span>
          <span className={styles.detailText}>500,000</span>
          <span className={styles.detailText}>2,500</span>
        </div>
        {/* <div className={styles.detailsBarLayout}></div>
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
        <div className={styles.detailsBarLayout}></div> */}
      </div>
    </article>
  );
};

export default TransactionDetails;
