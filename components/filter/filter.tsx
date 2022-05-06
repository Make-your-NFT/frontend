import styles from "components/filter/filter.module.css";
import filterBoxStyles from "components/filter/filterBox.module.css";
import FilterBox from "./filterBox";
import { MdFilterAlt } from "react-icons/md";

const Filter = () => {
  return (
    <div className={styles.layout}>
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
        }}
        className={filterBoxStyles.layout}
      >
        <span className={filterBoxStyles.name}>Filter</span>

        <MdFilterAlt
          style={{ marginRight: "20px", marginLeft: "auto" }}
          size={25}
        />
      </div>
      <FilterBox name="가격1" />
      <FilterBox name="가격2" />
      <FilterBox name="가격3" />
      <FilterBox name="가격4" />
    </div>
  );
};

export default Filter;
