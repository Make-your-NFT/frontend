import styles from "components/sidebar/sideBar.module.css";
import { useRouter } from "next/router";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@utils/connectors";
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
