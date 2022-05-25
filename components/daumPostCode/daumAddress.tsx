import DaumPostcode, { Address } from "react-daum-postcode";
import styles from "components/daumPostCode/daumAddress.module.css";
import { useEffect } from "react";

interface daumProps {
  setSearchAddress: Function;
  setAddress: Function;
}
const DaumAddress = (props: daumProps) => {
  const onClose = () => {
    props.setSearchAddress(false);
  };
  const handleComplete = (data: Address) => {
    onClose();
    console.log(data);
    props.setAddress(data.roadAddress);
    // let fullAddress = data.address;
    // let extraAddress = "";
    // if (data.addressType === "R") {
    //   if (data.bname !== "") {
    //     extraAddress += data.bname;
    //   }
    //   if (data.buildingName !== "") {
    //     extraAddress +=
    //       extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
    //   }
    //   fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    // }
    //fullAddress -> 전체 주소반환
  };
  return (
    <div className={styles.layout}>
      <div className={styles.background} />
      <div className={styles.daumLayout}>
        <DaumPostcode
          className={styles.daumPostCode}
          onComplete={handleComplete}
        />
        <button className={styles.closeButton} onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};
export default DaumAddress;
