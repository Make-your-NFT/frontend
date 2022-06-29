import styles from "components/exchange/gameList.module.css";
import { BsFillShieldFill } from "react-icons/bs";

const GameList = () => {
  const testData = new Array(20).fill(0);
  return (
    <article className={styles.layout}>
      {testData.map((data) => (
        <div className={styles.gameInfoLayout}>
          <div className={styles.flexLayout}>
            <BsFillShieldFill size={30} color="gold" />
            <strong className={styles.title}>Defense Game</strong>
          </div>
          <div className={styles.flexLayout}>
            <strong className={styles.price}>2,505</strong>
            <span className={styles.unit}>KRW</span>
          </div>
        </div>
      ))}
    </article>
  );
};

export default GameList;
