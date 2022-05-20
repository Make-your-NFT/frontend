import styles from "components/profile/myAssets.module.css";
import Menu from "./menu";

const MyAssets = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.myAssetsLayout}>
        <div className={styles.menuesLayout}>
          <Menu tag="내 아이템" />
          <Menu tag="구매한 아이템" />
          <Menu tag="찜" />
        </div>
        <div className={styles.assetListLayout}></div>
      </div>
    </div>
  );
};

export default MyAssets;
