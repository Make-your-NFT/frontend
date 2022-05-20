import styles from "components/profile/myAssets.module.css";
import Menu from "./menu";
import { FiGift } from "react-icons/fi";
import { IoDiamond } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { assets } from "testSample/assets";
import Asset from "@components/asset/asset";

const MyAssets = () => {
  const [choosedMenu, setChoosedMenu] = useState("내 아이템");

  const handleChoosedMenu = (e: any) => {
    setChoosedMenu(e.target.innerText);
  };

  return (
    <div className={styles.layout}>
      <div className={styles.myAssetsLayout}>
        <div className={styles.menuesLayout} onClick={handleChoosedMenu}>
          <Menu tag="내 아이템">
            <IoDiamond size={20} color="gray" />
          </Menu>
          <Menu tag="구매한 아이템">
            <FiGift size={20} color="gray" />
          </Menu>
          <Menu tag="찜">
            <FaHeart size={20} color="gray" />
          </Menu>
        </div>
        <div className={styles.assetListLayout}>
          <div className={styles.choosedMenuLayout}>
            <span className={styles.choosedMenu}>{choosedMenu}</span>
            <span className={styles.assetCount}>15</span>
          </div>
          <div className={styles.myAssets}>
            {assets.map((asset, index) => {
              return (
                <Asset
                  key={index}
                  title={asset["title"]}
                  author={asset["author"]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAssets;
