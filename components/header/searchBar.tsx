import styles from "components/header/searchBar.module.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleTyping = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.layout}>
      <FaSearch className={styles.searchIcon} size="20" />
      <input
        onChange={handleTyping}
        className={styles.search}
        placeholder="Search items, collections, and accounts"
      />
      {search.length > 0 ? <MdClear size="20" color="gray" /> : null}
    </div>
  );
};

export default SearchBar;
