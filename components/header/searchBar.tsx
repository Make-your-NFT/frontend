import styles from "components/header/searchBar.module.css";
import { useRef, useState, useEffect} from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: any) => {
    if(e.target.localName !== "input"){
      setClick(false);
    }
    else{
          click ? setClick(false) : setClick(true);

    }
  }
  const handleTyping = (e: any) => {
    setSearch(e.target.value);
  };

  const clearText = () => {
    if (searchRef.current) {
      searchRef.current.value = "";
      setSearch("");
    }
  };

  useEffect(() =>{
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);

    }
  }, [])

  return (
    <div className={`${!click ? styles.layout : styles.layoutActive}`} onClick={handleClick}>
      <FaSearch className={styles.searchIcon} size="20" />
      <input
        ref={searchRef}
        onChange={handleTyping}
        className={styles.search}
        placeholder="검색"
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
