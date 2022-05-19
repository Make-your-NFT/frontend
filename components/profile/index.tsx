import Layout from "@components/layout";
import styles from "components/profile/index.module.css";
import UserInfo from "./userInfo";

const Index = () => {
  return (
    <Layout>
      <div className={styles.layout}>
        <UserInfo />
      </div>
    </Layout>
  );
};

export default Index;
