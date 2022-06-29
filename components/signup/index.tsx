import DaumAddress from "@components/daumPostCode/daumAddress";
import Layout from "@components/layout";
import styles from "components/signup/index.module.css";
import { MdClear, MdDone } from "react-icons/md";
import React, {
  ChangeEventHandler,
  FormEventHandler,
  useRef,
  useState,
} from "react";
import { signup, checkID, checkEmail } from "@utils/apis";
import { useRouter } from "next/router";

const Index = () => {
  const passwordRegExp = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
  const emailRegExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const [id, setId] = useState("");
  const [isCheckID, setIsCheckID] = useState(false);

  const [sendEmailAuth, setSendEmailAuth] = useState(false);
  const [email, setEmail] = useState("");
  const [emailAuth, setEmailAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [rightPassword, setRightPassword] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [searchAddress, setSearchAddress] = useState(false);
  const [address, setAddress] = useState("");

  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const emailAuthRef = useRef<HTMLInputElement>(null);
  const checkIDRef = useRef<HTMLSpanElement>(null);

  const checkEmailRef = useRef<HTMLSpanElement>(null);
  const passwordRef = useRef<HTMLSpanElement>(null);
  const checkPasswordRef = useRef<HTMLSpanElement>(null);

  const handleEmailIsRight = (e: any) => {
    e.preventDefault();
    const checkedEmail = emailRef.current!.value;
    setEmail(checkedEmail);
    const result = emailRegExp.test(checkedEmail);

    if (!result) {
      checkEmailRef.current!.style.color = "red";
      checkEmailRef.current!.innerHTML =
        "유효한 이메일 형식으로 입력해 주세요.";
    } else {
      checkEmailRef.current!.innerHTML = "";
      setIsCheckID(true);
      emailAuthRef.current!.disabled = false;
    }
  };

  const handleEmailAuth = async () => {
    const result = await checkEmail(id, email);
  };
  const handleCheckID = async () => {
    const result = await checkID(id);
    if (!result) {
      checkEmailRef.current!.style.color = "red";
      checkEmailRef.current!.innerHTML =
        "유효한 이메일 형식으로 입력해 주세요.";
    } else {
      checkEmailRef.current!.innerHTML = "";
      setSendEmailAuth(true);
      emailAuthRef.current!.disabled = false;
    }
  };

  const handleCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length === 0) {
      checkPasswordRef.current!.style.display = "none";
      setRightPassword(false);

      return;
    } else {
      setRightPassword(false);

      checkPasswordRef.current!.style.display = "block";
    }

    if (e.target.value !== password) {
      checkPasswordRef.current!.style.color = "red";
      checkPasswordRef.current!.innerHTML = "비밀번호가 일치하지 않습니다.";
      setRightPassword(false);
    } else {
      checkPasswordRef.current!.style.color = "green";
      checkPasswordRef.current!.innerHTML = "비밀번호가 일치합니다.";
      setRightPassword(true);
    }
  };
  // const handleSearchAddress = (e: any) => {
  //   e.preventDefault();
  //   setSearchAddress(true);
  // };

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    if (e.target.value.length === 0) {
      setIsPassword(false);
      passwordRef.current!.style.color = "#777";
      return;
    }
    const result = passwordRegExp.test(e.target.value);

    if (!result) {
      passwordRef.current!.style.color = "red";
      setIsPassword(false);
    } else {
      passwordRef.current!.style.color = "green";
      setIsPassword(true);
    }
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const id = e.target.id.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const againPassword = e.target.checkPassword.value;

    const result = await signup(id, email, password, againPassword);
    if (result) {
      router.push("/signin");
    }
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
            <span className={styles.inputTitle}>아이디</span>
            <div className={styles.inputWithButtonLayout}>
              <input
                className={styles.inputBar}
                type="text"
                id="id"
                ref={emailRef}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setId(e.target.value);
                }}
              />
              <button className={styles.button} onClick={handleCheckID}>
                중복 확인
              </button>
            </div>
            <span
              style={{ fontSize: "12px" }}
              className={styles.subTitle}
              ref={checkIDRef}
            ></span>
          </div>
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
            <span className={styles.inputTitle}>인증번호</span>
            <input
              className={styles.inputBar}
              onChange={checkPassword}
              disabled
              ref={emailAuthRef}
            />
            <span
              style={{ fontSize: "12px" }}
              className={styles.subTitle}
              ref={passwordRef}
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
              ref={passwordRef}
            >
              8~16자 사이의 영어,숫자,특수문자를 포함하여 입력해 주세요.
            </span>
          </div>
          <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>비밀번호 확인</span>
            <input
              className={styles.inputBar}
              type="password"
              id="checkPassword"
              onChange={handleCheckPassword}
            />
            <span
              style={{ fontSize: "12px" }}
              className={styles.subTitle}
              ref={checkPasswordRef}
            ></span>
          </div>

          {/* <div className={styles.inputLayout}>
            <span className={styles.inputTitle}>휴대전화</span>
            <input
              className={styles.inputBar}
              type="tel"
              id="phone"
              onChange={checkPassword}
            />
            <span
              style={{ fontSize: "12px" }}
              className={styles.subTitle}
              ref={checkPasswordRef}
            ></span>
          </div> */}
          {/* <div className={styles.inputLayout}>
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
          </div> */}
          <button type="submit" className={styles.signupButton}>
            회원가입
          </button>
        </form>

        {/* {searchAddress ? (
          <DaumAddress
            setSearchAddress={setSearchAddress}
            setAddress={setAddress}
          />
        ) : null} */}
      </div>
    </Layout>
  );
};

export default Index;
