import styles from "components/printShirt/shirtModeling.module.css";

const ShirtModeling = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.titleLayout}>
        <span className={styles.title}>옷 만들기</span>
        <span className={styles.subTitle}>원하는 부위에 NFT를 올려보세요</span>
      </div>
      <div></div>
    </div>
  );
};

export default ShirtModeling;
