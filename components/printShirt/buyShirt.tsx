import styles from "components/printShirt/buyShirt.module.css";
import { FaTshirt } from "react-icons/fa";
import Option from "./option";
import PrintInfo from "./printInfo";
const BuyShirt = () => {
  return (
    <div className={styles.layout}>
      <Option />
      <PrintInfo />
    </div>
  );
};

export default BuyShirt;
