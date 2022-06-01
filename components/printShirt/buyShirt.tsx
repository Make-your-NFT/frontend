import styles from "components/printShirt/buyShirt.module.css";
import { FaTshirt } from "react-icons/fa";
import Option from "./option";
const BuyShirt = () => {
  return (
    <div className={styles.layout}>
      <Option />
    </div>
  );
};

export default BuyShirt;
