import styles from "components/header/searchBar.module.css";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const handleTyping = (e: any) => {
    setSearch(e.target.value);
  };

  const clearText = () => {
    if (searchRef.current) {
      searchRef.current.value = "";
      setSearch("");
    }
  };

  return (
    <div className={styles.layout}>
      <FaSearch className={styles.searchIcon} size="20" />
      <input
        ref={searchRef}
        onChange={handleTyping}
        className={styles.search}
        placeholder="Search items, collections, and accounts"
      />
      {search.length > 0 ? (
        <MdClear
          className={styles.clear}
          onClick={clearText}
          size="20"
          color="gray"
          style={{ cursor: "pointer" }}
        />
      ) : null}
    </div>
  );
};

export default SearchBar;
