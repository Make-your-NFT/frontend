import Layout from "@components/layout";
import styles from "components/profile/index.module.css";
import MenuList from "./menuList";
import UserInfo from "./userInfo";

const Index = () => {
  return (
    <Layout>
      <div className={styles.layout}>
        <UserInfo />
        <MenuList />
      </div>
    </Layout>
  );
};

export default Index;
