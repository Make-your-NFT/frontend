import Layout from "@components/layout";
import styles from "components/userInfo/index.module.css";
import { RiAccountCircleLine } from "react-icons/ri";
import Transaction from "components/userInfo/transaction";

const Index = () => {
  return (
    <Layout>
      <div className={styles.layout}>
        <div className={styles.titleLayout}>
          <RiAccountCircleLine size={38} color="black" />
          <span className={styles.title}>회원 정보</span>
        </div>
        <hr className={styles.hrBold} />
        <div className={styles.flexInfoLayout}>
          <div className={styles.infoLayout}>
            <div className={styles.info}>
              <span className={styles.infoTag}>이름</span>
              <span className={styles.infoText}>김정현</span>
            </div>
            <div className={styles.info}>
              <span className={styles.infoTag}>이메일</span>
              <span className={styles.infoText}>qwer@gmail.com</span>
            </div>
            <div className={styles.info}>
              <span className={styles.infoTag}>주소</span>
              <span className={styles.infoText}>
                경기도 시흥시 오동마을로 16
              </span>
            </div>
            <div className={styles.info}>
              <span className={styles.infoTag}>가입 일자</span>
              <span className={styles.infoText}>2022.05.26</span>
            </div>
          </div>
          <div className={styles.infoLayout}>
            <Transaction />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
