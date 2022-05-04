import styles from "components/main/intro.module.css";
import globalStyles from "styles/customGlobal.module.css";

const Intro = () => {
  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.h1}>당신만의 NFT로 옷을 만들어보세요</h1>
        <p className={styles.h3}>
          Make Your NFT에서 당신의 NFT를 옷으로 만들어 배송해 드립니다.
        </p>
      </div>
    </div>
  );
};

export default Intro;
