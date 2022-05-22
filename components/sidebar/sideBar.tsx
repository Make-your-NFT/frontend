import styles from "components/sidebar/sideBar.module.css";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@utils/connectors";
import { RiAccountCircleLine } from "react-icons/ri";
import { FiMap } from "react-icons/fi";
import { MdCreate } from "react-icons/md";
const SideBar = () => {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const router = useRouter();
  const movePage = (link: string) => {
    router.push(link);
  };

  const handleConnect = () => {
    if (active) {
      deactivate();
      return;
    }
    const errorText: string =
      "/No Ethereum provider was found on window.ethereum/";
    activate(injected, (error) => {
      if (errorText === error.message) {
        window.open("https://metamask.io/download.html");
      }

      console.log(error);
    });
  };

  return (
    <div className={styles.background}>
      <div className={styles.layout}>
        <ul className={styles.navBar}>
          <div className={styles.connectButtonLayout}>
            <button className={styles.connectButton} onClick={handleConnect}>
              {!active ? "연동하기" : "연동 해제"}
            </button>
          </div>
          {active ? (
            <div className={styles.navItemLayout}>
              <li
                className={styles.navItem}
                onClick={() => {
                  movePage("/profile");
                }}
              >
                Profile
              </li>
              <RiAccountCircleLine size={40} color="gray" />
            </div>
          ) : null}
          <div className={styles.navItemLayout}>
            <li
              className={styles.navItem}
              onClick={() => {
                movePage("/explore");
              }}
            >
              Explore
            </li>
            <FiMap size={40} color="gray" />
          </div>
          <div className={styles.navItemLayout}>
            <li
              className={styles.navItem}
              onClick={() => {
                movePage("/");
              }}
            >
              Create
            </li>
            <MdCreate size={40} color="gray" />
          </div>
        </ul>
        <button className={styles.account}>로그인</button>
      </div>
    </div>
  );
};

export default SideBar;
