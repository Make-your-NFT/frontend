import styles from "components/header/myWallet.module.css";
import { BsWallet } from "react-icons/bs";
const MyWallet = () => {
  return (
    <div className={styles.layout}>
      <BsWallet size={80} />
      <span className={styles.h1}>지갑을 연동해주세요</span>
      <button className={styles.connectButton}>연동하기</button>
    </div>
  );
};

export default MyWallet;
