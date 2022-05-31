import Layout from "@components/layout";
import styles from "components/signin/index.module.css";
import Link from "next/link";
import React, { useState } from "react";
import { login } from "@utils/apis";
import { useRouter } from "next/router";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onLogin = async () => {
    const result = await login(email, password);
    if (result) {
      router.push("/");
    } else {
      alert("아이디나 비밀번호를 확인해 주세요.");
    }
  };

  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.titleLayout}>
          <span className={styles.title}>로그인</span>
          <hr className={styles.hrBold} />
          <span className={styles.subTitle}>
            멋진 세상에 뛰어들 준비가 되셨나요?
          </span>
        </div>
        {/* <Link href={KAKAO_AUTH_URL}>카카오 로그인</Link> */}
        <form className={styles.loginLayout}>
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>Email</span>
            <input
              className={styles.inputBar}
              type="email"
              id="email"
              onChange={handleEmail}
            />
          </div>
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>Password</span>
            <input
              className={styles.inputBar}
              type="password"
              id="password"
              onChange={handlePassword}
            />
          </div>
        </form>
        <div className={styles.buttonLayout}>
          <button className={styles.loginButton} onClick={onLogin}>
            로그인
          </button>
          <Link href={"/signup"}>
            <button className={styles.signupButton}>회원가입</button>
          </Link>
        </div>

        {/* <GoogleLogin
          clientId={googleClientId}
          buttonText="Google"
          onSuccess={(result) => onLoginSuccess(result)}
          onFailure={(result) => console.log(result)}
        /> */}
      </div>
    </Layout>
  );
};

export default Index;
