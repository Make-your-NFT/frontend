import DaumAddress from "@components/daumPostCode/daumAddress";
import Layout from "@components/layout";
import styles from "components/signup/index.module.css";
import { useRef, useState } from "react";
const Index = () => {
  const passwordRegExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const [emailAuth, setEmailAuth] = useState(false);
  const [password, setPassword] = useState(false);
  const [searchAddress, setSearchAddress] = useState(false);
  const [address, setAddress] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const checkEmailRef = useRef<HTMLSpanElement>(null);
  const checkPasswordRef = useRef<HTMLSpanElement>(null);

  const handleEmailAuth = (e: any) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const result = emailRegExp.test(email);

    if (!result) {
      checkEmailRef.current!.style.color = "red";
      checkEmailRef.current!.innerHTML =
        "유효한 이메일 형식으로 입력해 주세요.";
    } else {
      checkEmailRef.current!.innerHTML = "";
    }
  };
  const handleSearchAddress = (e: any) => {
    e.preventDefault();
    setSearchAddress(true);
  };

  const checkPassword = (e: any) => {
    if (e.target.value.length === 0) {
      setPassword(false);

      checkPasswordRef.current!.style.color = "#777";
      return;
    }
    const result = passwordRegExp.test(e.target.value);

    if (!result) {
      checkPasswordRef.current!.style.color = "red";
      setPassword(false);
    } else {
      checkPasswordRef.current!.style.color = "green";
      setPassword(true);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.titleLayout}>
          <span className={styles.title}>회원가입</span>
          <hr className={styles.hrBold} />
          <span className={styles.subTitle}>새로운 세상을 함께 떠나봐요</span>
        </div>
        <form style={{ width: "100%" }} onSubmit={onSubmit}>
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>이메일</span>
            <div className={styles.inputWithButtonLayout}>
              <input
                className={styles.inputBar}
                type="email"
                id="email"
                ref={emailRef}
              />
              <button className={styles.button} onClick={handleEmailAuth}>
                인증
              </button>
            </div>
            <span
              style={{ fontSize: "12px" }}
              className={styles.subTitle}
              ref={checkEmailRef}
            ></span>
          </div>
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>비밀번호</span>
            <input
              className={styles.inputBar}
              type="password"
              id="password"
              onChange={checkPassword}
            />
            <span
              style={{ fontSize: "12px" }}
              className={styles.subTitle}
              ref={checkPasswordRef}
            >
              비밀번호는 8~16자 사이의 영어,숫자,특수문자를 포함하여 입력해
              주세요.
            </span>
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
          <button className={styles.signupButton}>회원가입</button>
        </form>
        {searchAddress ? (
          <DaumAddress
            setSearchAddress={setSearchAddress}
            setAddress={setAddress}
          />
        ) : null}
      </div>
    </Layout>
  );
};

export default Index;
