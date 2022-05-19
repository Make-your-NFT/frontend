import styles from "components/header/myWallet.module.css";
import { BsWallet } from "react-icons/bs";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@utils/connectors";
const MyWallet = () => {
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const handleConnect = () => {
    if (active) {
      console.log(account);
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
    <div style={{ position: "relative" }}>
      {active ? (
        <div className={styles.layout}>

          <div className={styles.addressLayout}>
                              <BsWallet size={40} color="green" />

          <p className={styles.address}>{account}</p>
          <span className={styles.h1}>My Wallet</span>            
          </div>

                  <button className={styles.connectButton} onClick={handleConnect}>
          연동 해제
        </button>
        </div>
      ) : (
              <div className={styles.layout}>
        <BsWallet size={40} color="#ffab1c" />
        <span className={styles.h1}>지갑을 연동해주세요</span>
        <button className={styles.connectButton} onClick={handleConnect}>
          연동하기
        </button>
      </div>
      )}
    </div>
  );
};

export default MyWallet;
