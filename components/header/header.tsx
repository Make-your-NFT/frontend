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
import MyWallet from "./myWallet";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useRouter } from "next/router";
import { injected } from "@utils/connectors";
import PopupMenu from "@components/popupMenu/popupMenu";

const Header = () => {
  const { chainId, account, active, activate, deactivate } = useWeb3React();
  const [sideBar, setSideBar] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showPopupMenu, setShowPopupMenu] = useState(false);
  const [login, setLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isActive = window.sessionStorage.getItem("active");
    const isLogin = window.localStorage.getItem("user");
    if (isActive) {
      activate(injected);
    }
    if (isLogin) {
      setLogin(true);
    }
  }, []);

  const goToProfile = () => {
    if (active) {
      router.push("/profile");
    } else {
      alert("먼저 지갑을 연동해주세요!");
    }
  };
  const handleSideBar = () => {
    sideBar ? setSideBar(false) : setSideBar(true);
  };

  const openWallet = () => {
    setShowWallet(true);
    setShowPopupMenu(false);
  };

  const closeWallet = () => {
    setShowWallet(false);
  };

  const openPopupMenu = () => {
    setShowPopupMenu(true);
    setShowWallet(false);
  };

  const closePopupMenu = () => {
    setShowPopupMenu(false);
  };

  return (
    <header className={styles.layout}>
      <div className={styles.brand}>
        <Link href={"/"}>
          <div className={styles.brandName}>
            <Image src={shirt} width={40} height={40} />
            Make Your NFT
          </div>
        </Link>
      </div>
      <SearchBar />
      <ul className={styles.navBar}>
        <div style={{ display: "flex" }}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} href={"/explore"}>
              Explore
            </Link>
          </li>
          {login ? (
            <div className={styles.navBar}>
              <li className={styles.navItem}>
                <Link className={styles.navLink} href={"/exchange"}>
                  Exchange
                </Link>
              </li>
              <li className={styles.navItem}>
                <div onClick={goToProfile} onMouseEnter={openPopupMenu}>
                  <RiAccountCircleLine
                    className={styles.navIcon}
                    size={40}
                    color="gray"
                  ></RiAccountCircleLine>
                </div>
              </li>
              <li className={styles.navItem}>
                <div onMouseEnter={openWallet}>
                  <MdOutlineAccountBalanceWallet size={40} color="gray" />
                </div>
              </li>
            </div>
          ) : (
            <li className={styles.navItem}>
              <Link href={"/signin"}>Login</Link>
            </li>
          )}
        </div>
        {showWallet ? (
          <div onMouseLeave={closeWallet}>
            <MyWallet />
          </div>
        ) : null}
        {showPopupMenu ? (
          <div onMouseLeave={closePopupMenu}>
            <PopupMenu />
          </div>
        ) : null}
      </ul>

      <div className={styles.menu} onClick={handleSideBar}>
        {sideBar ? (
          <MdClear size={35} color="gray" />
        ) : (
          <MdMenu size={35} color="gray" />
        )}
      </div>
      {sideBar ? <SideBar /> : null}
    </header>
  );
};

export default Header;
