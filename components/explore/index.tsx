import Layout from "@components/layout";
import styles from "components/explore/index.module.css";
import Filter from "components/filter/filter";
import Asset from "./asset";

const Index = () => {
  const assets = [
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["1", "1"],
    ["2", "2"],
    ["3", "3"],
    ["4", "4"],
    ["5", "5"],
    ["5", "5"],
    ["5", "5"],
  ];

  return (
    <Layout>
      <div className={styles.layout}>
        <Filter />
        <div className={styles.assetsLayout}>
          {assets.map((asset, index) => {
            return <Asset key={index} title={asset[0]} author={asset[1]} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
