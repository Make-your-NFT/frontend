import DaumAddress from "@components/daumPostCode/daumAddress";
import Layout from "@components/layout";
import styles from "components/signup/index.module.css";
import { useState } from "react";
const Index = () => {
  const [emailAuth, setEmailAuth] = useState(false);
  const [searchAddress, setSearchAddress] = useState(false);
  const [address, setAddress] = useState("");

  const handleEmailAuth = () => {};
  const handleSearchAddress = (e: any) => {
    e.preventDefault();
    setSearchAddress(true);
  };

  const clickInput = () => {};

  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.titleLayout}>
          <span className={styles.title}>회원가입</span>
          <hr className={styles.hrBold} />
        </div>
        <form style={{ width: "100%" }}>
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>이메일</span>
            <div className={styles.inputWithButtonLayout}>
              <input className={styles.inputBar} type="email" id="email" />
              <button className={styles.button}>인증</button>
            </div>
          </div>
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>비밀번호</span>
            <input className={styles.inputBar} type="password" id="password" />
          </div>
          {/* <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>휴대전화</span>
            <div className={styles.inputWithButtonLayout}>
              <div className={styles.inputFormLayout}>
                <input className={styles.inputBar} type="email" id="email" />
              </div>
              <button className={styles.phoneAuthButton}>인증하기</button>
            </div>
          </div> */}
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>주소</span>
            <div className={styles.inputWithButtonLayout}>
              <input
                className={styles.inputBar}
                type="text"
                id="address"
                value={address || ""}
                readOnly
              />
              <button className={styles.button} onClick={handleSearchAddress}>
                검색
              </button>
            </div>
          </div>
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>상세주소</span>
            <input className={styles.inputBar} type="text" id="detailAddress" />
          </div>
        </form>
        {searchAddress ? (
          <DaumAddress
            setSearchAddress={setSearchAddress}
            setAddress={setAddress}
          />
        ) : null}
        <button className={styles.signupButton}>회원가입</button>
      </div>
    </Layout>
  );
};

export default Index;
