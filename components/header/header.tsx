import styles from "components/header/header.module.css";
import Image from "next/image";
import { shirt } from "@public/images";
import SearchBar from "./searchBar";
import Link from "next/link";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdMenu, MdClear } from "react-icons/md";
import { useEffect, useState } from "react";
import SideBar from "@components/sidebar/sideBar";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@utils/connectors";
import MyWallet from "./myWallet";
import { unwatchFile } from "fs";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const { chainId, account, active, activate, deactivate } = useWeb3React();

  const handleSideBar = () => {
    sideBar ? setSideBar(false) : setSideBar(true);
  };

  const handleWallet = () => {
    showWallet ? setShowWallet(false) : setShowWallet(true);
  };

  useEffect(() => {
    if (active) {
      console.log(chainId);
      console.log(account);
    }
  }, [active]);
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
    <div className={styles.layout}>
      <div className={styles.brand}>
        <div className={styles.brandName}>
          <Link href={"/"}>
            <Image src={shirt} width={40} height={40} />
          </Link>
          Make Your NFT
        </div>
      </div>
      <SearchBar />
      <ul className={styles.navBar}>
        <div style={{ display: "flex" }}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href={"/explore"}>
              Explore
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href={"/"}>
              Create
            </Link>
          </li>
          <li className={styles.navItem}>
            <div onClick={handleConnect} onMouseEnter={handleWallet}>
              {active ? (
                <RiAccountCircleLine
                  className={styles.navIcon}
                  size={40}
                  color="green"
                />
              ) : (
                <RiAccountCircleLine
                  className={styles.navIcon}
                  size={40}
                  color="gray"
                />
              )}
            </div>
          </li>
          {showWallet ? <MyWallet /> : null}
        </div>
      </ul>
      <div className={styles.menu} onClick={handleSideBar}>
        {sideBar ? (
          <MdClear size={35} color="gray" />
        ) : (
          <MdMenu size={35} color="gray" />
        )}
      </div>
      {sideBar ? <SideBar /> : null}
    </div>
  );
};

export default Header;
