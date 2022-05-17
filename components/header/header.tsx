import styles from "components/header/header.module.css";
import Image from "next/image";
import { shirt } from "@public/images";
import SearchBar from "./searchBar";
import Link from "next/link";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdMenu, MdClear } from "react-icons/md";
import { useState } from "react";
import SideBar from "@components/sidebar/sideBar";

const Header = () => {
  const [sideBar, setSideBar] = useState(false);

  const handleSideBar = () => {
    sideBar ? setSideBar(false) : setSideBar(true);
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
            <RiAccountCircleLine
              className={styles.navIcon}
              size={40}
              color="gray"
            />
          </li>
        </div>
      </ul>
      <div className={styles.menu} onClick={handleSideBar}>
        {sideBar ? (
          <MdClear size={40} color="gray" />
        ) : (
          <MdMenu size={40} color="gray" />
        )}
      </div>
      {sideBar ? <SideBar /> : null}
    </div>
  );
};

export default Header;
