import styles from "components/sidebar/sideBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const SideBar = () => {
  const router = useRouter();
  const movePage = (link: string) => {
    router.push(link);
  };

  return (
    <div className={styles.background}>
      <div className={styles.layout}>
        <ul className={styles.navBar}>
          <li
            className={styles.navItem}
            onClick={() => {
              movePage("/explore");
            }}
          >
            Explore
          </li>
          <li
            className={styles.navItem}
            onClick={() => {
              movePage("/");
            }}
          >
            Create
          </li>
        </ul>
        <button className={styles.account}>로그인</button>
      </div>
    </div>
  );
};

export default SideBar;
