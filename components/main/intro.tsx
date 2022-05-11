import IntroSlider from "@components/slider/introSlider";
import styles from "components/main/intro.module.css";
import Link from "next/link";
import globalStyles from "styles/customGlobal.module.css";

const Intro = () => {
  return (
    <div className={styles.layout}>
      <div>
        <h1 className={styles.h1}>당신만의 NFT로</h1>
        <h1 className={styles.h1}>옷을 만들어보세요</h1>
        <p className={styles.h3}>
          Make Your NFT에서 당신의 NFT를 옷으로 만들어 배송해 드립니다
        </p>
        <button className={styles.exploreButton}>
          <Link href={"/explore"}>Explore</Link>
        </button>
      </div>
      <IntroSlider />
    </div>
  );
};

export default Intro;
