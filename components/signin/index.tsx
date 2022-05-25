import Layout from "@components/layout";
import styles from "components/signin/index.module.css";
import Link from "next/link";
import { KAKAO_AUTH_URL } from "@utils/login";

import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const googleClientId: string = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

  const onLoginSuccess = (
    result: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(result);
    router.push("/profile");
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
            <input className={styles.inputBar} type="email" id="email" />
          </div>
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>Password</span>
            <input className={styles.inputBar} type="password" id="password" />
          </div>
        </form>
        <div className={styles.buttonLayout}>
          <button className={styles.loginButton}>로그인</button>
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
