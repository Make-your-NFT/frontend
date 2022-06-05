import styles from "components/filter/filter.module.css";
import filterBoxStyles from "components/filter/filterBox.module.css";
import FilterBox from "./filterBox";
import { MdFilterAlt } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import PriceFilter from "./priceFilter";
import BrandFilter from "./brandFilter";

const Filter = () => {
  const [filterClick, setFilterClick] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const filterBoxRef = useRef<HTMLDivElement[]>([]);

  const handleResize = () => {
    window.innerWidth <= 960 ? setFilterClick(true) : setFilterClick(false);
  };

  const handleOpenFilter = () => {
    console.log("filter!");
    if (filterClick) {
      openFilter ? setOpenFilter(false) : setOpenFilter(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <div>
            <FilterBox name="가격">
              <PriceFilter />
            </FilterBox>
          </div>
          <div>
            <FilterBox name="브랜드">
              <BrandFilter />
            </FilterBox>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Filter;
