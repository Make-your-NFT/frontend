import IntroSlider from "@components/slider/introSlider";
import styles from "components/main/intro.module.css";
import Link from "next/link";
import globalStyles from "styles/customGlobal.module.css";

const Intro = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.background}/>
      <div className={styles.introLayout}>
        <div>
          <div className={styles.introText}>
          <div className={styles.h1}>당신만의 NFT로</div>
        <div className={styles.h1}>옷을 만들어보세요</div>
        <br/>
        <p className={styles.h3}>
          Make Your NFT에서 당신의 NFT를 옷으로 만들어 
        </p>
        <p className={styles.h3}>
          배송해 드립니다.
        </p>
        <br/>
        <div className={styles.buttonLayout}>
                  <button className={styles.exploreButton}>
          <Link href={"/explore"}>Explore</Link>
        </button>
                          <button className={styles.createButton}>
          <Link href={"/"}>Create</Link>
        </button>
        </div>

          </div>
        
        </div>
        <div>
        <IntroSlider />

        </div>
      </div>
    </div>
  );
};

export default Intro;
