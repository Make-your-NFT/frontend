import styles from "components/filter/filter.module.css";
import filterBoxStyles from "components/filter/filterBox.module.css";
import FilterBox from "./filterBox";
import { MdFilterAlt } from "react-icons/md";
import { useEffect, useState, useRef } from "react";

const Filter = () => {
  const [filterClick, setFilterClick] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    window.innerWidth <= 960 ? setFilterClick(true) : setFilterClick(false);
  }

  const handleOpenFilter = () => {
    if(filterClick){
      console.log("open!")
      openFilter ? setOpenFilter(false) : setOpenFilter(true);
    }
    else{
      console.log("close!")
    }
  }
  
  useEffect(() =>{
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <div className={styles.layout}>
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
        }}
        className={filterBoxStyles.layout}
        onClick={handleOpenFilter}
      >
        <span className={filterBoxStyles.name}>Filter</span>

        <MdFilterAlt
          style={{ marginRight: "20px", marginLeft: "auto" }}
          size={25}
        />
      </div>
      {!filterClick || openFilter ? (
              <div className={styles.filterList} ref={filterRef}>
              <FilterBox name="가격1" />
      <FilterBox name="가격2" />
      <FilterBox name="가격3" />
      <FilterBox name="가격4" />
      </div>
      ) : null}

    </div>
  );
};

export default Filter;
