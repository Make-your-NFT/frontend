import Layout from "@components/layout";
import styles from "components/profile/index.module.css";
import MyAssets from "./myAssets";
import UserInfo from "./userInfo";

const Index = () => {
  return (
    <Layout>
      <div className={styles.layout}>
        <UserInfo />
        <MyAssets />
      </div>
    </Layout>
  );
};

export default Index;
