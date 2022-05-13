import styles from "components/header/header.module.css";
import Image from "next/image";
import { shirt } from "@public/images";
import SearchBar from "./searchBar";
import Link from "next/link";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.brand}>
        <Image src={shirt} width={40} height={40} />
        <div className={styles.brandName}>
          <Link href={"/"}>Make Your NFT</Link>
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
      <div className={styles.menu}>
        <MdMenu size={40} color="gray" />
      </div>
    </div>
  );
};

export default Header;
