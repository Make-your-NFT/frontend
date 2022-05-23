import styles from "components/header/myWallet.module.css";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@utils/connectors";
import { useEffect, useRef } from "react";
const MyWallet = () => {
  const { chainId, account, active, activate, deactivate } = useWeb3React();
  const walletRef = useRef<HTMLDivElement | null>(null);

  const handleConnect = () => {
    if (active) {
      deactivate();
      window.sessionStorage.setItem("active", "false");
      return;
    }
    const errorText: string =
      "/No Ethereum provider was found on window.ethereum/";
    activate(injected, (error) => {
      if (errorText === error.message) {
        window.open("https://metamask.io/download.html");
      }
    });
    window.sessionStorage.setItem("active", "true");
  };

  return (
    <div style={{ position: "relative" }}>
      {active ? (
        <div className={styles.layout} ref={walletRef}>
          <div className={styles.addressLayout}>
            <MdOutlineAccountBalanceWallet size={60} color="green" />

            <p className={styles.address}>{account}</p>
            <span className={styles.h1}>My Wallet</span>
          </div>

          <button className={styles.connectButton} onClick={handleConnect}>
            연동 해제
          </button>
        </div>
      ) : (
        <div className={styles.layout} ref={walletRef}>
          <div className={styles.addressLayout}>
            <MdOutlineAccountBalanceWallet size={60} color="#ffab1c" />

            <p className={styles.h2}>더 많은 NFT의 탐험을 위해</p>

            <span className={styles.h1}>지갑을 연동해주세요</span>
          </div>
          <button className={styles.connectButton} onClick={handleConnect}>
            연동하기
          </button>
        </div>
      )}
    </div>
  );
};

export default MyWallet;
