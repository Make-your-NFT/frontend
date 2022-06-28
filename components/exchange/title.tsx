import styles from "components/exchange/title.module.css";
import { BsFillShieldFill } from "react-icons/bs";

const Title = () => {
  return (
    <article className={styles.layout}>
      <div className={styles.flexLayout}>
        <BsFillShieldFill size={30} color="gold" />
        <strong className={styles.titleText}>Defense Game</strong>
      </div>
      <div className={styles.flexLayout}>
        <strong className={styles.price}>2,505</strong>
        <span className={styles.unit}>KRW</span>
      </div>
    </article>
  );
};

export default Title;
