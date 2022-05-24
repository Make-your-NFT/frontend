import styles from "components/popupMenu/popupMenu.module.css";
import Link from "next/link";

const PopupMenu = () => {
  return (
    <div className={styles.layout}>
      <ul className={styles.navBar}>
        <li className={styles.navItem}>
          <Link href={"/profile"}>My Assets</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/userInfo"}>My Info</Link>
        </li>
      </ul>
    </div>
  );
};

export default PopupMenu;
