import Layout from "@components/layout";
import styles from "components/profile/index.module.css";
import { useEffect } from "react";
import MyAssets from "./myAssets";
import UserInfo from "./userInfo";

const Index = () => {
  useEffect(() => {
    const kakaoAuthCode = new URL(window.location.href).searchParams.get(
      "code"
    );
    if (kakaoAuthCode) {
      console.log(kakaoAuthCode);
      window.sessionStorage.setItem("isLogin", "true");
    }
  }, []);

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
