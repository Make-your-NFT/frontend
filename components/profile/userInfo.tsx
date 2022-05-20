import styles from "components/profile/userInfo.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";

const UserInfo = () => {
  const [isProfileImage, setIsProfileImage] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.gradientBackground}>
        <div className={styles.profileLayout}>
          <div className={styles.profileInfoLayout}>
            <div className={styles.profileImage}>
              <BsFillPencilFill size={40} color="gray" />
            </div>
            <span className={styles.name}>김정현</span>
          </div>

          <div className={styles.balanceLayout}>
            <div className={styles.balanceInfoLayout}>
              <span className={styles.balanceInfoTitle}>주소</span>
              <span className={styles.balanceInfoText}>
                0x31C91A8fd073BE7A224eE87FEB0297d06acf4c02
              </span>
            </div>
            <hr
              style={{
                width: "100%",
                borderBottom: "1px solid rgb(200,200,200)",
              }}
            />
            <div className={styles.balanceInfoLayout}>
              <span className={styles.balanceInfoTitle}>잔액</span>
              <div>
                <span className={styles.balanceInfoText}>0.31</span>
                <span className={styles.balanceInfoText}>$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
