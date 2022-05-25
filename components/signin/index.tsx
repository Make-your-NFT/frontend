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
        <span className={styles.title}>Login</span>
        <Link href={KAKAO_AUTH_URL}>카카오 로그인</Link>
        <GoogleLogin
          clientId={googleClientId}
          buttonText="Google"
          onSuccess={(result) => onLoginSuccess(result)}
          onFailure={(result) => console.log(result)}
        />
      </div>
    </Layout>
  );
};

export default Index;
