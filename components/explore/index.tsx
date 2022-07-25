import Layout from "@components/layout";
import styles from "components/explore/index.module.css";
import Filter from "components/filter/filter";
import Asset from "components/asset/asset";
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
              return (
                <Asset
                  key={index}
                  title={asset["title"]}
                  author={asset["author"]}
                  id={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
