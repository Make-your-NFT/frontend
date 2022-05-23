import styles from "components/profile/userInfo.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

const UserInfo = () => {
  const [profileImage, setProfileImage] = useState("");
  const [hoverProfileImage, setHoverProfileImage] = useState(false);

  const handleHover = () => {
    hoverProfileImage
      ? setHoverProfileImage(false)
      : setHoverProfileImage(true);
  };
  const handleFile = (e: any) => {
    console.log(e.target.files);
    setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className={styles.layout}>
      <div className={styles.gradientBackground}>
        <div className={styles.profileLayout}>
          <div className={styles.profileInfoLayout}>
            <div
              className={styles.profileImage}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              {profileImage.length > 0 ? (
                <Image
                  className={styles.userProfileImage}
                  src={profileImage}
                  width={110}
                  height={110}
                />
              ) : null}
              {hoverProfileImage ? (
                <div className={styles.hoverInput}>
                  <input
                    className={styles.profileImageInput}
                    type="file"
                    id="file"
                    accept="image/png, image/jpeg"
                    onChange={handleFile}
                  />
                  <label htmlFor="file" className={styles.inputLabel}>
                    <BsFillPencilFill size={40} color="gray" />
                  </label>
                </div>
              ) : null}
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
