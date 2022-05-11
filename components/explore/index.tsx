import Layout from "@components/layout";
import styles from "components/explore/index.module.css";
import Filter from "components/filter/filter";
import Asset from "./asset";
import { assets } from "testSample/assets";
import AssetSlider from "@components/slider/assetSlider";

const Index = () => {
  return (
    <Layout>
      <div className={styles.layout}>
        <Filter />
        <div className={styles.exploreLayout}>
          <div>
            <AssetSlider />
          </div>
          <div className={styles.assetsLayout}>
            {assets.map((asset, index) => {
              return <Asset key={index} title={asset[0]} author={asset[1]} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
