import styles from "components/exchange/exchangeToken.module.css";
import { RiExchangeLine } from "react-icons/ri";
import { BsCoin } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const ExchangeToken = () => {
  return (
    <article className={styles.layout}>
      <div className={styles.flexLayout}>
        <RiExchangeLine size={30} color="gray" />
        <span className={styles.title}>교환</span>
      </div>
      <div className={styles.exchangeLayout}>
        <div className={styles.inputLayout}>
          <BsCoin size={30} color="rgb(239, 142, 25)" />
          <input className={styles.input} />
        </div>
        <IoIosArrowDown size={50} />
        <div className={styles.inputLayout}>
          <BsCoin size={30} color="rgb(22, 142, 25)" />
          <input className={styles.input} />
        </div>
      </div>
      <div className={styles.submitLayout}>
        <span className={styles.subText}>수수료 : 0.05%</span>
        <button className={styles.exchangeButton}>교환</button>
      </div>
    </article>
  );
};

export default ExchangeToken;
